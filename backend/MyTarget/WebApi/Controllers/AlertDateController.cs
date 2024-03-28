using Dal.function;
using Dal.models;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertDateController : ControllerBase
    {
        [HttpGet("GetAllAlertDate")]
        public ActionResult<List<AlertDate>> GetAll()
        {
            return Ok(AlertDateFunction.getAllAlertDate());
        }

        [HttpGet("GetAlertDateByID/{id}")]
        public ActionResult<AlertDate> GetById(int id)
        {
            return Ok(AlertDateFunction.getAlertDateById(id));
        }
        [HttpGet("GetAlertDateByDateOfNow/{dateNow}")]
        public ActionResult<List<TargetDetails>> GetAlertDateByDateOfNow(DateTime dateNow)
        {
            return Ok(TargetDetails.convertListFromDBtoDTO(AlertDateFunction.getAlertDateByDateOfNow(dateNow)));
        }

        [HttpGet("GetAlertDateByUserID/{userId}")]
        public ActionResult<List<TargetDetails>> GetAlertDateByUserID(string userId)
        {
            return Ok(TargetDetails.convertListFromDBtoDTO(AlertDateFunction.getAlertDatesByUserId(userId)));
        }

        [HttpDelete("DeleteAlertDate/{id}")]
        public ActionResult<bool> Remove(int id)
        {
            return Ok(AlertDateFunction.deleteAlertDate(id));
        }

        [HttpPost("AddAlertDate")]
        public ActionResult<bool> Add(AlertDateDto aD)
        {
            return Ok(AlertDateFunction.addAlertDate(AlertDateDto.convertFromDTOtoDB(aD)));
        }

        [HttpPut("UpdateAlertDate")]
        public ActionResult<bool> Update(AlertDateDto aD)
        {
            return Ok(AlertDateFunction.updateAlertDate(AlertDateDto.convertFromDTOtoDB(aD)));
        }
    }
}
