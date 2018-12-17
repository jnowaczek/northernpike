import {BehaviorSubject} from 'rxjs';

export class Switch {
	public value: boolean;
	public name: string;

	constructor(name: string, value: boolean) {
		this.name = name;
		this.value = value;
	}

}

export class RovModel {
	public switches: BehaviorSubject<Switch[]>;
	public observables = [this.switches];

	constructor() {
		this.switches = new BehaviorSubject<Switch[]>([new Switch('Toggle 1', false), new Switch('Toggle 2', true)]);
	}
}
