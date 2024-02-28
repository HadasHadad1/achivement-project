using System.Net;
using System.Net.Mail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace Dal.function
{
    public class EmailFunction
    {
        public const string MessegesFilePath = @"D:\strauss&porush\מעודכן 16.07.19\ServerSide\BLL\BLL\MessegesXML.xml";
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
