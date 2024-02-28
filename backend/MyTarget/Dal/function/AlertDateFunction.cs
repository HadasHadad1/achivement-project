using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.function
{
    public class AlertDateFunction
    {
        static AchievementContext db = new AchievementContext();

        public static List<AlertDate> getAllAlertDate()
        {
            //ניגש למשתנה המחלקה
            //ונפעיל עליו שאילתא
            //list ולכן  יש לבצע המרה ל dbSet הרשימה היא מסוג
            return db.AlertDates.ToList();
        }

        public static AlertDate getAlertDateById(int id)
        {
            return db.AlertDates.Find(id);
        }

        public static bool deleteAlertDate(int id)
        {
            AlertDate aD = getAlertDateById(id);
            if (aD != null)
            {
                db.AlertDates.Remove(aD);
                //כשעושים שינוי במסד הנתונים
                //יש לזכור לשמור שינויים
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public static bool addAlertDate(AlertDate alertDate)
        {
            AlertDate aD = getAlertDateById(alertDate.IdAlertDate);
            //אם קיים תאריך התראה עם קוד כזה אין להוסיף שוב
            if (aD != null)
            {
                return false;
            }
            db.AlertDates.Add(alertDate);
            db.SaveChanges();
            return true;
        }

        public static bool updateAlertDate(AlertDate alertDate)
        {
            //כאשר שולפים נתון ממסד הנתונים הנתון שנשלף הוא מצביע למסד נתונים
            AlertDate aD = getAlertDateById(alertDate.IdAlertDate);
            if (aD != null)
            {
                aD.IdAlertDate = alertDate.IdAlertDate;
                aD.IdTargets = alertDate.IdTargets;
                aD.Date = alertDate.Date;

                db.SaveChanges();
                return true;

            }
            //אם לא קיים תאריך התראה אין למי לעדכן שינויים
            return false;

        }
    }
}

