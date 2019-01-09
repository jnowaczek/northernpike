import {Command} from './Command';
import {CommandService} from '../command.service';
import {load} from 'protobufjs';

export class SwitchCommand implements Command {

	private readonly index: number;
	private commandMessage;

	constructor(index: number) {
		this.index = index;
		load('assets/protos/commands.proto', (error, root) => {
			if (error) {
				console.log('failed to load commands.proto');
				throw error;
			}
			this.commandMessage = root.lookupType('Command');
		});
	}

	execute(): void {
		// const current = CommandService.model.switches.getValue();
		// if (current[this.index].value === true) {
		// 	current[this.index].value = false;
		// } else {
		// 	current[this.index].value = false;
		// }
		// CommandService.model.switches.next(current);
	}
}
