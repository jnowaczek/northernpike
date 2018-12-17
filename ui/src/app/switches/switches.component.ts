import {Component, OnInit} from '@angular/core';
import {ModelService} from '../model/model.service';
import {Switch} from '../model/RovModel';

@Component({
	selector: 'app-switches',
	templateUrl: './switches.component.html',
	styleUrls: ['./switches.component.css'],
	providers: [ModelService]
})

export class SwitchesComponent implements OnInit {

	rovService: ModelService;
	switchState: Switch[];

	constructor(rovService: ModelService) {
		this.rovService = rovService;
	}

	changeState() {
		this.rovService.model.switches.next(this.switchState);
	}

	ngOnInit() {
		this.rovService.model.switches.subscribe((switches) => {
			this.switchState = switches;
		});
	}
}
