import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Target } from 'src/app/clases/Allclases';
import { AllServicesService } from 'src/app/services/all-services.service';


@Component({
  selector: 'app-add-target',
  templateUrl: './add-target.component.html',
  styleUrls: ['./add-target.component.css']
})

 export class AddTargetComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private s: AllServicesService,private router:Router) {}
  // constructor(){}

  AddTargetForm: FormGroup | undefined;
  description: string[] | undefined;
  frequency: string = "daily";
  hours: string[] | undefined;
  days: string[] | undefined;
  months: string[] | undefined;
  selectedHours: string[] | undefined;
  selectedDays: string[] | undefined;
  selectedMonths: string[] | undefined;
  SignUpForm: any;
  
  lTarget:Array<Target>=new Array<Target>()

//לבנות אוביקט
  ngOnInit(): void {
    this.lTarget.push(new Target(111,"aaa","bgg",new Date(),new Date(),9,9))
      // הגדרת שדות הפורם כאן
      
    this.AddTargetForm = new FormGroup({
      IdTargets:new FormControl(0,[Validators.min(9), Validators.max(9)]),
      // TzUser:new FormControl(null,[Validators.required,this.checkName.bind(this)]),
      // TzDescriptionUser:new FormControl(null,[Validators.required,this.checkName.bind(this)]),
      // StartDate:new FormControl(null,[Validators.required,this.checkName.bind(this)]),
      // EndDate:new FormControl(null,[Validators.required,this.checkName.bind(this)]),
      TzUser:new FormControl(null,[Validators.required]),
      TzDescriptionUser:new FormControl(null,[Validators.required]),
      StartDate:new FormControl(null,[Validators.required]),
      EndDate:new FormControl(null,[Validators.required]),
      SeveralTimesAday:new FormControl(0,[Validators.min(10), Validators.max(25)]),
      IdAlertFrequencyTypes:new FormControl(0,[Validators.min(10), Validators.max(25)]),
      Description: new FormControl("", [Validators.required])
    });

   
    if (!this.AddTargetForm) {
      console.error('FormGroup targetForm is undefined.');
      return;
    }
    FirstName: new FormControl("", [Validators.required]),
    // this.frequency = '';
    this.hours = this.getHours();
    this.days = this.getDays();
    this.months = this.getMonths();
    this.selectedHours = [];
    this.selectedDays = [];
    this.selectedMonths = [];
  }
   // מגדירים את הפעולה getter של getDescription כדי לגשת לבקרת הטופס
  get getDescription()
  {
    return this.AddTargetForm!.controls['Description']
  }

  get getTz(){
    return this.AddTargetForm!.controls['TzUser']
  }

  getHours(): string[] {
    return this.AddTargetForm!.value.hours;
  }

  getDays(): string[] {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  getMonths(): string[] {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }
  //ליצור פונקציה של אדד טרגט שממלא לי את האובייקט שיצרנו למעלה ושולחת לסרביס של טרגט לפונקציה של הוספת טרגט את הטרגט שיצרתם למעלה ומילאתם אות
  //
  //הוספת יעד  מסויים 
  register()
 {
  alert('היעד נוסף')

    // this.s.addTarget.subscribe
    // ( d=>{
    //   console.log("הצלחה")},
    //   err=>{alert("שגיאה בהוספת יעד למאגר")})
    }
    addTarget() {
      alert("היעד נוסף")
      // let t = this.AddTargetForm?.value
      // this.AllServicesService.addTarget(t).subscribe(
      //   data => {
      //     this.AllServicesService.currentTarget = data
      //   }, err => {
      //     console.log(err.message);
      //   })
    }

    onFrequencyChange() {
      console.log('Frequency changed to:', this.frequency);
      // כאן תוכל להוסיף כל קוד נדרש לטיפול בשינוי בערך של התדירות
    }

}

