import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/services/all-services.service';
import { LocaluserService } from '../../services/localuser.service';
import { User } from 'src/app/clases/Allclases';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
   hide = true;
  SignInForm!: FormGroup;
  usernow:User = new User()
  id: string = ''
  password: string = ''

   constructor(private formBuilder: FormBuilder, private userService: AllServicesService, public router: Router, private ls: LocaluserService) {}
  
  // SignInForm:Array<student>=new Array<student>()
  ngOnInit(): void {
    this.SignInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get getEmail() {
    return this.SignInForm.get('email');
  }

  get getPassword() {
    return this.SignInForm.get('password');
  }

  getErrorMessage() {
    if (this.getEmail?.hasError('required') || this.getPassword?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.getEmail?.hasError('email') ? 'Not a valid email' : '';
  }

  // foundUser() {
  //   if (this.SignInForm.valid) {
  //     this.localUserService.SignInForm.value.email).subscribe(
  //        (data) => {
  //         // Assuming the userService returns user data upon successful sign-in
  //         //  this.userService.setLocalUser(data);
  //         console.log(data)
  //         this.router.navigate(['/my-datailsComponent']); // Navigate to home page after successful sign-in
  //       },
  //       (error) => {
  //         console.error('Error signing in: ', error);
  //         // Handle error, maybe show an error message to the user
  //       }
  //     );
  //   }
   
  // }
  foundUser() {
    this.userService.getUserById(this.id).subscribe
      (d => {
        this.usernow = d;
        console.log(this.usernow, "הצלחה")
        if (this.usernow !== null)
          if (this.usernow.Pasword== this.password) {
            alert("שלום ל:" + this.usernow.FirstName + " " + this.usernow.LastName);
            this.ls.setLocalUser(d);
            this.router.navigate(['/Menu/']);
          }
          else
            alert("אחד מהנתונים שהזנת שגויים");
      },

        err => { alert("שגיאה בגישה למשתמשים") })
  }
  ForgetPasword(){
    this.router.navigate(['/my-forget-passwors/']);
  }
//   register() {
//     // כאן תוכל להוסיף קוד להוספת המשתמש או לשלוח את פרטי המשתמש לשרת
   
//     alert('ffyu')
// }
}
