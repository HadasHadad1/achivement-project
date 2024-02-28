using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class AlertHourDto
    {
        public int IdAlertHours { get; set; }

        public int? IdTargets { get; set; }

        public int? IdAlertTypes { get; set; }

        public DateTime? Hour { get; set; }


        //פונקציות המרה
        public static AlertHourDto convertFromDBtoDTO(AlertHour aH)
        {
            AlertHourDto aHDto = new AlertHourDto();

            aHDto.IdAlertHours = aH.IdAlertHours;
            aHDto.IdTargets = aH.IdTargets;
            aHDto.IdAlertTypes = aH.IdAlertTypes;
            aHDto.Hour = aH.Hour;
            return aHDto;
        }

        public static AlertHour convertFromDTOtoDB(AlertHourDto aHDto)
        {
            AlertHour aH = new AlertHour();

            aH.IdAlertHours = aHDto.IdAlertHours;
            aH.IdTargets = aHDto.IdTargets;
            aH.IdAlertTypes = aHDto.IdAlertTypes;
            aH.Hour = aHDto.Hour;
            return aH;
        }

        public static List<AlertHour> convertListFromDTOtoDB(List<AlertHourDto> laHDTO)
        {
            List<AlertHour> laH = new List<AlertHour>();
            for (int i = 0; i < laHDTO.Count; i++)
            {
                laH.Add(convertFromDTOtoDB(laHDTO[i]));
            }
            return laH;
        }
        public static List<AlertHourDto> convertListFromDBtoDTO(List<AlertHour> laH)
        {
            List<AlertHourDto> laHDTO = new List<AlertHourDto>();
            for (int i = 0; i < laH.Count; i++)
            {
                laHDTO.Add(convertFromDBtoDTO(laH[i]));
            }
            return laHDTO;
        }
    }
}
