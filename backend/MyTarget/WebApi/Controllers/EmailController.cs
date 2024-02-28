using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dal.function;
using Dal.models;
using Dto;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        /*     ImailBLL _mailBLL;
     public MailController(ImailBLL imail)
     {
         _mailBLL = imail;
     }*/

        [HttpGet]
        [Route("sendMail/{adressMail}/{subject}/{body}")]
        public void sendMail(string adressMail, string subject, string body)
        {
            EmailFunction.SendEmail(adressMail,subject, body);
        }
        //שליחת מייל
        [HttpGet]
        [Route("SendMail")]
        public ActionResult<bool> SendMail(string emailTo, string subject, string body)
        {
            return Ok(EmailFunction.SendSimpleEmail(emailTo, subject, body));
        }

    }
}
