//using Dal.models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Dal.function
//{
//    public class AlertFrequencyTypeFunction
//    {
//        static AchievementContext db = new AchievementContext();

//        public static List<AlertFrequencyType> getAll()
//        {
//            //ניגש למשתנה המחלקה
//            //ונפעיל עליו שאילתא
//            //list ולכן  יש לבצע המרה ל dbSet הרשימה היא מסוג
//            return db.AlertFrequencyTypes.ToList();
//        }

//        public static AlertFrequencyType getById(int id)
//        {
//            return db.AlertFrequencyTypes.Find(id);
//        }

//        public static bool deleteAlertFrequencyType(int id)
//        {
//            AlertFrequencyType aFT = getById(id);
//            if (aFT != null)
//            {
//                db.AlertFrequencyTypes.Remove(aFT);
//                //כשעושים שינוי במסד הנתונים
//                //יש לזכור לשמור שינויים
//                db.SaveChanges();
//                return true;
//            }
//            return false;
//        }
//        public static bool addAlertFrequencyType(AlertFrequencyType alertFrequencyType)
//        {
//            AlertFrequencyType aFT = getById(alertFrequencyType.IdAlertFrequencyTypes);
//            //אם קיימת תדירות עם קוד כזה אין להוסיף שוב
//            if (aFT != null)
//            {
//                return false;
//            }
//            db.AlertFrequencyTypes.Add(alertFrequencyType);
//            db.SaveChanges();
//            return true;
//        }

//        public static bool UpdateAlertFrequencyType(AlertFrequencyType alertFrequencyType)
//        {
//            //כאשר שולפים נתון ממסד הנתונים הנתון שנשלף הוא מצביע למסד נתונים
//            AlertFrequencyType aFT = getById(alertFrequencyType.IdAlertFrequencyTypes);
//            if (aFT != null)
//            {
//                aFT.IdAlertFrequencyTypes = alertFrequencyType.IdAlertFrequencyTypes;
//                aFT.Description = alertFrequencyType.Description;
                
//                db.SaveChanges();
//                return true;

//            }
//            //אם לא קיימת תדירות אין למי לעדכן שינויים
//            return false;

//        }
//    }
//}
