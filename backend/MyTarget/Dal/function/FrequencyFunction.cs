using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.function
{
    public class FrequencyFunction
    {
        static AchievementContext db = new AchievementContext();

        public static List<Frequency> getAllFrequency()
        {
            //ניגש למשתנה המחלקה
            //ונפעיל עליו שאילתא
            //list ולכן  יש לבצע המרה ל dbSet הרשימה היא מסוג
            return db.Frequencies.ToList();
        }

        public static Frequency getFrequencyById(int id)
        {
            return db.Frequencies.Find(id);
        }

        public static bool deleteFrequency(int id)
        {
            Frequency f = getFrequencyById(id);
            if (f != null)
            {
                db.Frequencies.Remove(f);
                //כשעושים שינוי במסד הנתונים
                //יש לזכור לשמור שינויים
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public static bool addFrequency(Frequency frequency)
        {
            Frequency f = getFrequencyById(frequency.IdFrequency);
            //אם קיימת תדירות עם קוד כזה אין להוסיף שוב
            if (f != null)
            {
                return false;
            }
            db.Frequencies.Add(frequency);
            db.SaveChanges();
            return true;
        }

        public static bool updateFrequency(Frequency frequency)
        {
            //כאשר שולפים נתון ממסד הנתונים הנתון שנשלף הוא מצביע למסד נתונים
            Frequency f = getFrequencyById(frequency.IdFrequency);
            if (f != null)
            {
                f.IdFrequency = frequency.IdFrequency;
                f.IdTargets = frequency.IdTargets;
                f.Note = frequency.Note;

                db.SaveChanges();
                return true;
           
            }
            //אם לא קיימת תדירות אין למי לעדכן שינויים
            return false;

        }
    }
}
