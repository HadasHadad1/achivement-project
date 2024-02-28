using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class FrequencyDto
    {
        public int IdFrequency { get; set; }

        public int? IdTargets { get; set; }

        public string? Note { get; set; }


        //פונקציות המרה
        public static FrequencyDto convertFromDBtoDTO(Frequency f)
        {
            FrequencyDto fDto = new FrequencyDto();

            fDto.IdFrequency = f.IdFrequency;
            fDto.IdTargets = f.IdTargets;
            fDto.Note = f.Note;
            return fDto;
        }

        public static Frequency convertFromDTOtoDB(FrequencyDto fDto)
        {
            Frequency f = new Frequency();

            f.IdFrequency = fDto.IdFrequency;
            f.IdTargets = fDto.IdTargets;
            f.Note = fDto.Note;
            return f;
        }

        public static List<Frequency> convertListFromDTOtoDB(List<FrequencyDto> lfDTO)
        {
            List<Frequency> lf = new List<Frequency>();
            for (int i = 0; i < lfDTO.Count; i++)
            {
                lf.Add(convertFromDTOtoDB(lfDTO[i]));
            }
            return lf;
        }
        public static List<FrequencyDto> convertListFromDBtoDTO(List<Frequency> lf)
        {
            List<FrequencyDto> lfDTO = new List<FrequencyDto>();
            for (int i = 0; i < lf.Count; i++)
            {
                lfDTO.Add(convertFromDBtoDTO(lf[i]));
            }
            return lfDTO;
        }
    }
}
