using Dal.models;
using Dal.function;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;
using Microsoft.VisualBasic;

namespace Dal.function
{
    public class PerformenceFunction
    {
        static AchievementContext db = new AchievementContext();
        public static List<Performence> getAllPerformence()
        {
            //ניגש למשתנה המחלקה
            //ונפעיל עליו שאילתא
            //list ולכן  יש לבצע המרה ל dbSet הרשימה היא מסוג
            return db.Performences.ToList();
        }

        public static Performence getPerformenceById(int id)
        {
            return db.Performences.Find(id);
        }

        public static bool deletePerformence(int id)
        {
            Performence p = getPerformenceById(id);
            if (p != null)
            {
                db.Performences.Remove(p);
                //כשעושים שינוי במסד הנתונים
                //יש לזכור לשמור שינויים
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public static bool addPerformence(Performence performence)
        {
            Performence p = getPerformenceById(performence.IdPerformence);
            //אם קיים ביצוע עם קוד כזה אין להוסיף שוב
            if (p != null)
            {
                return false;
            }
            db.Performences.Add(performence);
            db.SaveChanges();
            return true;
        }

        public static bool updatePerformence(Performence performence)
        {
            //כאשר שולפים נתון ממסד הנתונים הנתון שנשלף הוא מצביע למסד נתונים
            Performence p = getPerformenceById(performence.IdPerformence);
            if (p != null)
            {
                p.IdPerformence = performence.IdPerformence;
                p.IdTargets = performence.IdTargets;
                p.ExecutionDate = performence.ExecutionDate;
                p.CountPerformence = performence.CountPerformence;
                p.IdTargetsNavigation = performence.IdTargetsNavigation;

                db.SaveChanges();
                return true;
            }
            //אם לא קיים ביצוע אין למי לעדכן שינויים
            return false;

        }



        //פונקציה לחישוב אחוזי עמידה ביעד

        //יומי
        public static double CalculationOfStatisticsOfDay(Performence p)
        {
            Target t = TargetFunction.getTargetById(p.IdTargets);
            //מחזיר באחוזים
            return (double)(p.CountPerformence / t.SeveralTimesAday) * 100;
        }


        //מהתחלה עד היום
        public static double CalculationOfStatistics(Performence p)
        {
            //הפונקציה צריכה לעבור על הרשימה
            //ולכן צריך פונקציה שמחזירה רשימה כזו לפי יום
            //לכל יעד לסכום את מס הפעמים שהיה עליו לבצע בכל יום ואת מס הפעמים שביצע בפועל
            //מהתאריך התחלה ועד היום
            //לא צריך--------t מכיל את סך כל הימים שקיימים 
            //והפונקציה תחזיר אחוזי הצלחה בנוסחה הבאה
            //(countSeveralTimesAday/countCountPerformence)*100

            Target t = TargetFunction.getTargetById(p.IdTargets);
            //int days = (t.StartDate - DateTime.Today).TotalDays();
            DateTime d1 = t.StartDate;
            DateTime d2 = DateTime.Today;

            int countCountPerformence = 0;
            int countSeveralTimesAday = 0;


            while (d2 <= d1)
            {
                //countCountPerformence += p;
                //countSeveralTimesAday += t.SeveralTimesAday;
            }


            return (countSeveralTimesAday / countCountPerformence) * 100;
        }
    }

    public class StatisticalSuccessCalculator
    {
        public static double CalculateSuccessRate(int class1Successes, int class1Failures, int class2Successes, int class2Failures)
        {
            int class1TotalTrials = class1Successes + class1Failures;
            int class2TotalTrials = class2Successes + class2Failures;

            double class1SuccessRate = (double)class1Successes / class1TotalTrials;
            double class2SuccessRate = (double)class2Successes / class2TotalTrials;

            double statisticalSuccess = class2SuccessRate - class1SuccessRate;

            return statisticalSuccess;
        }

        public static void Main()
        {
            int class1Successes = 40;
            int class1Failures = 60;
            int class2Successes = 55;
            int class2Failures = 45;

            double successDifference = CalculateSuccessRate(class1Successes, class1Failures, class2Successes, class2Failures);
            Console.WriteLine("Statistical success between class 1 and class 2: " + successDifference);
        }

    }
}






