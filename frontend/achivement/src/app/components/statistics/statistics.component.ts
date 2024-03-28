import { Component } from '@angular/core';
import { User } from 'src/app/clases/Allclases';
import { AllServicesService } from 'src/app/services/all-services.service';
import { LocaluserService } from 'src/app/services/localuser.service';
import { ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
    columnChartOptions:any = {
        animationEnabled: true,
        title: {
        //   text: 'Angular Column Chart in Material UI Tabs',
        text: 'סטטיסטיקות ביצוע יעדים - תרשים עמודות',
        },
        data: [
        //   {
            // Change type to "doughnut", "line", "splineArea", etc.
            // type: 'column',
            // dataPoints: [
            //   { label: 'apple', y: 10 },
            //   { label: 'orange', y: 15 },
            //   { label: 'banana', y: 25 },
            //   { label: 'mango', y: 30 },
            //   { label: 'grape', y: 28 },
            // ],
        //   },
        ],
      };
    
      pieChartOptions:any = {
        animationEnabled: true,
        title: {
          text: 'סטטיסטיקות ביצוע יעדים - תרשים עוגה',
        },
        theme: 'light2', // "light1", "dark1", "dark2"
        data: [
        //   {
        //     type: 'pie',
        //     dataPoints: [
        //     //   { label: 'apple', y: 10 },
        //     //   { label: 'orange', y: 15 },
        //     //   { label: 'banana', y: 25 },
        //     //   { label: 'mango', y: 30 },
        //     //   { label: 'grape', y: 28 },
        //     ],
        //   },
        ],
      };
    
      lineChartOptions:any = {
        animationEnabled: true,
        title: {
          text: 'סטטיסטיקות ביצוע יעדים תרשים קווים',
        },
        theme: 'light2', // "light1", "dark1", "dark2"
        data: [
        //   {
        //     type: 'line',
        //     dataPoints: [
        //     //   { label: 'apple', y: 10 },
        //     //   { label: 'orange', y: 15 },
        //     //   { label: 'banana', y: 25 },
        //     //   { label: 'mango', y: 30 },
        //     //   { label: 'grape', y: 28 },
        //     ],
        //   },
        ],
      };
   usernow: User = new User();
  constructor(public s: AllServicesService, private ls: LocaluserService,
    private cdr: ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit(): void 
  {
    this.usernow = this.ls.getLocalUser();
    const tz:any = this.usernow != null ? this.usernow.Tz: "";
      this.s.getAllSatisticsByTz(tz).subscribe((data)=>{
        // this.zone.run(() => {
            this.columnChartOptions.data = [{type: 'column', dataPoints: data}];
            this.pieChartOptions.data = [{type: 'pie', dataPoints: data}];
            this.lineChartOptions.data = [{type: 'line', dataPoints: data}];
            this.cdr.detectChanges(); // Trigger change detection
        // });
      },(err)=>{
        console.log(err);
      })
  }

  // פונקציה לחישוב אחוזי עמידה ביעד
  // CalculationOfStatistics()
  // {

  // }
}
