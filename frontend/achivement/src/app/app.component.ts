import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllServicesService } from './services/all-services.service';
import { EmailDetails } from './clases/Allclases';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'achivement';
  timerSendEmail: any;
  timerTimeOclock: any;

  constructor(private s: AllServicesService){

  }

  ngOnInit():void {
    const now = new Date();
    const minutesUntilNextHalfHour = 30 - now.getMinutes() % 30;
    const millisecondsUntilNextHalfHour = minutesUntilNextHalfHour * 60 * 1000;

    this.timerTimeOclock = setTimeout(() => {
      this.sendEmailRemaind();
      this.timerSendEmail = setInterval(() => {
        console.log("send email ----------------------");
        this.sendEmailRemaind();
        // },50000);
      }, 30 * 60 * 1000); // Repeat every 30 minutes
    }, millisecondsUntilNextHalfHour);
  }

  sendEmailRemaind():void{
    let dateNow = new Date();//new Date("2024-03-27T14:00:00Z");
        this.s.getAlertDateByDateOfNow(dateNow.toISOString()).subscribe((data)=>{
          if(data.length){
            data.forEach((alertDate: any)=>{
              let detailsEmail:EmailDetails = new EmailDetails(alertDate.User.Email, "תזכורת " + alertDate.Subject, "שלום " + alertDate.User.FirstName + ",\nלא לשכוח לבצע את היעד:)");
              this.s.sendReminderToEmail(detailsEmail).subscribe((data)=> {
                if(data){
                  console.log(detailsEmail);
                }
              },(err)=>{
                console.log(err);
              })
            });
          }
        },(err)=>{
          console.log(err);
        })
  }

  ngOnDestroy(): void {
    clearInterval(this.timerSendEmail);
    clearTimeout(this.timerTimeOclock);
  }
}
