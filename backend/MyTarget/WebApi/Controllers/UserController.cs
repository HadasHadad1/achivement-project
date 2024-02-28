using Dal.function;
using Dal.models;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet("GetAllUser")]
        public ActionResult<List<User>> GetAll()
        {
            return Ok(UserFunction.getAllUser());
        }

        [HttpGet("GetUserByID/{id}")]
        public ActionResult<User> GetById(string id)
        {
            return Ok(UserFunction.getUserById(id));
        }

        [HttpDelete("DeleteUser/{id}")]
        public ActionResult<bool> Remove(string id)
        {
            return Ok(UserFunction.deleteUser(id));
        }

        [HttpPost("AddUser")]
        public ActionResult<bool> Add(UserDto u)
        {
            return Ok(UserFunction.addUser(UserDto.convertFromDTOtoDB(u)));
        }

        [HttpPut("UpdateUser")]
        public ActionResult<bool> Update(UserDto u)
        {
            return Ok(UserFunction.updateUser(UserDto.convertFromDTOtoDB(u)));
        }
        
        
        // פונקציה שבודקת אם קים משתמש במערכת עי מייל וסיסמא 
        [HttpGet("SignIn/{Email}")]
        public ActionResult<User> SignIn(string Email)
        {
            return Ok(UserFunction.SignIn(Email));
        }

        //שליחת מייל
        [HttpGet("sendMail/{adressMail}/{subject}/{body}")]
        public void sendMail(string adressMail, string subject, string body)
        {
            EmailFunction.SendEmail(adressMail, subject, body);
        }
        
    }
}
