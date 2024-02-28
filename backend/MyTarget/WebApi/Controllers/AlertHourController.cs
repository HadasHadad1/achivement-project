using Dal.function;
using Dal.models;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertHourController : ControllerBase
    {
        [HttpGet("GetAllAlertHour")]
   
        public ActionResult<List<AlertHour>> GetAll()
        {
            return Ok(AlertHourFunction.getAllAlertHour());
        }

        [HttpGet("GetAlertHourByID/{id}")]
        public ActionResult<AlertHour> GetById(int id)
        {
            return Ok(AlertHourFunction.getAlertHourById(id));
        }

        [HttpDelete("DeleteAlertHour/{id}")]
        public ActionResult<bool> Remove(int id)
        {
            return Ok(AlertHourFunction.deleteAlertHour(id));
        }

        [HttpPost("AddAlertHour")]
        public ActionResult<bool> Add(AlertHourDto ah)
        {
            return Ok(AlertHourFunction.addAlertHour(AlertHourDto.convertFromDTOtoDB(ah)));
        }

        [HttpPut("UpdateAlertHour")]
        public ActionResult<bool> Update(AlertHourDto ah)
        {
            return Ok(AlertHourFunction.updateAlertHour(AlertHourDto.convertFromDTOtoDB(ah)));
        }
    }
}
