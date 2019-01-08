import {Command} from './Command';
import {ModelService} from '../model.service';
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
		const current = ModelService.model.switches.getValue();
		if (current[this.index].value === true) {
			current[this.index].value = false;
		} else {
			current[this.index].value = false;
		}
		ModelService.model.switches.next(current);
	}
}
