using Dal.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.function
{
    public class TargetFunction
    {
        static AchievementContext db = new AchievementContext();
        public static List<Target> getAllTarget()
        {
            //ניגש למשתנה המחלקה
            //ונפעיל עליו שאילתא
            //list ולכן  יש לבצע המרה ל dbSet הרשימה היא מסוג
            return db.Targets.Include(target => target.AlertDates).ToList();
        }

        public static List<Target> getAllSatisticsByTz(string tzUser)
        {
            return db.Targets.Where(target => target.TzUserNavigation.Tz.Equals(tzUser)).Include(t => t.Performences).Include(a => a.AlertDates).ToList();
        }

        public static Target getTargetById(int id)
        {
            var a = db.Targets.Where(target => target.IdTargets == id).Include(t => t.AlertDates).FirstOrDefault();
            return a;
        }

        public static bool deleteTarget(int id)
        {
            Target t = getTargetById(id);
            if (t != null)
            {
                db.Targets.Remove(t);
                //כשעושים שינוי במסד הנתונים
                //יש לזכור לשמור שינויים
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public static Target addTarget(Target target)
        {
            db.Targets.Add(target);
            db.SaveChanges();
            return target;
        }

        public static Target updateTarget(int id, Target target)
        {
            //כאשר שולפים נתון ממסד הנתונים הנתון שנשלף הוא מצביע למסד נתונים
            Target t = getTargetById(id);
            if (t != null)
            {
                t.IdTargets = target.IdTargets;
                t.TzUser = target.TzUser;
                t.Description = target.Description;
                t.StartDate = target.StartDate;
                t.EndDate = target.EndDate;
                t.SeveralTimesAday = target.SeveralTimesAday;

              db.SaveChanges();
            }
            //אם לא קיימת מטרה אין למי לעדכן שינויים
            return t;

        }

        //internal static Target getTargetById(int? idTargets)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
