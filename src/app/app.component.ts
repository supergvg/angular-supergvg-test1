import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

	// -----------------------------
	//  Public properties
	// -----------------------------

  isVisibleRuleInput = false;
  isVisibleAddRuleButton = false;

  // -----------------------------
	//  Public functions
	// -----------------------------

  onClickAddRuleHandler(): void {
    this.isVisibleRuleInput = true;
  }

  onStatusChangeHandler(status): void {
    this.isVisibleAddRuleButton = (status === 'VALID');
  }

  // -----------------------------
	//  Lifecycle functions
	// -----------------------------

  ngOnInit(): void {
  }

}
