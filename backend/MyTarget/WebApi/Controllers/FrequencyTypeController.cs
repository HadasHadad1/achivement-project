using Dal.function;
using Dal.models;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FrequencyTypeController : ControllerBase
    {
        [HttpGet("GetAllFrequencyType")]
        public ActionResult<List<FrequencyType>> GetAll()
        {
            return Ok(FrequencyTypeFunction.getAllFrequencyType());
        }

        [HttpGet("GetFrequencyTypeByID/{id}")]
        public ActionResult<FrequencyType> GetById(int id)
        {
            return Ok(FrequencyTypeFunction.getFrequencyTypeById(id));
        }

        [HttpDelete("DeleteFrequencyType/{id}")]
        public ActionResult<bool> Remove(int id)
        {
            return Ok(FrequencyTypeFunction.deleteFrequencyType(id));
        }

        [HttpPost("AddFrequencyType")]
        public ActionResult<bool> Add(FrequencyTypeDto fT)
        {
            return Ok(FrequencyTypeFunction.addFrequencyType(FrequencyTypeDto.convertFromDTOtoDB(fT)));
        }

        [HttpPut("UpdateFrequencyType")]
        public ActionResult<bool> Update(FrequencyTypeDto fT)
        {
            return Ok(FrequencyTypeFunction.updateFrequencyType(FrequencyTypeDto.convertFromDTOtoDB(fT)));
        }
    }
}
