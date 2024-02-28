using Dal.function;
using Dal.models;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FrequencyController : ControllerBase
    {
        [HttpGet("GetAllFrequency")]
        public ActionResult<List<Frequency>> GetAll()
        {
            return Ok(FrequencyFunction.getAllFrequency());
        }

        [HttpGet("GetFrequencyByID/{id}")]
        public ActionResult<Frequency> GetById(int id)
        {
            return Ok(FrequencyFunction.getFrequencyById(id));
        }

        [HttpDelete("DeleteFrequency{id}")]
        public ActionResult<bool> Remove(int id)
        {
            return Ok(FrequencyFunction.deleteFrequency(id));
        }

        [HttpPost("AddFrequency")]
        public ActionResult<bool> Add(FrequencyDto f)
        {
            return Ok(FrequencyFunction.addFrequency(FrequencyDto.convertFromDTOtoDB(f)));
        }

        [HttpPut("UpdateFrequency")]
        public ActionResult<bool> Update(FrequencyDto f)
        {
            return Ok(FrequencyFunction.updateFrequency(FrequencyDto.convertFromDTOtoDB(f)));
        }

    
    }
}
