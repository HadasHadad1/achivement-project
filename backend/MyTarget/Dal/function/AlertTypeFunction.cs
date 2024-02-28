using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.function
{
    public class AlertTypeFunction
    {
        static AchievementContext db = new AchievementContext();

        public static List<AlertType> getAllAlertType()
        {
            //ניגש למשתנה המחלקה
            //ונפעיל עליו שאילתא
            //list ולכן  יש לבצע המרה ל dbSet הרשימה היא מסוג
            return db.AlertTypes.ToList();
        }

        public static AlertType getAlertTypeById(int id)
        {
            return db.AlertTypes.Find(id);
        }

        public static bool deleteAlertType(int id)
        {
            AlertType aT = getAlertTypeById(id);
            if (aT != null)
            {
                db.AlertTypes.Remove(aT);
                //כשעושים שינוי במסד הנתונים
                //יש לזכור לשמור שינויים
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public static bool addAlertType(AlertType alertType)
        {
            AlertType aT = getAlertTypeById(alertType.IdAlertTypes);
            //אם קיים סוג התראה עם קוד כזה אין להוסיף שוב
            if (aT != null)
            {
                return false;
            }
            db.AlertTypes.Add(alertType);
            db.SaveChanges();
            return true;
        }

        public static bool updateAlertType(AlertType alertType)
        {
            //כאשר שולפים נתון ממסד הנתונים הנתון שנשלף הוא מצביע למסד נתונים
            AlertType aT = getAlertTypeById(alertType.IdAlertTypes);
            if (aT != null)
            {
                aT.IdAlertTypes = alertType.IdAlertTypes;
                aT.Description = alertType.Description;
                
                db.SaveChanges();
                return true;
            }
            //אם לא קיים סוג התראה אין למי לעדכן שינויים
            return false;

        }
    }
}
