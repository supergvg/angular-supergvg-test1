import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: [ './rule.component.css' ]
})
export class RuleComponent implements OnInit, OnDestroy {

  // -----------------------------
	//  Output properties
	// -----------------------------

  @Output()
  readonly statusChange = new EventEmitter<any>();

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

    this.ruleInputForm.statusChanges
      .pipe(
        takeUntil(this.unsubscribe$$),
        tap(status => {
          this.statusChange.emit(status);
        })
      )
      .subscribe();
  }

}
