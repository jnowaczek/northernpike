import {Component, OnInit} from '@angular/core';
import {ModelService} from '../model/model.service';
import {Switch} from '../model/RovModel';
import {SwitchCommand} from '../model/commands/SwitchCommand';

@Component({
	selector: 'app-switches',
	templateUrl: './switches.component.html',
	styleUrls: ['./switches.component.css'],
	providers: [ModelService]
})

export class SwitchesComponent implements OnInit {

	modelService: ModelService;
	switchState: Switch[];

	constructor(modelService: ModelService) {
		this.modelService = modelService;
	}

	changeState(index: number) {
		this.modelService.execCommand(new SwitchCommand(index));
	}

	ngOnInit() {
		ModelService.model.switches.subscribe((switches) => {
			this.switchState = switches;
		});
	}
}
