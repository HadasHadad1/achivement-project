using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Dto
{
    public class AlertDateDto
    {
        public int IdAlertDate { get; set; }

        public int? IdTargets { get; set; }

        public DateTime ? Date { get; set; }


        //פונקציות המרה
        public static AlertDateDto convertFromDBtoDTO(AlertDate aD)
        {
            AlertDateDto aDDto = new AlertDateDto();

            aDDto.IdAlertDate = aD.IdAlertDate;
            aDDto.IdTargets = aD.IdTargets;
            aDDto.Date = aD.Date;
            return aDDto;
        }

        public static AlertDate convertFromDTOtoDB(AlertDateDto aDDto)
        {
            AlertDate aD = new AlertDate();

            aD.IdAlertDate = aDDto.IdAlertDate;
            aD.IdTargets = aDDto.IdTargets;
            aD.Date = aDDto.Date;
            return aD;
        }

        public static List<AlertDate> convertListFromDTOtoDB(List<AlertDateDto> laDDTO)
        {
            List<AlertDate> laD = new List<AlertDate>();
            for (int i = 0; i < laDDTO.Count; i++)
            {
                laD.Add(convertFromDTOtoDB(laDDTO[i]));
            }
            return laD;
        }
        public static List<AlertDateDto> convertListFromDBtoDTO(List<AlertDate> laD)
        {
            List<AlertDateDto> laDDTO = new List<AlertDateDto>();
            for (int i = 0; i < laD.Count; i++)
            {
                laDDTO.Add(convertFromDBtoDTO(laD[i]));
            }
            return laDDTO;
        }
    }
}
