using Dal.function;
using Dal.models;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerformenceController : ControllerBase
    {
        [HttpGet("GetAllPerformence")]
        public ActionResult<List<Performence>> GetAll()
        {
            return Ok(PerformenceFunction.getAllPerformence());
        }

        [HttpGet("GetPerformenceByID/{id}")]
        public ActionResult<Performence> GetById(int id)
        {
            return Ok(PerformenceFunction.getPerformenceById(id));
        }

        [HttpDelete("DeletePerformence/{id}")]
        public ActionResult<bool> Remove(int id)
        {
            return Ok(PerformenceFunction.deletePerformence(id));
        }

        [HttpPost("AddPerformence")]
        public ActionResult<bool> Add(PerformenceDto p)
        {
            return Ok(PerformenceFunction.addPerformence(PerformenceDto.convertFromDTOtoDB(p)));
        }

        [HttpPut("UpdatePerformence")]
        public ActionResult<bool> Update(PerformenceDto p)
        {
            return Ok(PerformenceFunction.updatePerformence(PerformenceDto.convertFromDTOtoDB(p)));
        }
       
    }
}
