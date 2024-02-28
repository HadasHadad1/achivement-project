// import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { CalendarEvent } from 'angular-calendar';
// import { subDays, addDays } from 'date-fns';
// import { TargetService } from 'src/app/services/target.service';
// import { LocaluserService } from '../localuser.service';


// @Component({
//   selector: 'app-demo-component',
//   templateUrl: './demo-component.component.html',
//   styleUrls: ['./demo-component.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class DemoComponentComponent {
//   viewDate: Date = new Date();
//   events: CalendarEvent[] = [];
//   constructor(private formBuilder: FormBuilder, private s: TargetService, private router: Router, private ls: LocaluserService) {}
//   subDay(): void {
//     this.viewDate = subDays(this.viewDate, 1);
//   }

//   addDay(): void {
//     this.viewDate = addDays(this.viewDate, 1);
//   }

// }
