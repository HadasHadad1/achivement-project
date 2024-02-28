using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.function
{
        public class FrequencyTypeFunction
    {
            static AchievementContext db = new AchievementContext();

            public static List<FrequencyType> getAllFrequencyType()
            {
                //ניגש למשתנה המחלקה
                //ונפעיל עליו שאילתא
                //list ולכן  יש לבצע המרה ל dbSet הרשימה היא מסוג
                return db.FrequencyTypes.ToList();
            }

            public static FrequencyType getFrequencyTypeById(int id)
            {
                return db.FrequencyTypes.Find(id);
            }

            public static bool deleteFrequencyType(int id)
            {
                FrequencyType fT = getFrequencyTypeById(id);
                if (fT != null)
                {
                    db.FrequencyTypes.Remove(fT);
                    //כשעושים שינוי במסד הנתונים
                    //יש לזכור לשמור שינויים
                    db.SaveChanges();
                    return true;
                }
                return false;
            }
            public static bool addFrequencyType(FrequencyType frequencyType)
            {
                FrequencyType fT = getFrequencyTypeById(frequencyType.IdFrequencyTypes);
                //אם קיים סוג תדירות עם קוד כזה אין להוסיף שוב
                if (fT != null)
                {
                    return false;
                }
                db.FrequencyTypes.Add(frequencyType);
                db.SaveChanges();
                return true;
            }

            public static bool updateFrequencyType(FrequencyType frequencyType)
            {
            //כאשר שולפים נתון ממסד הנתונים הנתון שנשלף הוא מצביע למסד נתונים
                FrequencyType fT = getFrequencyTypeById(frequencyType.IdFrequencyTypes);
                if (fT != null)
                {
                    fT.IdFrequencyTypes = frequencyType.IdFrequencyTypes;
                    fT.Description = frequencyType.Description;

                    db.SaveChanges();
                    return true;

                }
                //אם לא קיים סוג תדירות אין למי לעדכן שינויים
                return false;

            }
        }
    }


