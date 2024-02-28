import { Data } from "@angular/router";

//יעדים
export class Target {
    // public IdTargets?: number;
    // public TzUser?: string;
    // public Description?: string;
    // public StartDate?: Date;
    // public EndDate?: Data;
    // public SeveralTimesAday?: number;
    // public IdAlertFrequencyTypes?: number;

    // constructor(
    //     IdTargets?: number,
    //     TzUser?: string,
    //     Description?: string,
    //     StartDate?: Date,
    //     EndDate?: Date,
    //     SeveralTimesAday?: number,
    //     IdAlertFrequencyTypes?: number
    // ) {
    //     this.IdTargets = IdTargets;
    //     this.TzUser = TzUser;
    //     this.Description = Description;
    //     this.StartDate = StartDate;
    //     this.EndDate = EndDate;
    //     this.SeveralTimesAday = SeveralTimesAday;
    //     this.IdAlertFrequencyTypes = IdAlertFrequencyTypes;
    // }

    constructor(
        public IdTargets?: number,
        public TzUser?: string,
        public Description?: string,
        public StartDate?: Date,
        public EndDate?: Data,
        public SeveralTimesAday?: number,
        public IdAlertFrequencyTypes?: number
    ){}
}

//תאריך התראה
export class AlertDate {
    // public IdAlertDate?: number;
    // public IdTargets?: number;
    // public Date?: string;

    // constructor(
    //     IdAlertDate: number,
    //     IdTargets: number,
    //     Date: string
    // ) {
    //     this.IdAlertDate = IdAlertDate;
    //     this.IdTargets = IdTargets;
    //     this.Date = Date;
    // }
    constructor(
        public IdAlertDate?: number,
        public IdTargets?: number,
        public Date?: string
    ){}
}


//סוג תדירות התראה
export class AlertFrequencyType {
    // public IdAlertFrequencyTypes?: number;
    // public Description?: string;

    // constructor(
    //     IdAlertFrequencyTypes: number,
    //     Description: string
    // ) {
    //     this.IdAlertFrequencyTypes = IdAlertFrequencyTypes;
    //     this.Description = Description;
    // }

    constructor(
        public IdAlertFrequencyTypes?: number,
        public Description?: string
    ){}
}

//שעות התראה
export class AlertHour {
    // public IdAlertHours?: number;
    // public IdTargets?: number;
    // public IdAlertTypes?: number;
    // public Hour?: Date;

    // constructor(
    //     IdAlertHours: number,
    //     IdTargets: number,
    //     IdAlertTypes: number,
    //     Hour: Date
    // ) {
    //     this.IdAlertHours = IdAlertHours;
    //     this.IdTargets = IdTargets;
    //     this.IdAlertTypes = IdAlertTypes;
    //     this.Hour = Hour;
    // }
    constructor(
        public IdAlertHours?: number,
        public IdTargets?: number,
        public IdAlertTypes?: number,
        public Hour?: Date
    ){}
}

//סוג התראה
export class AlertType {
    // public IdAlertTypes?: number;
    // public Description?: string;

    // constructor(
    //     IdAlertTypes: number,
    // Description: string
    // ) {
    //     this.IdAlertTypes = IdAlertTypes;
    //     this.Description = Description;
    //  }
    constructor(
        public IdAlertTypes?: number,
        public Description?: string
    ){}
}

//תדירות
export class Frequency {
    // public IdFrequency?: number;
    // public IdTargets?: number;
    // public IdFrequencyTypes?: number;
    // public Note?: string;

    // constructor(
    //    IdFrequency: number,
    //     IdTargets: number,
    //     IdFrequencyTypes: number,
    //     Note: string
    // ) { 
    //     this.IdFrequency = IdFrequency;
    //     this.IdTargets = IdTargets;
    //     this.IdFrequencyTypes = IdFrequencyTypes;
    //     this.Note = Note;
    // }
    constructor(
        public IdFrequency?: number,
        public IdTargets?: number,
        public IdFrequencyTypes?: number,
        public Note?: string
    ){}
}

//סוג תדירות
export class FrequencyType {
    // public IdFrequencyTypes?: number;
    // public Description?: string;

    // constructor(
    //     IdFrequencyTypes: number,
    //     Description: string
    // ) { 
    //     this.IdFrequencyTypes = IdFrequencyTypes;
    //     this.Description = Description;
    // }

    constructor(
        public IdFrequencyTypes?: number,
        public Description?: string
    ){}
}

//ביצועים
export class Performence {

    // public IdPerformence?: number;
    // public IdTargets?: number;
    // public ExecutionDate?: Date;
    // public CountPerformence?: number;
    // constructor(
    //     IdPerformence: number,
    // IdTargets: number,
    // ExecutionDate: Date,
    // CountPerformence: number,
    // ) { 
    //     this.IdPerformence = IdPerformence;
    //     this.IdTargets = IdTargets;
    //     this.ExecutionDate = ExecutionDate;
    //     this.CountPerformence = CountPerformence;
    // }

    constructor(
        public IdPerformence?: number,
        public IdTargets?: number,
        public ExecutionDate?: Date,
        public CountPerformence?: number
    ){}
}


//משתמש
export class User {
    // public Tz?: string;
    // public FirstName?: string;
    // public LastName?: string;
    // public Email?: string;
    // public Pasword?: string;
    // public Phone?: string;
    // public Gender?: string;

    // constructor(
    //     Tz?: string,
    //     FirstName?: string,
    //     LastName?: string,
    //     Email?: string,
    //     Pasword?: string,
    //     Phone?: string,
    //     Gender?: string
    // ) {
    //     this.Tz = Tz;
    //     this.FirstName = FirstName;
    //     this.LastName = LastName;
    //     this.Email = Email;
    //     this.Pasword = Pasword;
    //     this.Phone = Phone;
    //     this.Gender = Gender;
    //  }
    constructor(
        public Tz?: string,
        public FirstName?: string,
        public LastName?: string,
        public Email?: string,
        public Pasword?: string,
        public Phone?: string,
        public Gender?: string
    ){}
}
