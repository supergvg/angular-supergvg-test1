import { Component, Input, OnInit } from '@angular/core';
import { IRuleInputResult } from '../rule-models';

@Component({
	selector: 'app-rule-list',
	templateUrl: './rule-list.component.html',
	styleUrls: ['./rule-list.component.scss']
})
export class RuleListComponent implements OnInit {

	// -----------------------------
	//  Input properties
	// -----------------------------

	@Input()
	ruleList: Array<IRuleInputResult>;

	// -----------------------------
	//  Lifecycle functions
	// -----------------------------

	ngOnInit(): void {
	}

}
