using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class AlertTypeDto
    {
        public int IdAlertTypes { get; set; }

        public string? Description { get; set; }


        //פונקציות המרה
        public static AlertTypeDto convertFromDBtoDTO(AlertType aT)
        {
            AlertTypeDto aTDto = new AlertTypeDto();

            aTDto.IdAlertTypes = aT.IdAlertTypes;
            aTDto.Description = aT.Description;
            return aTDto;
        }

        public static AlertType convertFromDTOtoDB(AlertTypeDto aTDto)
        {
            AlertType aT = new AlertType();

            aT.IdAlertTypes = aTDto.IdAlertTypes;
            aT.Description = aTDto.Description;
            return aT;
        }

        public static List<AlertType> convertListFromDTOtoDB(List<AlertTypeDto> laTDTO)
        {
            List<AlertType> laT = new List<AlertType>();
            for (int i = 0; i < laTDTO.Count; i++)
            {
                laT.Add(convertFromDTOtoDB(laTDTO[i]));
            }
            return laT;
        }
        public static List<AlertTypeDto> convertListFromDBtoDTO(List<AlertType> laT)
        {
            List<AlertTypeDto> laTDTO = new List<AlertTypeDto>();
            for (int i = 0; i < laT.Count; i++)
            {
                laTDTO.Add(convertFromDBtoDTO(laT[i]));
            }
            return laTDTO;
        }
    }
}
