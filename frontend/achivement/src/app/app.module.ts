import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AddTargetComponent } from './components/add-target/add-target.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//material
import { A11yModule } from '@angular/cdk/a11y';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { CdkMenuModule } from '@angular/cdk/menu';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DialogModule } from '@angular/cdk/dialog';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
// import { StatisticsComponent } from './components/statistics/statistics.component';
// import { CalendarComponent } from './components/calendar/calendar.component';
import { LuachShanaComponent } from './components/luach-shana/luach-shana.component';
import { DialogEditStatusComponent, MyDetailsComponent } from './components/my-details/my-details.component';
import { ForgetPassworsComponent } from './components/forget-passwors/forget-passwors.component';
import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TimeWheelComponent } from './components/time-wheel/time-wheel.component';
import { 
	IgxTimePickerModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxButtonModule
 } from "igniteui-angular";
 import { DateTimePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';

 import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
 var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    CanvasJSChart,
    AddTargetComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    MenuComponent,
    AboutComponent,
    StatisticsComponent,
    // CalendarComponent,
    LuachShanaComponent,
    DialogEditStatusComponent,
    MyDetailsComponent,
     ForgetPassworsComponent,
     TimeWheelComponent
  ],

  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService,
    // Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx3Qnxbf1x0ZFxMYVpbRXJPIiBoS35RckVgWHdccXVTR2VeWUV+
    // { provide: 'sf-licenseKey', useValue: 'Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx3Qnxbf1x0ZFRGalxUTndWUj0eQnxTdEFjWn1fcXBRRmBdUkVyXg==' }
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    //material
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkListboxModule,
    CdkMenuModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    DialogModule,
    MatFormFieldModule,
    FormsModule ,// הוספת ה- FormsModule כאן
    ReactiveFormsModule, // הוספת הייבוא של ReactiveFormsModule למודול
    // CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ScheduleModule,//module from the ej2-angular-schedule package
    TimePickerModule,//module from the ej2-angular-calendars package
  //  Time
  IgxTimePickerModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxButtonModule
  ]
  
})
export class AppModule {}


//I keep the new line
