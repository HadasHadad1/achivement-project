import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  getDatesInRange(startDate: Date, endDate: Date): Date[] {
    const datesArray: Date[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      datesArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return datesArray;
  }

  getDatesWithTimes(startDate: Date, endDate: Date, times: { hour: number, minute: number }[]): Date[] {
    const datesWithTimes: Date[] = [];
    
    const currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
      for (const time of times) {
        const newDate = new Date(currentDate);
        newDate.setHours(time.hour, time.minute, 0, 0);
        datesWithTimes.push(newDate);
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return datesWithTimes;
  }

  getDatesForWeekWithTimes(startDate: Date, endDate: Date,daysArray: number[], times: { hour: number, minute: number }[]): Date[] {
    const datesWithTimes: Date[] = [];
    
    const currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
      console.log("this the day: ",currentDate.getDay());
      if (daysArray.includes(currentDate.getDay())) {
        for (const time of times) {
          const newDate = new Date(currentDate);
          newDate.setHours(time.hour, time.minute, 0, 0);
          datesWithTimes.push(newDate);
        }
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return datesWithTimes;
  }

  getDatesForWeek(startDate: Date, endDate: Date, daysArray: number[]): Date[] {
    const datesArray: Date[] = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      console.log("this the day: ",currentDate.getDay());
      if (daysArray.includes(currentDate.getDay())) {
        datesArray.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return datesArray;
  }

  getDatesForMonthsWithTime(startDate: Date, endDate: Date,  times: { hour: number, minute: number }[]): Date[] {
    const datesArray: Date[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        for (const time of times) {
          const newDate = new Date(currentDate);
          newDate.setHours(time.hour, time.minute, 0, 0);
          datesArray.push(newDate);
        }
        currentDate.setMonth(currentDate.getMonth() + 1);
      }

    return datesArray;
  }

  getDatesForMonths(startDate: Date, endDate: Date): Date[] {
    const datesArray: Date[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      datesArray.push(new Date(currentDate));
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return datesArray;
  }

  getDatesForYears(startDate: Date, endDate: Date): Date[] {
    const datesArray: Date[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      datesArray.push(new Date(currentDate));
      currentDate.setFullYear(currentDate.getFullYear() + 1);
    }

    return datesArray;
  }

  // בטווח של שנה לפי תאריכים ובשנה שבחר
  getDatesForYearAndMonths(year: number, monthsArray: number[], datesArray: number[]): Date[] {
    const datesArray1: Date[] = [];
    let currentDate = new Date(year, 0, 1);
  
    while (currentDate.getFullYear() === year) {
      if (monthsArray.includes(currentDate.getMonth()) && datesArray.includes(currentDate.getDate())) {
        datesArray1.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return datesArray1;
  }

}