// import { Component, OnInit } from '@angular/core';
// import { TestService } from 'src/app/services/test.service';

// @Component({
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html',
//   styleUrls: ['./calendar.component.css']
// })
// export class CalendarComponent {
  // dates: Date[] = []; // רשימת תאריכים להצגה בלוח השנה
  // positiveDates: Date[] = []; // רשימת תאריכים חיוביים
  // negativeDates: Date[] = []; // רשימת תאריכים שליליים

  // constructor(private yourDataService: TestService) { }

  // ngOnInit(): void {
  //   // הבאת הנתונים מהשרת
  //   this.yourDataService.getPositiveDates().subscribe(data => {
  //     this.positiveDates = data;
  //     this.updateDates();
  //   });
  //   this.yourDataService.getNegativeDates().subscribe(data => {
  //     this.negativeDates = data;
  //     this.updateDates();
  //   });
  // }

  // // עדכון רשימת התאריכים להצגה בלוח השנה
  // updateDates(): void {
  //   this.dates = [];
  //   for (let i = 1; i <= this.getDaysInMonth(); i++) {
  //     this.dates.push(new Date(this.getFullYear(), this.getMonth(), i));
  //   }
  // }

  // // קבלת מספר הימים בחודש הנוכחי
  // getDaysInMonth(): number {
  //   return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
  // }

  // // קבלת השנה הנוכחית
  // getFullYear(): number {
  //   return new Date().getFullYear();
  // }

  // // קבלת החודש הנוכחי
  // getMonth(): number {
  //   return new Date().getMonth();
  // }

  // // קבלת הכינוי לחודש הנוכחי
  // getMonthName(): string {
  //   const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
  //   return months[this.getMonth()];
  // }

  // // בדיקה האם תאריך מסוים הוא תאריך חיובי
  // isPositive(date: Date): boolean {
  //   return this.positiveDates.some(d => this.areDatesEqual(d, date));
  // }

  // // בדיקה האם תאריך מסוים הוא תאריך שלילי
  // isNegative(date: Date): boolean {
  //   return this.negativeDates.some(d => this.areDatesEqual(d, date));
  // }

  // // השוואת שני תאריכים
  // areDatesEqual(date1: Date, date2: Date): boolean {
  //   return date1.getFullYear() === date2.getFullYear() &&
  //          date1.getMonth() === date2.getMonth() &&
  //          date1.getDate() === date2.getDate();
  // }

  // // הוספת תאריך חיובי או שלילי
  // toggleDate(date: Date): void {
  //   if (this.isPositive(date)) {
  //     this.removePositiveDate(date);
  //     this.addNegativeDate(date);
  //   } else if (this.isNegative(date)) {
  //     this.removeNegativeDate(date);
  //   } else {
  //     this.addPositiveDate(date);
  //   }
  // }

  // // הוספת תאריך חיובי
  // addPositiveDate(date: Date): void {
  //   this.positiveDates.push(date);
  // }

  // // הוספת תאריך שלילי
  // addNegativeDate(date: Date): void {
  //   this.negativeDates.push(date);
  // }

  // // מחיקת תאריך חיובי
  // removePositiveDate(date: Date): void {
  //   const index = this.positiveDates.findIndex(d => this.areDatesEqual(d, date));
  //   if (index !== -1) {
  //     this.positiveDates.splice(index, 1);
  //   }
  // }

  // // מחיקת תאריך שלילי
  // removeNegativeDate(date: Date): void {
  //   const index = this.negativeDates.findIndex(d => this.areDatesEqual(d, date));
  //   if (index !== -1) {
  //     this.negativeDates.splice(index, 1);
  //   }
  // }
