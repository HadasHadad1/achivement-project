using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.function
{
    public class AlertHourFunction
    {
        static AchievementContext db = new AchievementContext();

        public static List<AlertHour> getAllAlertHour()
        {
            //ניגש למשתנה המחלקה
            //ונפעיל עליו שאילתא
            //list ולכן  יש לבצע המרה ל dbSet הרשימה היא מסוג
            return db.AlertHours.ToList();
        }

        public static AlertHour getAlertHourById(int id)
        {
            return db.AlertHours.Find(id);
        }

        public static bool deleteAlertHour(int id)
        {
            AlertHour aH = getAlertHourById(id);
            if (aH != null)
            {
                db.AlertHours.Remove(aH);
                //כשעושים שינוי במסד הנתונים
                //יש לזכור לשמור שינויים
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public static bool addAlertHour(AlertHour alertHour)
        {
            AlertHour aH = getAlertHourById(alertHour.IdAlertHours);
            //אם קיימת שעת התראה עם קוד כזה אין להוסיף שוב
            if (aH != null)
            {
                return false;
            }
            db.AlertHours.Add(alertHour);
            db.SaveChanges();
            return true;
        }

        public static bool updateAlertHour(AlertHour alertHour)
        {
            //כאשר שולפים נתון ממסד הנתונים הנתון שנשלף הוא מצביע למסד נתונים
            AlertHour aH = getAlertHourById(alertHour.IdAlertHours);
            if (aH != null)
            {
                aH.IdAlertHours = alertHour.IdAlertHours;
                aH.IdTargets = alertHour.IdTargets;
                aH.Hour = alertHour.Hour;
               
                db.SaveChanges();
                return true;

            }
            //אם לא קיימת שעת התראה אין למי לעדכן שינויים
            return false;

        }
    }
}
