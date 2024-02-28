using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Dal.function
{
    public class UserFunction
    {
        public const string MessegesFilePath = @"D:\strauss&porush\מעודכן 16.07.19\ServerSide\BLL\BLL\MessegesXML.xml";
        static AchievementContext db = new AchievementContext();
        public static List<User> getAllUser()
        {
            //ניגש למשתנה המחלקה
            //ונפעיל עליו שאילתא
            //list ולכן  יש לבצע המרה ל dbSet הרשימה היא מסוג
            return db.Users.ToList();
        }

        public static User getUserById(string id)
        {
            return db.Users.Find(id);
        }

      
        public static bool deleteUser(string id)
        {
            User u = getUserById(id);
            if (u != null)
            {
                db.Users.Remove(u);
                //כשעושים שינוי במסד הנתונים
                //יש לזכור לשמור שינויים
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public static bool addUser(User user)
        {
            string u = user.Tz;

            if (u == null)
            {
                return false;
            }

            db.Users.Add(user);
            db.SaveChanges();
            return true;
        }


        public static bool updateUser(User user)
        {
            //כאשר שולפים נתון ממסד הנתונים הנתון שנשלף הוא מצביע למסד נתונים
            User u = getUserById(user.Tz);

            if (u != null)
            {
                u.Tz = user.Tz;
                u.FirstName = user.FirstName;
                u.LastName = user.LastName;
                u.Email = user.Email;
                u.Pasword = user.Pasword;
                u.Phone = user.Phone;
                u.Gender = user.Gender;

                db.SaveChanges();
                return true;
            }


            //אם לא קיים משתמש אין למי לעדכן שינויים
            return false;

        }

        public static User SignIn(string Email)
        {
            var user = db.Users.FirstOrDefault(u => u.Email == Email);
            return user;
        }

        public static void SendEmail(string contactAddress, string subject, string body)
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("achievement.hy@gmail.com");
            mailMessage.To.Add(contactAddress);
            mailMessage.Subject = subject;
            mailMessage.Body = body;
            SmtpClient smtpClient = new SmtpClient();
            smtpClient.Host = "smtp.gmail.com";
            smtpClient.Port = 587;
            smtpClient.UseDefaultCredentials = false;
            smtpClient.Credentials = new NetworkCredential("achievement.hy@gmail.com", "yzsg mfgq gxns nbkj\r\n");
            smtpClient.EnableSsl = true;
            smtpClient.Send(mailMessage);
        }
        //לשימוש שחזור סיסמא
        public static bool SendSimpleEmail(string email, string subject, string body)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com", 25);
                mail.From = new MailAddress("achievement.hy@gmail.com", "site to kearn");
                // mail.From = new MailAddress("hodayah2001@gmail.com", "site to kearn");
                mail.To.Add(email);
                mail.Subject = subject;
                mail.Body = body;
                mail.IsBodyHtml = true;
                mail.BodyEncoding = System.Text.Encoding.UTF8;
                SmtpServer.Credentials = new System.Net.NetworkCredential("achievement.hy@gmail.com", "yzsg mfgq gxns nbkj\r\n");
                // SmtpServer.Credentials = new System.Net.NetworkCredential("hodayah2001@gmail.com", "hodayahadad.0548517222");
                SmtpServer.EnableSsl = true;
                SmtpServer.Send(mail);
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }


        }
    }
}

