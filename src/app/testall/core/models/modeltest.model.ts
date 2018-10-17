/**
 * 
 * Date: 10/10/2018	
 */
export class Modeltest
{
	
	private _testId: string;
	private _: $objectField.dataType;
	
	constructor() { 
	}
	
	set testId(value: string) {
		this._testId = value;
	}
	get testId() : string {
		return this._testId;
	}
	set (value: $objectField.dataType) {
		this._ = value;
	}
	get () : $objectField.dataType {
		return this._;
	}
	
}
