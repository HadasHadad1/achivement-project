import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AllServicesService } from 'src/app/services/all-services.service';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/Allclases';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  constructor(public user_ser: AllServicesService, private router: Router) { }
  //יצירת טופס דינאמי 
  public SignUpForm: FormGroup | undefined;
  Gender: string = "זכר";
  Error: string = "";
  submitted = false;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
   
    //  this.user_ser.getAllUser().subscribe(
    //    data => this.user_ser.list = data,
    //    err => console.log(err.message))
    
    this.SignUpForm = new FormGroup(
      {
        Tz: new FormControl("", [Validators.required]),
        FirstName: new FormControl("", [Validators.required]),
        LastName:new FormControl("", [Validators.required]),
        Email:new FormControl("", [Validators.required, Validators.email]),
        Pasword:new FormControl("", [Validators.required,Validators.min(1)]),
        Phone:new FormControl("", [Validators.required,Validators.min(10)]), 
        Gender:new FormControl("", [Validators.required])
      }
    )
  }
  

  get tz() {
    return this.SignUpForm!.controls['Tz']
  }
  get firstName() {
    return this.SignUpForm!.controls['FirstName']
  }
  get lastName() {
    return this.SignUpForm!.controls['LastName']
  }
  get email() {
    return this.SignUpForm!.controls['Email']
  }
  get pasword() {
    return this.SignUpForm!.controls['Pasword']
  }
  get phone() {
    return this.SignUpForm!.controls['Phone']
  }
  get gender() {
    return this.SignUpForm!.controls['Gender']
  }
  register() {
    if(this.SignUpForm?.valid){
    const user =this.SignUpForm?.value;
    console.log(this.SignUpForm);
    // כאן תוכל להוסיף קוד להוספת המשתמש או לשלוח את פרטי המשתמש לשרת
    this.user_ser.addUser(user).subscribe((data)=>{
      console.log(data);
    },(err)=>{
      console.log(err);
      if(err.status === 500){
        this.Error = "ארעה תקלה זמנית אנא נסה שנית מאוחר יותר";
      }
    },()=>{
        this.router.navigate(['/sing-in/']);
        console.log('המשתמש נרשם בהצלחה!');
        alert('המשתמש נרשם בהצלחה!')
    })
  }else{
    this.submitted = true;
  }
  }
}