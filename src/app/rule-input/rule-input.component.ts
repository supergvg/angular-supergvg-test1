import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

import { IRuleTypeItem, IRuleValue, RuleContentType } from '../rule-models';

/**
 * Input rule component.
 */
@Component({
	selector: 'app-rule-input',
	templateUrl: './rule-input.component.html',
	styleUrls: ['./rule-input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: RuleInputComponent,
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useExisting: RuleInputComponent,
			multi: true
		}
	]
})
export class RuleInputComponent implements OnInit {

	// -----------------------------
	//  Input properties
	// -----------------------------

	@Input()
	value: IRuleValue;

	// -----------------------------
	//  Public properties
	// -----------------------------

	ruleTypes: Array<IRuleTypeItem> = [
		{ id: 0, label: RuleContentType.Contains },
		{ id: 1, label: RuleContentType.ExactMatch, selected: true }
	];

	// -----------------------------
	//  Public functions
	// -----------------------------

	readonly trackByRuleTypes = (index, item: IRuleTypeItem) => `${item.id}`;

	onInputHandler(event): void {
		this.value.url = event.target.value;
		this.onChange(this.value);
		this.onTouched();
	}

	onRuleTypeChangeHandler(event): void {
		this.value.ruleType = event.target.value;
		this.onChange(this.value);
		this.onTouched();
	}

	// -----------------------------
	//  Lifecycle functions
	// -----------------------------

	ngOnInit(): void {
	}

	// -----------------------------
	//  ControlValueAccessor
	// -----------------------------

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
	}

	writeValue(obj: IRuleValue): void {
		this.value = obj || {url: '', ruleType: RuleContentType.ExactMatch};
	}

	// -----------------------------
	//  Validator
	// -----------------------------

	registerOnValidatorChange(fn: () => void): void {}

	validate(control: AbstractControl): ValidationErrors | null {
		return !this.value || !this.value.ruleType || !this.value.url
			? {...control.errors, required: true}
			: undefined;
	}

	// -----------------------------
	//  Private functions
	// -----------------------------

	private onChange = (value: IRuleValue) => {};
	private onTouched = () => {};

}
