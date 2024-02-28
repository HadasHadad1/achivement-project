import { Component, ViewChild } from '@angular/core';
import { User,Target } from 'src/app/clases/Allclases';
// import { LocaluserService } from 'src/app/services/localuser.service';
// import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EventSettingsModel, ScheduleComponent, View} from '@syncfusion/ej2-angular-schedule';
import { L10n } from '@syncfusion/ej2-base';

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

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent {
  @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;
  // constructor(private ls: LocaluserService,private s:User,public router: Router,) { }
  constructor(public router: Router) { }
  usernow:User=new User();
  b:boolean=true;
  AllYaad:Target[]=[]
  yaad:number=0
  degela:boolean=false;
  public eventData: EventSettingsModel = {
    dataSource: [{

        Id: 1,

        Subject: 'Board Meeting',

        StartTime: new Date(2024, 10, 30, 9, 0),

        EndTime: new Date(2024, 10, 30, 11, 0)

    },

        {

            Id: 2,

            Subject: 'Training session on JSP',

            StartTime: new Date(2024, 10, 30, 15, 0),

            EndTime: new Date(2024, 10, 30, 17, 0)

        },

        {

            Id: 3,

            Subject: 'Sprint Planning with Team members',

            StartTime: new Date(2024, 10, 30, 9, 30),

            EndTime: new Date(2024, 10, 30, 11, 0)

        }]};

    public currentDate: Date = new Date(2024,2,20); 
 
    public newViewMode: View = 'Month'; 

  ngOnInit(): void {
    this.degela=true;
    this.b=true;
    // this.usernow=this.ls.getLocalUser();
    console.log(this.scheduleObj);
    this.scheduleObj.locale = 'he';
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
      // אפשר לקבל את הנתונים שהמשתמש הזין בטופס
      const eventData = args.data;
      
      // ניתן לבצע פעולות נוספות כגון שמירה בבסיס הנתונים, עידכון נתונים קיימים ועוד
      
      // לדוגמה, כאן אנו מדפיסים את הנתונים לקונסול
      console.log('נתונים שהמשתמש הזין:', eventData);
    }
  }

  onActionComplete(args: any) {
    if (args.requestType === 'eventCreated' || args.requestType === 'eventChanged') {
      // הנתונים ששונו או הוספו
      const changedEventData = args.data[0];
      
      // אפשר לעשות משהו עם הנתונים ששונו/הוספו, כמו לשמור אותם בבסיס הנתונים
      console.log('נתונים ששונו/הוספו:', changedEventData);
    }
  }

}