using Dal.models;

namespace Dto
{
    public class TargetDetails
    {
        public int Id { get; set; }

        public int IdTarget { get; set; }

        public string? Subject { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime? EndTime { get; set; }

        public bool Status { get; set; }

        public DateTime? ExecutionDate { get; set; }

        public UserDto? User { get; set; }

        //public int? SeveralTimesAday { get; set; }

        //public int? IdFrequencyTypes { get; set; }

        //פונקציות המרה
        public static TargetDetails convertFromDBtoDTO(AlertDate t)
        {
            //AlertHour a = t.IdTargetsNavigation.AlertHours.First();
            TargetDetails tDto = new TargetDetails();
            //if(a != null)
            //{
            //    DateTime hour = new DateTime(a.Hour);
            //}
            tDto.Id = t.IdAlertDate;
            tDto.IdTarget = t.IdTargets;
            tDto.Subject = t.IdTargetsNavigation.Description;
            tDto.StartTime = t.Date;
            tDto.EndTime = t.Date;
            tDto.Status = t.Status;
            tDto.ExecutionDate = t.ExecutionDate;
            if(t.IdTargetsNavigation.TzUserNavigation != null)
            {
                tDto.User = UserDto.convertFromDBtoDTO(t.IdTargetsNavigation.TzUserNavigation);
            }
            //tDto.SeveralTimesAday = t.IdTargetsNavigation.SeveralTimesAday;
            //tDto.IdFrequencyTypes = t.IdTargetsNavigation.IdFrequencyTypes;
            return tDto;
        }

        //public static Target convertFromDTOtoDB(TargetDto tDto)
        //{
        //    Target t = new Target();

        //    t.IdTargets = tDto.IdTargets;
        //    t.TzUser = tDto.TzUser;
        //    t.Description = tDto.Description;
        //    t.StartDate = tDto.StartDate;
        //    t.EndDate = tDto.EndDate;
        //    t.SeveralTimesAday = tDto.SeveralTimesAday;
        //    t.IdFrequencyTypes = tDto.IdFrequencyTypes;
        //    t.AlertDates = AlertDateDto.convertListFromDTOtoDB(tDto.AlertDates.ToList());
        //    return t;
        //}

        //public static List<Target> convertListFromDTOtoDB(List<TargetDto> ltDTO)
        //{
        //    List<Target> lt = new List<Target>();
        //    for (int i = 0; i < ltDTO.Count; i++)
        //    {
        //        lt.Add(convertFromDTOtoDB(ltDTO[i]));
        //    }
        //    return lt;
        //}
        public static List<TargetDetails> convertListFromDBtoDTO(List<AlertDate> lt)
        {
            List<TargetDetails> ltDTO = new List<TargetDetails>();
            for (int i = 0; i < lt.Count; i++)
            {
                ltDTO.Add(convertFromDBtoDTO(lt[i]));
            }
            return ltDTO;
        }

    }
}
