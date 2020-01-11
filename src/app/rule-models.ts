export type RuleStatus = 'VALID' | 'INVALID';

export enum RuleType {
	Display = 'Display',
	Exclude = 'Exclude'
}

export enum RuleContentType {
	Contains = 'Contains',
	ExactMatch = 'Exact Match'
}

export interface IRuleTypeItem {
	label: RuleContentType;
	id: number;
	selected?: boolean;
}

export interface IRuleValue {
	ruleType: RuleContentType;
	url: string;
}

export interface IRuleInputResult {
	ruleType: RuleType;
	ruleValue: IRuleValue;
	ruleStatus: RuleStatus;
}
