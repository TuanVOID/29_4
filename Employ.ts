export  class Employee {
    private _name: string;
    private _firstname: string;
    private _birthday: string;
    private _add: string;
    private _job: string;


    constructor(name: string, firstname: string, birthday: string, add: string, job: string) {
        this._name = name;
        this._firstname = firstname;
        this._birthday = new Date(birthday).toDateString();
        this._add = add;
        this._job = job;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get birthday(): string {
        return this._birthday;
    }

    set birthday(value: string) {
        this._birthday = value;
    }

    get add(): string {
        return this._add;
    }

    set add(value: string) {
        this._add = value;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }
}

