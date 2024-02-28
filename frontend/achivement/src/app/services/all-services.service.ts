import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertDate,AlertFrequencyType,AlertType,AlertHour, User,Target,Performence,Frequency,FrequencyType } from '../clases/Allclases';
import {ForgetPassworsComponent} from '../components/forget-passwors/forget-passwors.component';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(public http: HttpClient) { }
  currentUser: User = new User();
  myUrl:string="https://localhost:7298/api/";
  list: Array<FrequencyType> = new Array<FrequencyType>()

// שעות התראה
  getAllAlertHour():Observable<Array<AlertHour>>
  {
   return this.http.get<Array<AlertHour>>(`${this.myUrl}Alerthour/getAllAlertHour/`,{})
  }

  getAlertHourById(IdAlertHour:number):Observable<AlertHour>
  {
     return this.http.get<AlertHour>(`${this.myUrl}Alerthour/getAlertHourById/${IdAlertHour}`,{})
  }
  
  addAlertHour(IdAlertHour:number):Observable<Array<AlertHour>>
  {
     return this.http.post<Array<AlertHour>>(`${this.myUrl}Alerthour/addAlertHour/${IdAlertHour}`,{})
  }

  updateAlertHour(IdAlertHour:number):Observable<Array<AlertHour>>
  {
     return this.http.put<Array<AlertHour>>(`${this.myUrl}Alerthour/updateAlertHour/${IdAlertHour}`,{})
  }

  deleteAlertHour(IdAlertHour:number):Observable<Array<AlertHour>>
  {
     return this.http.delete<Array<AlertHour>>(`${this.myUrl}Alerthour/deleteAlertHour/${IdAlertHour}`,{})
  }

  //סוג תדירות
  getAllFrequencyType(): Observable<Array<FrequencyType>> {
    return this.http.get<Array<FrequencyType>>(`${this.myUrl}FrequencyType/getAllFrequencyType/`, {})
 }

 getFrequencyTypeById(IdFrequencyType: number): Observable<FrequencyType> {
    return this.http.get<FrequencyType>(`${this.myUrl}FrequencyType/getFrequencyTypeById/${IdFrequencyType}`, {})
 }

 addFrequencyType(IdFrequencyType: number): Observable<Array<FrequencyType>> 
 {
    return this.http.post<Array<FrequencyType>>(`${this.myUrl}FrequencyType/addFrequencyType/${IdFrequencyType}`, {})
 }

 updateFrequencyType(IdFrequencyType: number): Observable<Array<FrequencyType>> {
    return this.http.put<Array<FrequencyType>>(`${this.myUrl}FrequencyType/updateFrequencyType/${IdFrequencyType}`, {})
 }

 deleteFrequencyType(IdFrequencyType: number): Observable<Array<FrequencyType>> {
    return this.http.delete<Array<FrequencyType>>(`${this.myUrl}FrequencyType/deleteFrequencyType/${IdFrequencyType}`, {})
 }

 //תדירות

 getAllFrequency():Observable<Array<Frequency>>
 {
  debugger
  return this.http.get<Array<Frequency>>(`${this.myUrl}Frequency/getAllFrequency/`)
 }

 getFrequencyById(IdFrequency:number):Observable<Frequency>
 {
    return this.http.get<Frequency>(`${this.myUrl}Frequency/getFrequencyById/${IdFrequency}`)
 }
 
 addFrequency(IdFrequency:number):Observable<Array<Frequency>>
 {
    return this.http.post<Array<Frequency>>(`${this.myUrl}Frequency/addFrequency/${IdFrequency}`,{})
 }

 updateFrequency(IdFrequency:number):Observable<Array<Frequency>>
 {
    return this.http.put<Array<Frequency>>(`${this.myUrl}Frequency/updateFrequency/${IdFrequency}`,{})
 }

 deleteFrequency(IdFrequency:number):Observable<Array<Frequency>>
 {
    return this.http.delete<Array<Frequency>>(`${this.myUrl}Frequency/deleteFrequency/${IdFrequency}`,{})
 }

 //ביצועים

 getAllPerformence():Observable<Array<Performence>>
     {
      return this.http.get<Array<Performence>>(`${this.myUrl}Performence/getAllPerformence/`,{})
     }

     getPerformenceById(IdPerformence:number):Observable<Performence>
     {
        return this.http.get<Performence>(`${this.myUrl}Performence/getPerformenceById/${IdPerformence}`,{})
     }
     
     addPerformence(IdPerformence:number):Observable<Array<Performence>>
     {
        return this.http.post<Array<Performence>>(`${this.myUrl}Performence/addPerformence/${IdPerformence}`,{})
     }

     updatePerformence(IdPerformence:number):Observable<Array<Performence>>
     {
        return this.http.put<Array<Performence>>(`${this.myUrl}Performence/updatePerformence/${IdPerformence}`,{})
     }

     deletePerformence(IdPerformence:number):Observable<Array<Performence>>
     {
        return this.http.delete<Array<Performence>>(`${this.myUrl}Performence/deletePerformence/${IdPerformence}`,{})
     }

     //יעדים

     getAllTarget(): Observable<Array<Target>> 
     {
        return this.http.get<Array<Target>>(`${this.myUrl}Target/getAllTarget`)
     }
  
     getTargetById(IdTargets: number): Observable<Target> 
     {
        return this.http.get<Target>(`${this.myUrl}Target/getTargetById/${IdTargets}`)
     }
  
     addTarget(target: Target): Observable<Target> 
     {
        return this.http.post<Target>(`${this.myUrl}Target/AddTarget`, target)
     }
  
     updateTarget(IdTargets: number, target: Target): Observable<Target> 
     {
        return this.http.put<Target>(`${this.myUrl}Target/updateTarget/${IdTargets}`, target)
     }
  
     deleteTarget(IdTargets: number): Observable<boolean>
     {
        return this.http.delete<boolean>(`${this.myUrl}Target/deleteTarget/${IdTargets}`, {})
     }

     //משתמש

     getAllUser():Observable<Array<User>>
     {
      return this.http.get<Array<User>>(`${this.myUrl}User/getAllUser/`,{})
     }
     
     getUserById(Tz:string):Observable<User>
     {
        return this.http.get<User>(`${this.myUrl}User/getUserById/${Tz}`,{})
     }
      
     addUser(user:User):Observable<boolean>
     {
        return this.http.post<boolean>(`${this.myUrl}User/AddUser/`,user)
     }

     updateUser(Tz:string):Observable<Array<User>>
     {
        return this.http.put<Array<User>>(`${this.myUrl}User/updateUser/${Tz}`,{})
     }

     deleteUser(Tz:string):Observable<Array<User>>
     {
        return this.http.delete<Array<User>>(`${this.myUrl}User/deleteUser/${Tz}`,{})
     }

     public sendMail(adressMail: string, subject: string, body: string): Observable<boolean> {
      return this.http.get<boolean>(`${this.myUrl}User/SendMail?emailTo=${adressMail}&subject=${subject}&body=${body}`)
    }
    
    //בודק עם קיים מספר זהות-הפונקציה לא תקינה
    checkTz(Tz:string):Observable<Array<User>>
    {
      return this.http.delete<Array<User>>(`${this.myUrl}User/deleteUser/${Tz}`,{})
    }
   //    postUser(ue: User): Observable<User> {
   //    return this.http.post<User>(`${this.myUrl}User/PostUser`, ue, httpOptions);
   //  }
    
//    postUserAndSubscribe(user: User):Observable<User> {
//       const httpOptions = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json'
//         })
//    }
// }

postUser2(user: User): Observable<User> {
   const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   };
   return this.http.post<User>(`${this.myUrl}/PostUser`, user, httpOptions);
}

   

     SignIn(Email:string):Observable<User>
     {
      return this.http.get<User>(`${this.myUrl}/SignIn/${Email}`,{})
     }
     //ובודקת אם שוים פונקציה שמקבלת מיל וסיסמא 
      //מזמנת באנגולר
      //מכניסה את התוצאה
      //כן 



}
