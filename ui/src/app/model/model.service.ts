import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {WebsocketService} from '../websocket.service';
import {load} from 'protobufjs';
import {RovModel} from './RovModel';

@Injectable({
	providedIn: 'root'
})
export class ModelService {

	private socket: Subject<MessageEvent>;
	private telemetryMessage;
	public model = new RovModel();

	constructor(websocket: WebsocketService) {
		console.log('init modelsvc');
		load('assets/protos/telemetry.proto', (error, root) => {
			if (error) {
				console.log('failed to load .proto');
				throw error;
			}
			this.telemetryMessage = root.lookupType('Telemetry');
			console.log('Loaded protobuf definition');
			// If we're on github.io don't initialize WS
			if (!(location.hostname.includes('github'))) {
				const wsUrl = 'ws://' + location.host + '/ws';
				this.socket = websocket.connect(wsUrl);
				this.socket.subscribe((msg: MessageEvent) => {
					this.parseMessage(msg);
				});
			}
			// for (const bs of this.model.observables) {
			// 	bs.subscribe(() => {
			// 		this.composeMessage(bs.getValue());
			// 	});
			// }
		});
	}

	private parseMessage(msg: MessageEvent): void {
		const decoded = this.telemetryMessage.decode(new Uint8Array(msg.data));
		console.log('Decoded submessage of type: ' + decoded.type);
		switch (decoded.type) {
			case ('switch'):
				this.model.switches.next(decoded.switch.states);
				break;
			default:
				console.log('No message action implemented: ' + decoded);
				break;
		}
	}

	private composeMessage(source: any): void {
		console.log('compose message: ' + source);
	}
}
