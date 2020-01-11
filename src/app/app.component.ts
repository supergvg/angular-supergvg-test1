import { Component, OnInit } from '@angular/core';
import { IRuleInputResult, RuleType } from './rule-models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	// -----------------------------
	//  Public properties
	// -----------------------------

	readonly RuleType = RuleType;

	isVisibleRuleInput = false;
	isVisibleAddRuleButton = false;
	currentRuleType: RuleType;

	lastResult: IRuleInputResult;
	ruleList: Array<IRuleInputResult> = [];

	// -----------------------------
	//  Public functions
	// -----------------------------

	onClickAddRuleHandler(ruleType: RuleType): void {
		this.currentRuleType = ruleType;
		this.isVisibleRuleInput = true;
	}

	onRuleChangeHandler(result: IRuleInputResult): void {
		this.isVisibleAddRuleButton = (result.ruleStatus === 'VALID');
		this.lastResult = result;
	}

	onConfirmNewRule(): void {
		this.isVisibleRuleInput = false;
		this.ruleList.push(this.lastResult);
		console.log('++++++++', this.lastResult);
	}

	// -----------------------------
	//  Lifecycle functions
	// -----------------------------

	ngOnInit(): void {
	}

}
