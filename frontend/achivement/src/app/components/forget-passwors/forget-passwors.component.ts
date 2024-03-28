import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/Allclases';
import { AllServicesService } from 'src/app/services/all-services.service';


@Component({
  selector: 'app-forget-passwors',
  templateUrl:'./forget-passwors.component.html',
  styleUrls: ['./forget-passwors.component.css']
})
export class ForgetPassworsComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  email:string=""
password:string=""
degel1=true
degel2=false
degel3=false
degela=false;
degelb=false;
p:string=""
newpassword1=""
newpassword2=""
tz:string=""
user:User=new User();
hide = true;
hide2 = true;

  constructor(public s: AllServicesService,private router: Router) { 

    //שמירת מספר רנדומלי לשליחת הזדהות למייל
      this.password=(Math.floor(Math.random()*(100000-9999+1))+9999).toString();
  }
  SEmail(){ 
    //שליחת המספר הרנדומלי למייל
       this.s.sendMailForgetPassword(this.email,":היא Achivement סיסמתך לאתר ",this.password).subscribe((res: any) => {
      if (res)
      {
        this.degel1=false
        this.degel2=true
        alert("נשלחה סיסמא להזדהות בדואר האלקטרוני ");
        console.log("succes send mail!")
        this.degela=true;
      }
      else
      {
          alert("קיימת שגיאה במערכת נסה מאוחר יותר ");
        console.log("faild send mail!");
      }
    })
  }

  SPassword(){
  this.degela=false;
    if(this.p==this.password)
    {
      this.degel2=false
      this.degel3=true;
      this.degelb=true;
    }
      else
      alert("הסיסמא שגויה ");
  }
  SnewPassword() :void{
    if(this.newpassword1!=this.newpassword2)
    {
      alert("הסיסמאות אינם תואמות ");
    }
    else
    {
      this.s.getUserById(this.tz).subscribe
      ((d: any) => {
        this.user = d;
        console.log(this.user, "user")
        this.user.Pasword=this.newpassword1
        this.s.updateUser(this.user).subscribe
        (() => {
          alert("הסיסמא התעדכנה בהצלחה")
          this.router.navigate(['/signIn/']);
        },
          () => { alert("שגיאה בגישה למשתמש") })
      },
        () => { alert("שגיאה בגישה למשתמש") })
    }
  }
  checkTz(){
    alert('cvt')
  }

}



