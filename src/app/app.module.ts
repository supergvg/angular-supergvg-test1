import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RuleInputComponent } from './rule-input/rule-input.component';
import { RuleComponent } from './rule/rule.component';
import { NewRuleButtonComponent } from './new-rule-button/new-rule-button.component';
import { RuleListComponent } from './rule-list/rule-list.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		RuleComponent,
		RuleInputComponent,
		NewRuleButtonComponent,
		RuleListComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
