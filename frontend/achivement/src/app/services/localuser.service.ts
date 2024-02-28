import { Injectable } from '@angular/core';
import { User,Target } from '../clases/Allclases';


@Injectable({
  providedIn: 'root'
})
export class LocaluserService {

  constructor() { }
  
    // משתנה זה מכיל את פרטי המשתמש הנוכחי
   private user:User = new User();
   public getLocalUser():User{return this.user;}
   public setLocalUser(u:User){this.user=u;}
  
  //  משתנה זה מכיל את פרטי היעד שנבחר על ידי המשתמש
   private yaad:Target = new Target();
   public getLocalCourse():Target{return this.yaad;}
   public setLocalCourse(c:Target){this.yaad=c;}
  
  //   //משתנה זה מכיל את פרטי התלמיד בקורס הנוכחי
  //   private StudentinCourse:StudentInCourses = new StudentInCourses();
  //   public getLocalStudentinCourse():StudentInCourses{return this.StudentinCourse;}
  //   public setLocalStudentinCourse(c:StudentInCourses){this.StudentinCourse=c;}
  // }
 
}
