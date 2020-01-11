import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject, zip } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import { IRuleInputResult, RuleType } from '../rule-models';

@Component({
	selector: 'app-rule',
	templateUrl: './rule.component.html',
	styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit, OnDestroy {

	// -----------------------------
	//  Input properties
	// -----------------------------

	@Input()
	ruleType: RuleType;

	// -----------------------------
	//  Output properties
	// -----------------------------

	@Output()
	readonly ruleChange = new EventEmitter<IRuleInputResult>();

	@Output()
	readonly closeRuleForm = new EventEmitter<void>();

	// -----------------------------
	//  Public properties
	// -----------------------------

	ruleInputForm: FormGroup;

	// -----------------------------
	//  Private properties
	// -----------------------------

	private readonly unsubscribe$$ = new Subject<never>();

	// -----------------------------
	//  Public functions
	// -----------------------------

	constructor(
		private readonly formBuilder: FormBuilder
	) {}

	onClickCloseHandler(): void {
		this.closeRuleForm.emit();
	}

	// -----------------------------
	//  Lifecycle functions
	// -----------------------------

	ngOnInit(): void {
		this.initForm();
	}

	ngOnDestroy(): void {
		this.unsubscribe$$.next();
		this.unsubscribe$$.complete();
	}

	// -----------------------------
	//  Private functions
	// -----------------------------

	private initForm(): void {
		this.ruleInputForm = this.formBuilder.group({
			rule: [undefined, [
				Validators.required
			]]
		});

		zip(this.ruleInputForm.valueChanges, this.ruleInputForm.statusChanges)
			.pipe(
				map(([value, ruleStatus]) => {
					const result: IRuleInputResult = {
						ruleType: this.ruleType,
						ruleValue: value.rule,
						ruleStatus
					};

					return result;
				}),
				tap(result => this.ruleChange.emit(result)),
				takeUntil(this.unsubscribe$$)
			)
			.subscribe();
	}

}
