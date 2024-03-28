using Dal.function;
using Dal.models;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Metrics;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TargetController : ControllerBase
    {
        [HttpGet("GetAllTarget")]
        public ActionResult<List<TargetDto>> GetAll()
        {
            return Ok(TargetDto.convertListFromDBtoDTO(TargetFunction.getAllTarget()));
        }

        [HttpGet("GetTargetByID/{id}")]
        public ActionResult<TargetDto> GetById(int id)
        {
            return Ok(TargetDto.convertFromDBtoDTO(TargetFunction.getTargetById(id)));
        }

        [HttpGet("GetAllSatisticsByTz/{tz}")]
        public ActionResult<List<Statistic>> GetAllSatisticsByTz(string tz)
        {
            return Ok(Statistic.convertListFromDBtoDTO(TargetFunction.getAllSatisticsByTz(tz)));
        }

        [HttpDelete("DeleteTarget/{id}")]
        public ActionResult<bool> Remove(int id)
        {
            return Ok(TargetFunction.deleteTarget(id));
        }

        [HttpPost("AddTarget")]
        public ActionResult<TargetDto> Add([FromBody] TargetDto t)
        {
            //הוספת יעד לDB
            TargetDto t1 = TargetDto.convertFromDBtoDTO(TargetFunction.addTarget(TargetDto.convertFromDTOtoDB(t)));
            //קבלת רשימת הימים ליעד
            //List<TargetDateDto> lt = GetTargetDateDto(t1);
            //הוספת הרשימה לDB

            //???????????/
            //יצירת הרשימה של ההתראות
            //הוספתם לDB
            //GetAlertDateDTO(t1);
            return Ok(t1);
        }

        [HttpPut("UpdateTarget/{id}")]
        public ActionResult<bool> Update(int id, [FromBody] TargetDto t)
        {
            return Ok(TargetFunction.updateTarget(id, TargetDto.convertFromDTOtoDB(t)));
        }

        //מחזירה רשימה של הימים שצריך לבצע את היעד
        public static List<TargetDateDto> GetTargetDateDto(TargetDto t)
        {
            List<TargetDateDto> tDate = new List<TargetDateDto>();

            if (t.IdFrequencyTypes == 1)//יומי
            {
                DateTime ezer = t.StartDate;
               while(ezer < t.EndDate)
                {
                    //הוספה לרשימת תאריכי יעד
                    TargetDateDto tt = new TargetDateDto();
                    tt.IdTargets = t.IdTargets;
                    tt.TargetDate = ezer;
                    tDate.Add(tt);
                    //קידום לתאריך הבא
                    ezer = ezer.AddDays(1);
                }
            }

            else

            if (t.IdFrequencyTypes == 2)//שבועי
            {
                //בדיקה האם היום בשבוע שייך לאחר מהערכים ברשימה למעלה
                //אם כן להוסיף
                //אם לא לעבור לתאריך הבא

                //מעבר על הימים שבחר
                foreach (string str in t.listD)
                {
                    DateTime ezer = t.StartDate;
                    //חיפוש התאריך הראשון ביום זה
                    while (int.Parse(str) != (int)ezer.DayOfWeek)
                        ezer.AddDays(1);

                    //הוספת כל התאריכים עד לסיום המשימה
                    while (ezer < t.EndDate)
                    {
                        TargetDateDto aa = new TargetDateDto();
                        aa.IdTargets = t.IdTargets;
                        aa.TargetDate = t.StartDate;
                        tDate.Add(aa);
                        Console.WriteLine("היום קיים ברשימת הימים");

                        //קידום בשבוע
                        ezer.AddDays(7);
                    }
                }
            }

            else
            if (t.IdFrequencyTypes == 3)//חודשי
            {
                foreach (string str in t.listD)
                {
                    DateTime ezer = t.StartDate;
                    //חיפוש התאריך הראשון ביום זה
                    while (int.Parse(str) != ezer.Day)
                        ezer.AddDays(1);

                    //הוספת כל התאריכים עד לסיום המשימה
                    while (ezer < t.EndDate)
                    {
                        TargetDateDto aa = new TargetDateDto();
                        aa.IdTargets = t.IdTargets;
                        aa.TargetDate = t.StartDate;
                        tDate.Add(aa);
                        Console.WriteLine(" היום קיים ברשימת הימים בחודש");

                        //קידום בחודש
                        ezer.AddMonths(1);
                    }
                }
            }

            else
            if (t.IdFrequencyTypes == 4)//שנתי
            {
                foreach (string str in t.listD)
                {
                    DateTime dy = DateTime.Parse(str);

                    while (dy < t.EndDate)
                    {
                        TargetDateDto aa = new TargetDateDto();
                        aa.IdTargets = t.IdTargets;
                        if (dy < t.StartDate)
                            aa.TargetDate = dy.AddYears(1);
                        else
                            aa.TargetDate = dy;
                        tDate.Add(aa);

                        //קידום בשנה
                        dy.AddYears(1);
                    }

                }

            }

            return tDate;

        }

        //הוספת רשימת תאריכי התראות יעד לDB
        public static bool AddListToDB(List<TargetDto> a)
        {
            foreach (TargetDto d in a)
            {
                TargetFunction.addTarget(TargetDto.convertFromDTOtoDB(d));
            }
            return true;
        }





        public static List<AlertDateDto> GetAlertDateDTO(TargetDto t)
        {
            List<AlertDateDto> a = new List<AlertDateDto>();

            if (t.IdFrequencyTypes == 1)//יומי
            {
                while (t.StartDate < t.EndDate)
                {
                    //הוספה לרשימת תאריכי יעד
                    AlertDateDto aa = new AlertDateDto();
                  
                    
                    //הוספה לטבלת תאריכי התראות
                    aa.IdTargets = t.IdTargets;
                    aa.Date = t.StartDate;
                    a.Add(aa);
                    //קידום לתאריך הבא
                    t.StartDate = t.StartDate.AddDays(1);
                }
            }

            else

            if (t.IdFrequencyTypes == 2)//שבועי
            {
                //בדיקה האם היום בשבוע שייך לאחר מהערכים ברשימה למעלה
                //אם כן להוסיף
                //אם לא לעבור לתאריך הבא

                //מעבר על הימים שבחר
                foreach (string str in t.listD)
                {
                    DateTime ezer = t.StartDate;
                    //חיפוש התאריך הראשון ביום זה
                    while (int.Parse(str) != (int)ezer.DayOfWeek)
                        ezer.AddDays(1);

                    //הוספת כל התאריכים עד לסיום המשימה
                    while (ezer < t.EndDate)
                    {
                        AlertDateDto aa = new AlertDateDto();
                        aa.IdTargets = t.IdTargets;
                        aa.Date = t.StartDate;
                        a.Add(aa);
                        Console.WriteLine("היום קיים ברשימת הימים");

                        //קידום בשבוע
                        ezer.AddDays(7);
                    }
                }
            }

            else
            if (t.IdFrequencyTypes == 3)//חודשי
            {
                foreach (string str in t.listD)
                {
                    DateTime ezer = t.StartDate;
                    //חיפוש התאריך הראשון ביום זה
                    while (int.Parse(str) != ezer.Day)
                        ezer.AddDays(1);

                    //הוספת כל התאריכים עד לסיום המשימה
                    while (ezer < t.EndDate)
                    {
                        AlertDateDto aa = new AlertDateDto();
                        aa.IdTargets = t.IdTargets;
                        aa.Date = t.StartDate;
                        a.Add(aa);
                        Console.WriteLine(" היום קיים ברשימת הימים בחודש");

                        //קידום בחודש
                        ezer.AddMonths(1);
                    }
                }
            }
            else

            if (t.IdFrequencyTypes == 4)//שנתי
            {
                foreach (string str in t.listD)
                {
                    DateTime dy = DateTime.Parse(str);

                    while (dy < t.EndDate)
                    {
                        AlertDateDto aa = new AlertDateDto();
                        aa.IdTargets = t.IdTargets;
                        if (dy < t.StartDate)
                            aa.Date = dy.AddYears(1);
                        else
                            aa.Date = dy;
                        a.Add(aa);

                        //קידום בשנה
                        dy.AddYears(1);
                    }

                }

            }
            AddListToDB(a);
            return a;

        }
        
        //הוספת רשימת תאריכי ביצוע יעד לDB
        public static bool AddListToDB(List<AlertDateDto> a)
        {
            foreach (AlertDateDto d in a)
            {
                AlertDateFunction.addAlertDate(AlertDateDto.convertFromDTOtoDB(d));
            }
            return true;
        }


    }
}