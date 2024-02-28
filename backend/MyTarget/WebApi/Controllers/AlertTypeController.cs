using Dal.function;
using Dal.models;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertTypeController : ControllerBase
    {
        [HttpGet("GetAllAlertType")]
        public ActionResult<List<AlertType>> GetAll()
        {
            return Ok(AlertTypeFunction.getAllAlertType());
        }

        [HttpGet("GetAlertTypeByID/{id}")]
        public ActionResult<AlertType> GetById(int id)
        {
            return Ok(AlertTypeFunction.getAlertTypeById(id));
        }

        [HttpDelete("DeleteAlertType/{id}")]
        public ActionResult<bool> Remove(int id)
        {
            return Ok(AlertTypeFunction.deleteAlertType(id));
        }

        [HttpPost("AddAlertType")]
        public ActionResult<bool> Add(AlertType at)
        {
            return Ok(AlertTypeFunction.addAlertType(at));
        }

        [HttpPut("UpdateAlertType")]
        public ActionResult<bool> Update(AlertType at)
        {
            return Ok(AlertTypeFunction.updateAlertType(at));
        }
        
        
        
        

        
    }
}
