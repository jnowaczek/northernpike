import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {WebsocketService} from '../websocket.service';
import {load, Message, Root} from 'protobufjs';
import {HUDModel} from './HUDModel';
import {NotifierService} from 'angular-notifier';

@Injectable({
	providedIn: 'root'
})
export class CommandService {

	constructor(websocket: WebsocketService, private notifierService: NotifierService) {
		console.log('Initializing CommandService...');
		load('assets/protos/commands.proto', (error, root) => {
			if (error) {
				console.log('failed to load .proto');
				throw error;
			}
			this.protoRoot = root;
			this.commandMessage = root.lookupType('Command');
			console.log('Loaded protobuf definition:', this.commandMessage);
			// If we're on Github Pages don't initialize WS
			if (!(location.hostname.includes('github'))) {
				const wsUrl = 'ws://' + location.host + '/ws';
				this.socket = websocket.connect(wsUrl);
				this.socket.subscribe((msg: MessageEvent) => {
					this.parseMessage(msg);
				});
			}
			// for (const bs of this.model.observables
			// ) {
			// 	bs.subscribe(() => {
			// 		this.composeMessage(bs.getValue());
			// 	});
			// }
		});
	}

	private socket: Subject<MessageEvent>;
	private protoRoot: Root;
	private commandMessage;
	public hudModel = new HUDModel();

	private parseMessage(msg: MessageEvent): void {
		const decoded = this.commandMessage.decode(new Uint8Array(msg.data));
		console.log('Decoded Command message:', decoded);

		// TODO: IMPLEMENT COMMAND INVOKER TO REPLACE SPECIAL CASE
		if (decoded.hasOwnProperty('alert')) {
			switch (decoded.alert.alertLevel) {
				case 0:
					this.notifierService.notify('error', decoded.alert.alertText);
					break;
				case 1:
					this.notifierService.notify('warning', decoded.alert.alertText);
					break;
				case 2:
					this.notifierService.notify('info', decoded.alert.alertText);
					break;
				case 4:
					this.notifierService.notify('success', decoded.alert.alertText);
					break;
				default:
					this.notifierService.notify('default', decoded.alert.alertText);
					break;
			}

		}
	}

	private composeMessage(source: any): void {
		console.log('compose message: ' + source);
	}
}
