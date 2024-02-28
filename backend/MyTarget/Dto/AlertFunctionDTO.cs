using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class AlertFunctionDTO
    {
        public int FullDate { get; set; }
        public int Hour { get; set; }
        public int Username { get; set; }
        public string TargetName { get; set; }

       
        public static void ApiRequest(string Url, string contect) //פונקציה שמתחברת לשרת חיצוני
        {
            try
            {

                var request = new HttpRequestMessage /*הגדרת אוביקט שנישלח לסרבר המרוחק*/
                {
                    Method = HttpMethod.Get,   //סוג של קריאת השרת
                    RequestUri = new Uri(Url),  //URL שנישלח
                    Content = new StringContent(contect, Encoding.UTF8, MediaTypeNames.Application.Json /* or "application/json" in older versions */),
                    // הנתונים שנישלחים
                };

                //var client = new RestClient(new RestClientOptions { MaxTimeout = -1 });
                ////client.Timeout = -1;
                //var request = new RestRequest(Method.GET);
                // RestResponse response = client.Execute(request);
            }
            catch (Exception)
            {

                throw;
            }
        }

    }


    //           :בשביל שיעבוד צריך
    //             1. : נכון שעובד בדפדפןURL להביא
    //             URL  להתחבר לימות עם שם משתמש וסיסמא - והניתוב יהיה ה
    //             2.לנסות להריץ ולבדוק לפי הקישור ששלחחתי

}


