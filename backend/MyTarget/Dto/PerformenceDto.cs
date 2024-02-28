using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class PerformenceDto
    {
        public int IdPerformence { get; set; }

        public int IdTargets { get; set; }

        public DateTime? ExecutionDate { get; set; }

        public int? CountPerformence { get; set; }


        //פונקציות המרה
        public static PerformenceDto convertFromDBtoDTO(Performence p)
        {
            PerformenceDto pDto = new PerformenceDto();

            pDto.IdPerformence = p.IdPerformence;
            pDto.IdTargets = p.IdTargets;
            pDto.ExecutionDate = p.ExecutionDate;
            pDto.CountPerformence = p.CountPerformence;
            return pDto;
        }

        public static Performence convertFromDTOtoDB(PerformenceDto pDto)
        {
            Performence p = new Performence();

            p.IdPerformence = pDto.IdPerformence;
            p.IdTargets = pDto.IdTargets;
            p.ExecutionDate = pDto.ExecutionDate;
            p.CountPerformence = pDto.CountPerformence;
            return p;
        }

        public static List<Performence> convertListFromDTOtoDB(List<PerformenceDto> lpDTO)
        {
            List<Performence> lp = new List<Performence>();
            for (int i = 0; i < lpDTO.Count; i++)
            {
                lp.Add(convertFromDTOtoDB(lpDTO[i]));
            }
            return lp;
        }
        public static List<PerformenceDto> convertListFromDBtoDTO(List<Performence> lp)
        {
            List<PerformenceDto> lpDTO = new List<PerformenceDto>();
            for (int i = 0; i < lp.Count; i++)
            {
                lpDTO.Add(convertFromDBtoDTO(lp[i]));
            }
            return lpDTO;
        }

    }
}
