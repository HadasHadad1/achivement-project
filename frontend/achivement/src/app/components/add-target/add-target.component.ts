import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { AlertDate, AlertHour, DaysInWeek, FrequencyType, HoursInDay, Target, User } from 'src/app/clases/Allclases';
import { AllServicesService } from 'src/app/services/all-services.service';
import { DateService } from 'src/app/services/date.service';
import { LocaluserService } from 'src/app/services/localuser.service';


@Component({
  selector: 'app-add-target',
  templateUrl: './add-target.component.html',
  styleUrls: ['./add-target.component.css']
})

export class AddTargetComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private s: AllServicesService, private router: Router,
    private ls: LocaluserService,
    private dateService: DateService) {
    // this.selectedTime = this.getCurrentTime(); // Set initial time if needed
  }
  // constructor(){}
  @ViewChild('timePicker') timePicker: TimePickerComponent | undefined;
  usernow: User = new User();
  AddTargetForm: FormGroup | undefined;
  description: string[] | undefined;
  frequency: string = "daily";
  hours: HoursInDay[] = [];
  // days: string[] | undefined;
  days: any[] | undefined;
  months: string[] | undefined;
  selectedHours: { hour: number, minute: number }[] = [];
  // selectedDays: string[] | undefined;
  selectedDays: number[] = [];
  selectedMonths: string[] | undefined;
  SignUpForm: any;
  // selectedTime: string;
  frequencyTypes: FrequencyType[] | undefined;
  selectedTime: Date = new Date();

  lTarget: Array<Target> = new Array<Target>()

  //לבנות אוביקט
  ngOnInit(): void {
    this.usernow = this.ls.getLocalUser();
    this.lTarget.push(new Target(111, "aaa", "bgg", new Date(), new Date(), 9, 9))
    // הגדרת שדות הפורם כאן

    this.AddTargetForm = new FormGroup({
      IdTargets: new FormControl(0, [Validators.min(9), Validators.max(9)]),
      // TzUser:new FormControl(null,[Validators.required,this.checkName.bind(this)]),
      // TzDescriptionUser:new FormControl(null,[Validators.required,this.checkName.bind(this)]),
      // StartDate:new FormControl(null,[Validators.required,this.checkName.bind(this)]),
      // EndDate:new FormControl(null,[Validators.required,this.checkName.bind(this)]),
      TzUser: new FormControl(this.usernow.Tz, [Validators.required]),
      Description: new FormControl("", [Validators.required]),
      StartDate: new FormControl(null, [Validators.required]),
      EndDate: new FormControl(null, [Validators.required]),
      IdFrequencyTypes: new FormControl(0, [Validators.min(1), Validators.max(25)]),
      SeveralTimesAday: new FormControl(0, [Validators.min(10), Validators.max(25)]),
      AlertDates: new FormControl([]),
      alertHours: new FormControl([])
    });


    if (!this.AddTargetForm) {
      console.error('FormGroup targetForm is undefined.');
      return;
    }
    // FirstName: new FormControl("", [Validators.required]),
    // this.frequency = '';
    debugger;
    this.hours = this.getHours();
    this.days = this.getDays();
    this.months = this.getMonths();
    this.selectedHours = [];
    this.selectedDays = [];
    this.selectedMonths = [];
    this.s.getAllFrequencyType().subscribe((data) => {
      console.log(data);
      this.frequencyTypes = data;
    }, (err) => {
      console.log(err);
    }, () => {
      console.log("Success Get Frequency types");
    })
  }
  // מגדירים את הפעולה getter של getDescription כדי לגשת לבקרת הטופס
  get getDescription() {
    return this.AddTargetForm!.controls['Description']
  }

  get getTz() {
    return this.AddTargetForm!.controls['TzUser']
  }

  get idFrequencyTypes() {
    return this.AddTargetForm!.controls['IdFrequencyTypes']
  }

  get startDate() {
    return this.AddTargetForm!.controls['StartDate']
  }

  get endDate() {
    return this.AddTargetForm!.controls['EndDate']
  }

  set startDate(date: any){
    this.AddTargetForm!.controls['StartDate'].setValue(date);
  }

  set endDate(date: any){
    this.AddTargetForm!.controls['EndDate'].setValue(date);
  }

  set severalTimesAday(count: number){
    this.AddTargetForm!.controls['SeveralTimesAday'].setValue(count);
  }

  set alertDates(targetDates: AlertDate[]) {
    this.AddTargetForm!.controls['AlertDates'].setValue(targetDates);
  }

  set alertHours(targetHours: AlertHour[]) {
    this.AddTargetForm!.controls['alertHours'].setValue(targetHours);
  }

  getHours(): any[] {
    // return this.AddTargetForm!.value.hours;
    let a:any = [0, 30];
    let hours: any[] = [];
    for (let i = 0; i <24; i++) {
      a.forEach((item:any) => {
        let b = null;
        let desc = "";
        if(i===0){
            desc = 12+":"+ (item == 0 ? "00 AM": item + " AM");
        }
        else if(i> 0 && i<12){
          desc = i+":"+ (item == 0 ? "00 AM": item + " AM");
        }
        else if(i == 12){
            desc = i+":"+ (item == 0 ? "00 PM": item + " PM");
        }
        else{
            desc = (i-12)+":"+ (item == 0 ? "00 PM": item + " PM");
        }
        b = new HoursInDay(i, desc, i, item);
        hours.push(b);
      })
    }
    console.log(hours[0]);
    return hours;
  }

  // getDays(): string[] {
  //   return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // }

  getDays(): any[] {
    return [new DaysInWeek(0,'Sunday'), new DaysInWeek(1,'Monday'), new DaysInWeek(2,'Tuesday'),
    new DaysInWeek(3,'Wednesday'), new DaysInWeek(4,'Thursday'), new DaysInWeek(5,'Friday'), 
    new DaysInWeek(6,'Saturday')];
  }

  getMonths(): string[] {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }
  //ליצור פונקציה של אדד טרגט שממלא לי את האובייקט שיצרנו למעלה ושולחת לסרביס של טרגט לפונקציה של הוספת טרגט את הטרגט שיצרתם למעלה ומילאתם אות
  //
  //הוספת יעד  מסויים 
  register() {
    alert('היעד נוסף')

    // this.s.addTarget.subscribe
    // ( d=>{
    //   console.log("הצלחה")},
    //   err=>{alert("שגיאה בהוספת יעד למאגר")})
  }
  addTarget() {
    let dates: any = [];
    let targetDates: any = [];
    if (this.startDate.value != null) {
      switch (this.idFrequencyTypes.value) {
        // case 1: dates = this.generateDatesInRange(this.startDate.value, this.endDate.value);
        // break;
        case 1: dates = this.generateDatesWithTimes(this.startDate.value, this.endDate.value, this.selectedHours);
        break;
        case 2: dates = this.generateDatesForWeek(this.startDate.value, this.endDate.value, this.selectedDays);
        break;
        case 3: dates = this.generateDatesForMonths(this.startDate.value, this.endDate.value);
        break;
        case 4: dates = this.generateDatesForYears(this.startDate.value, this.endDate.value);
        break;
      }
      console.log(dates);

      dates.forEach((date: Date) => {
        targetDates.push(new AlertDate(0,0,date, false));
      });
      this.alertDates = targetDates;
      // let targetAlertHours: any = [];
      // this.selectedHours.forEach((time)=>{
      //   let newDate = new Date();
      //   newDate.setHours(time.hour, time.minute, 0, 0);
      //   targetAlertHours.push(new AlertHour(0,0,newDate));
      // })
      // this.alertHours = targetAlertHours;

      console.log("Add Targetttttttttttttt - ", this.AddTargetForm?.value);
    }
   
    let target = this.AddTargetForm?.value;
    this.s.addTarget(target).subscribe(data => {
        console.log(data);
        alert("היעד נוסף");
      }, err => {
        console.log(err.message);
      })
  }

  onChangeFrequency(event: any) {
    // this.frequency = event.value;
    // console.log(event);
    console.log('Target: ', this.AddTargetForm?.value);
    console.log('Selected Frequency:', this.frequency);

  }

  onChangeDays(event: any) {
    this.selectedDays = event.value;
    // console.log(event);
    console.log('Daya: ', event.value);
    console.log('Selected Days:', this.selectedDays);

  }

  onChangeHours(event: any) {
    let a = event.value;
    debugger;
    this.severalTimesAday = a.length;
    let hoursSelect:any = [];
    a.forEach((item: any)=>{
      hoursSelect.push({hour: this.hours[item].Hour, minute: this.hours[item].Minute})
    });
    this.selectedHours = hoursSelect;
    console.log('Daya: ', event.value);
    console.log('Selected Days:', this.selectedHours);
  }

  // // Function to handle time change
  // onTimeChange(event: any) {
  //   this.selectedTime = event.target.value;
  // }

  // onTimeChange(event: any) {
  //   // Handle time change logic here
  // }

  onTimeChange(event: any) {
      this.selectedTime = this.timePicker?.value as Date;
  }

  getCurrentTime(): string {
    const now = new Date();
    return `${this.padZero(now.getHours())}:${this.padZero(now.getMinutes())}`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  generateDatesWithTimes(startDate: Date, endDate: Date, times: {hour: number; minute: number;}[]): Date[] {
    return this.dateService.getDatesWithTimes(startDate, endDate, times);
  }

  generateDatesInRange(startDate: Date, endDate: Date): Date[] {
    return this.dateService.getDatesInRange(startDate, endDate);
  }

  generateDatesForMonths(startDate: Date, endDate: Date): Date[] {
    return this.dateService.getDatesForMonths(startDate, endDate);
  }

  generateDatesForWeek(startDate: Date, endDate: Date, datesArray: number[]): Date[] {
    return this.dateService.getDatesForWeek(startDate, endDate, datesArray);
  }

  generateDatesForYears(startDate: Date, endDate: Date): Date[] {
    return this.dateService.getDatesForYears(startDate, endDate);
  }
}

