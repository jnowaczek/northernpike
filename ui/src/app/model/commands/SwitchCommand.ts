import {Command} from './Command';

export class SwitchCommand implements Command {

	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	execute(): void {
	}

	serialize(): string {
		return 'Not implemented yet.';
	}
}
