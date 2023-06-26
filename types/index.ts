export enum RecordType {
	RECORD,
	BREAK
}

export class Record {
	date: Date;
	type: RecordType;

	constructor(date: Date, type: RecordType) {
		this.date = date;
		this.type = type;
	}
}

export class Interval {
	diff: number;
	type: RecordType;

	constructor(diff: number, type: RecordType) {
		this.diff = diff;
		this.type = type;
	}
}
