import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebsocketService} from '../websocket.service';
import {load, Message} from 'protobufjs';

const WS_URL = 'ws://' + location.host + '/ws';

@Injectable({
	providedIn: 'root'
})
export class ModelService {

	private socket: Subject<MessageEvent>;
	private telemetryMessage;
	public switches: Observable<boolean>;

	constructor(websocket: WebsocketService) {
		console.log('init modelsvc');
		load('assets/protos/telemetry.proto', (error, root) => {
			if (error) {
				console.log('failed to load .proto');
				throw error;
			}

			this.telemetryMessage = root.lookupType('Telemetry');
			console.log('Loaded protobuf');

			this.socket = websocket.connect(WS_URL);
			this.socket.subscribe((msg: MessageEvent) => {
				this.parseMessage(msg);
			});
			this.switches = Observable.create((observer) => {
				observer.next(true);
			});
		});
	}

	private parseMessage(msg: MessageEvent): void {
		const decoded = Message.decode(msg.data);
		console.log(decoded);
	}

	private verifyMessage(msg: any): boolean {
		return;
	}
}
