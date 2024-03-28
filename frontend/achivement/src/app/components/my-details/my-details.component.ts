import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { User,Target, TargetDetails, AlertDate } from 'src/app/clases/Allclases';
// import { LocaluserService } from 'src/app/services/localuser.service';
// import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EventSettingsModel, ScheduleComponent, View, EventRenderedArgs} from '@syncfusion/ej2-angular-schedule';
import { L10n } from '@syncfusion/ej2-base';

import { LocaluserService } from 'src/app/services/localuser.service';
import { AllServicesService } from 'src/app/services/all-services.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import * as moment from 'moment-timezone';

 // הגדרת השפה לעברית
 L10n.load({
  'he-IL': {
    'schedule': {
      'day': 'יום',
      'week': 'שבוע',
      'workWeek': 'שבוע עבודה',
      'month': 'חודש',
      'agenda': 'סדר יום',
      'weekAgenda': 'סדר שבועי',
      'workWeekAgenda': 'סדר עבודה שבועי',
      'monthAgenda': 'סדר חודשי',
      'today': 'היום',
      'noEvents': 'אין אירועים',
      'emptyContainer': 'אין אירועים בזמן זה',
      'start': 'התחלה',
      'end': 'סיום',
      'allDay': 'כל היום',
      'subject': 'נושא',
      'location': 'מיקום',
      'description': 'תיאור',
      'timezone': 'אזור זמן',
      'timezoneEditorTitle': 'אזורי זמן',
      'timezoneEditorButton': 'אזור זמן',
      'timezoneTitle': 'אזורי זמן',
      'noTimezone': 'אין אזור זמן',
      'editorTitle': 'אירוע'
    }
  }
});

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent {
  @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;
  public eventData: EventSettingsModel = {
    // dataSource:[
    //   // { Id: 1, Subject: 'Meeting', StartTime: new Date('2024-03-21 09:00 AM'), EndTime: new Date('2024-03-21 10:30 AM') },
    //   // { id: 2, subject: 'Lunch', startTime: new Date('2024-03-22 12:30 PM'), endTime: new Date('2024-03-22 01:30 PM') },
    //   {
    //     Id: 1,
    //     IdTarget: 1,
    //     Subject: "סיום הפרויקט",
    //     StartTime: "2024-03-13T10:00Z",
    //     EndTime: "2024-03-13T11:00:00Z",
    //     Status: true,
    //     // IsAllDay: true
    //   },
    //   {
    //     Id: 2,
    //     IdTarget: 1,
    //     Subject: "סיום הפרויקט",
    //     StartTime: "2024-03-12T10:00Z",
    //     EndTime: "2024-03-12T10:00Z",
    //     Status: false,
    //   }
    // ]
  }
  // constructor(private ls: LocaluserService,private s:User,public router: Router,) { }
  constructor(public router: Router, private ls: LocaluserService,
    private s: AllServicesService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog) {
      this.usernow=this.ls.getLocalUser();
    console.log(this.scheduleObj);
    // this.scheduleObj.locale = 'he';
    const tz:any = this.usernow != null ? this.usernow.Tz: "";
    if(tz != ""){
      this.s.getAlertDateByUserId(tz).subscribe((data)=>{
          let events = data;
          let idTargets:any = {};
          events.forEach((event:any) => {
            //TODO:
            // let date = new Date(event.StartTime);
            debugger;
            // Assume you receive the DateTime string with timezone information from the server response
            let dateTimeString = event.StartTime;

            // Add "Z" at the end of the DateTime string if it is missing
            if (!dateTimeString.endsWith("Z")) {
              dateTimeString += "Z";
            }

            // Parse the DateTime string using moment-timezone with the specified timezone
            // let dateTime = moment(dateTimeString); // Assuming the original timezone is UTC

            // Format the dateTime for display in the desired format
            // let formattedDateTime = dateTime.format('YYYY-MM-DDTHH:mm:ss') + 'Z';

            // console.log(dateTimeString); // Output: 2024-03-21T09:00:00Z (Corrected DateTime with "Z" at the end and in the specified timezone)

            event.StartTime = dateTimeString;
            event.EndTime = dateTimeString;
            // date.toLocaleString();
            // date.setHours(date.getHours() + 2);
            // event.StartTime = date.toISOString();
            // event.EndTime = date.toISOString();
            // if(idTargets[event.IdTarget]){
            //   event.Color = idTargets[event.IdTarget];
            // }
            // else{
            //   let newColor = this.getRandomColor();;
            //   event.Color = newColor;
            //   idTargets[event.IdTarget] = newColor;
            // }
          });
          //TODO:
          this.eventData.dataSource = events;
          this.cdr.detectChanges();
          console.log(this.eventData.dataSource);
      },(err)=>{
        console.log(err);
      })
    }
    }
  usernow:User=new User();
  b:boolean=true;
  AllYaad:Target[]=[]
  yaad:number=0
  degela:boolean=false;
  popupEditStatue: any;
  
  // public eventData: EventSettingsModel = {
  //   dataSource: [
      // {

    //     Id: 1,

    //     Subject: 'Board Meeting',

    //     StartTime: new Date(2024, 10, 30, 9, 0),

    //     EndTime: new Date(2024, 10, 30, 11, 0)

    // },

    //     {

    //         Id: 2,

    //         Subject: 'Training session on JSP',

    //         StartTime: new Date(2024, 10, 30, 15, 0),

    //         EndTime: new Date(2024, 10, 30, 17, 0)

    //     },

    //     {

    //         Id: 3,

    //         Subject: 'Sprint Planning with Team members',

    //         StartTime: new Date(2024, 10, 30, 9, 30),

    //         EndTime: new Date(2024, 10, 30, 11, 0)

    //     }
      // ]};

    public currentDate: Date = new Date(2024,2,20); 
 
    public newViewMode: View = 'Month'; 

  ngOnInit(): void {
    this.degela=true;
    this.b=true;
    this.usernow=this.ls.getLocalUser();
    console.log(this.scheduleObj);
    // this.scheduleObj.locale = 'he';
    // const tz:any = this.usernow != null ? this.usernow.Tz: "";
    // if(tz != ""){
    //   this.s.getAlertDateByUserId(tz).subscribe((data)=>{
    //       this.eventData.dataSource = data;
    //       console.log(this.eventData.dataSource);
    //   },(err)=>{
    //     console.log(err);
    //   })
    // }
  }

  openDialog(args: any): void {
    const dialogRef = this.dialog.open(DialogEditStatusComponent, {data: args.data});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        let dateNow = new Date();
        let alertDate = new AlertDate(result.Id, result.IdTarget, result.StartTime, result.Status, dateNow);
        this.s.updateAlertDate(alertDate).subscribe((data)=>{
          console.log(data);
          if(data){
            let events: any = this.eventData.dataSource;
            let index: number = events.findIndex((ed: any) => ed.Id == alertDate.IdAlertDate);
            if(index >= 0){
              let d:any = alertDate.Date;
              let a = new Date(d);
              let dateNow = new Date();
              if(alertDate.Status && a <= dateNow){
                debugger;
                args.element.style.border = '2px solid green';
                args.data.Status = true;
                events[index].Status = true;
              }
              else if(alertDate.Status == false && a <= dateNow){
                args.element.style.border = '2px solid red';
                args.data.Status = false;
                events[index].Status = false;
              }
              this.eventData.dataSource = events;
              this.cdr.detectChanges();
              this.scheduleObj.refreshEvents();
              console.log(this.eventData.dataSource);
            }
          }
        },(err)=> {
          console.log("update faild", err);
        })
      }
      // this.animal = result;
    });
  }

  onEventClick(args: any) {
    // אירוע המלא כולו
    const fullEventDetails = args.event;

    // הדפסת כל פרטי האירוע לצורך דוגמה
    console.log(fullEventDetails);
  }

  onEventSave(args: any) {
    // קבלת האירוע שנוסף ללוח
    const addedEvent = args.data;

    // אפשר לעשות משהו עם האירוע החדש, כגון לשמור אותו בבסיס הנתונים או לבצע פעולות נוספות
    console.log('האירוע שנוסף:', addedEvent);
  }

  onPopupOpen(args: any) {
    if (args.type === 'Editor') {
      if(args.isNew){
          console.log(args);
      }
      else{
      // if(this.popupEditStatue){
      //   this.popupEditStatue.style.display = 'flex';
      // }
      args.cancel = true;
      this.openDialog(args);
      // אפשר לקבל את הנתונים שהמשתמש הזין בטופס
      // const eventData = args.data;
      // // Create a custom template for the popup content with additional details and an 'Edit' button
      // const popupContent1 = `
      // <div style={{textAlign: 'center'}}>
      //     <h3>שינוי סטטוס משימה</h3>
      //     <h4>${eventData.Subject}</h4>
      //     <p>Start Time: ${eventData.StartTime}</p>
      //     <p>End Time: ${eventData.EndTime}</p>
      //     <label>משימה בוצעה</label><input type="checkbox" checked="${eventData.Status}"/>
      //     <button id="editButton">שמור שינויים</button>
      // </div>
      // `;
      // const popupContent = `<div class="e-dlg-header-content" id="_dialog_wrapper_dialog-header">
      // <button id="exitButton" class="e-dlg-closeicon-btn e-control e-btn e-lib e-flat e-icon-btn" type="button" title="Close" aria-label="Close">
      // <span class="e-btn-icon e-icon-dlg-close e-icons"></span></button>
      // <div class="e-dlg-header" id="_dialog_wrapper_title">
      // <div class="e-title-text">סטטוס משימה</div></div></div>
      // <div class="e-dlg-content" id="_dialog_wrapper_dialog-content">
      // <div class="e-checkbox-wrapper e-wrapper e-all-day undefined"><label for="IsTargetExacute"><input class="e-all-day e-field e-control e-checkbox e-lib" type="checkbox" name="IsTargetExacute" value="" id="IsTargetExacute"><span id="targetChecked" class="e-icons e-frame e-check"></span><span class="e-label">המשימה בוצעה</span></label></div></div>
      // <div class="e-footer-content"><button id="editButton" class="e-schedule-dialog e-control e-btn e-lib e-primary e-event-save e-flat" type="button">Save</button><button id="cancelButton" class="e-schedule-dialog e-control e-btn e-lib e-event-cancel e-flat" type="button">Cancel</button></div>`;

      // this.popupEditStatue = args.element.innerHTML;
      // // Set the custom template to the popup content
      // args.element.innerHTML = popupContent;

      // // Handle the click event of the 'Edit' button
      // args.element.querySelector('#editButton').addEventListener('click', () => {
      //     let element = args.element.querySelector('#IsTargetExacute');
      //     // Perform the action when the 'Edit' button is clicked (e.g., open an edit form)
      //     console.log('Edit button clicked');
      //     alert("פרטי המשימה הושלם  בהצלחה" + !element.checked);
      //     let dialog = args.element.querySelector('#_dialog_wrapper_dialog-header');
      //     dialog.parentElement.parentElement.style.display = 'none';
      //     // this.popupEditStatue =  dialog.parentElement.parentElement;
      //     dialog.parentElement.classList.remove("e-popup-open");
      //     dialog.parentElement.classList.add("e-popup-close");
      //     args.element.innerHTML = this.popupEditStatue;
      // });

      // args.element.querySelector('#cancelButton').addEventListener('click', () => {
      //   let dialog = args.element.querySelector('#_dialog_wrapper_dialog-header');
      //   dialog.parentElement.parentElement.style.display = 'none';
      //   dialog.parentElement.classList.remove("e-popup-open");
      //   dialog.parentElement.classList.add("e-popup-close");
      //   args.element.innerHTML = this.popupEditStatue;
      // });

      // args.element.querySelector('#exitButton').addEventListener('click', () => {
      //   let dialog = args.element.querySelector('#_dialog_wrapper_dialog-header');
      //   dialog.parentElement.parentElement.style.display = 'none';
      //   dialog.parentElement.removeClass('e-popup-open');
      //   dialog.parentElement.addClass('e-popup-close');
      // });

      // args.element.querySelector('#IsTargetExacute').addEventListener('click', () =>{
      //   let element = args.element.querySelector('#IsTargetExacute');
      //   let spanElement = args.element.querySelector('#targetChecked');
      //   if(element.checked){
      //     let a = spanElement.classList.value.split(' ');
      //     a.splice(2, 1);
      //     spanElement.classList.value = a.join(' ');
      //     // element.checked = false;
      //   }
      //   else{
      //     debugger;
      //     let a = spanElement.classList.value.split(' ');
      //     a.push("e-check");
      //     spanElement.classList.value = a.join(' ');
      //     // element.checked = true;
      //   }
      //   console.log(element);
      // });
      // // ניתן לבצע פעולות נוספות כגון שמירה בבסיס הנתונים, עידכון נתונים קיימים ועוד
      
      // // לדוגמה, כאן אנו מדפיסים את הנתונים לקונסול
      // console.log('נתונים שהמשתמש הזין:', eventData);  
    }
    }
  }

  onActionComplete(args: any) {
    if (args.requestType === 'eventCreated' || args.requestType === 'eventChanged') {
      // הנתונים ששונו או הוספו
      const changedEventData = args.data[0];
      
      // אפשר לעשות משהו עם הנתונים ששונו/הוספו, כמו לשמור אותם בבסיס הנתונים
      console.log('נתונים ששונו/הוספו:', changedEventData);
      debugger;
    }
    
  }

  getRandomColor() {
    // const letters = '0123456789ABCDEF';
    // let color = '#';
    // for (let i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
    // }
    const colors = ["#3f51b5","pink", "purple", "yellow", "gray", "green", "orange", "black", "blue","browen"]
    let index = Math.floor(Math.random() * 10);
    console.log(index);
    if(index < 10)
       return colors[index];
    else return 'red'
  }

  onEventRendered(args: EventRenderedArgs | any): void {
    // Set custom colors for events based on some logic
    if (args.data.IdTarget === 1) {
      args.data.Color = 'lightblue';
      args.element.style.backgroundColor = 'lightblue';
    } else if (args.data.IdTarget === 2) {
      args.element.style.backgroundColor = 'lightgreen';
    } else if (args.data.IdTarget === 3) {
      args.element.style.backgroundColor = 'yellow';
    }else if (args.data.IdTarget === 4) {
    args.element.style.backgroundColor = 'orange';
    }else if (args.data.IdTarget === 5) {
    args.element.style.backgroundColor = 'pink';
    }
    else if (args.data.IdTarget === 10) {
    args.element.style.backgroundColor = 'brown';
    }
    else if (args.data.IdTarget === 14) {
    args.element.style.backgroundColor = 'gray';
    }
    let d = new Date(args.data.StartTime);
    let dateNow = new Date();
    if(args.data.Status && d <= dateNow){
      args.element.style.border = '2px solid green';
    }
    else if(args.data.Status == false && d <= dateNow){
      args.element.style.border = '2px solid red';
    }
    // Add more conditions for other events
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-edit-status.html',
  // standalone: true,
  // imports: [
  //   MatFormFieldModule,
  //   MatInputModule,
  //   FormsModule,
  //   MatButtonModule
  // ],
})
export class DialogEditStatusComponent implements OnInit{
  editTarget: FormGroup | undefined;
  target: any;
  constructor(
    public dialogRef: MatDialogRef<DialogEditStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void{
    debugger;
    console.log(this.dialogRef);
    console.log(this.data);
    this.target = this.data;
    this.editTarget = new FormGroup({
      Status: new FormControl(this.target.Status)
    });
  }

  get Status() {
    return this.editTarget!.controls['Status']
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}