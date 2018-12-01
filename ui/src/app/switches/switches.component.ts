import {Component, OnInit} from '@angular/core';
import {ModelService} from '../model/model.service';

@Component({
	selector: 'app-switches',
	templateUrl: './switches.component.html',
	styleUrls: ['./switches.component.css'],
	providers: [ModelService]
})

export class SwitchesComponent implements OnInit {

	rovService: ModelService;
	temp: boolean;

	// switchState: Switch[];

	constructor(rovService: ModelService) {
		this.rovService = rovService;
	}

	changeState() {
		// this.rovService.pushState(new RovState());
	}

	ngOnInit() {
		this.rovService.switches.subscribe((switches) => {
			this.temp = switches;
		});
		console.log(this.temp);
	}
}
