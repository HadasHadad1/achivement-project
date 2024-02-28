using System;
using System.Collections.Generic;
using System.Net.Mail;

namespace Dal.models;

public partial class User
{
    public string Tz { get; set; } = null!;

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string? Pasword { get; set; }

    public string? Phone { get; set; }

    public string? Gender { get; set; }

    public virtual ICollection<Target> Targets { get; set; } = new List<Target>();

    public static void ScheduleEmails(string emailAddress)
    {


        Console.WriteLine("Enter the dates to send emails (separated by commas):");
        string datesInput = Console.ReadLine();
        string[] dates = datesInput.Split(',');

        foreach (string date in dates)
        {
            DateTime scheduledDate;
            if (DateTime.TryParse(date.Trim(), out scheduledDate))
            {
                SendEmail(emailAddress, scheduledDate);
                Console.WriteLine("Email sent to {0} on {1}", emailAddress, scheduledDate.ToString("yyyy-MM-dd"));
            }
            else
            {
                Console.WriteLine("Invalid date format: {0}", date);
            }
        }
    }

    private static void SendEmail(string emailAddress, DateTime scheduledDate)
    {
        MailMessage mail = new MailMessage();
        SmtpClient client = new SmtpClient();

        mail.From = new MailAddress("your-email@example.com");
        mail.To.Add(new MailAddress(emailAddress));
        mail.Subject = "Scheduled Email";
        mail.Body = "This is a scheduled email sent on " + scheduledDate.ToString("yyyy-MM-dd");

        client.Host = "smtp.example.com"; // Replace with your SMTP server address
        client.Port = 587; // Replace with the appropriate port number
        client.UseDefaultCredentials = false;
        client.Credentials = new System.Net.NetworkCredential("your-username", "your-password");
        client.EnableSsl = true;

        client.Send(mail);
    }

    public static void Main()
    {
        string emailAddress = "vcb";
        ScheduleEmails(emailAddress);
    }
}
