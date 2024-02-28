using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class FrequencyTypeDto
    {
        public int IdFrequencyTypes { get; set; }

        public string? Description { get; set; }


        //פונקציות המרה
        public static FrequencyTypeDto convertFromDBtoDTO(FrequencyType fT)
        {
            FrequencyTypeDto fTDto = new FrequencyTypeDto();

            fTDto.IdFrequencyTypes = fT.IdFrequencyTypes;
            fTDto.Description = fT.Description;
            return fTDto;
        }

        public static FrequencyType convertFromDTOtoDB(FrequencyTypeDto fTDto)
        {
            FrequencyType fT = new FrequencyType();

            fT.IdFrequencyTypes = fTDto.IdFrequencyTypes;
            fT.Description = fTDto.Description;
            return fT;
        }

        public static List<FrequencyType> convertListFromDTOtoDB(List<FrequencyTypeDto> lfTDTO)
        {
            List<FrequencyType> lfT = new List<FrequencyType>();
            for (int i = 0; i < lfTDTO.Count; i++)
            {
                lfT.Add(convertFromDTOtoDB(lfTDTO[i]));
            }
            return lfT;
        }
        public static List<FrequencyTypeDto> convertListFromDBtoDTO(List<FrequencyType> lfT)
        {
            List<FrequencyTypeDto> lfTDTO = new List<FrequencyTypeDto>();
            for (int i = 0; i < lfT.Count; i++)
            {
                lfTDTO.Add(convertFromDBtoDTO(lfT[i]));
            }
            return lfTDTO;
        }
    }
}
