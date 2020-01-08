import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RuleInputComponent } from './rule-input.component';
import { RuleComponent } from './rule.component';
import { NewRuleButtonComponent } from './new-rule-button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, RuleComponent, RuleInputComponent, NewRuleButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
