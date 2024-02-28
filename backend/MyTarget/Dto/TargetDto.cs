using Dal.models;

namespace Dto
{
    public class TargetDto
    {
        public int IdTargets { get; set; }

        public string? TzUser { get; set; }

        public string? Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int? SeveralTimesAday { get; set; }

        public int? IdFrequencyTypes { get; set; }
        //מערך של:
        //או ימים בשבוע
        //או ימים בחודש
        //או תאריכים בשנה
        //או ריק
        public List<string> listD { get; set; }

        //פונקציות המרה
        public static TargetDto convertFromDBtoDTO(Target t)
        {
            TargetDto tDto = new TargetDto();

            tDto.IdTargets = t.IdTargets;
            tDto.TzUser = t.TzUser;
            tDto.Description = t.Description;
            tDto.StartDate = t.StartDate;
            tDto.EndDate = t.EndDate;
            tDto.SeveralTimesAday = t.SeveralTimesAday;
            tDto.IdFrequencyTypes = t.IdFrequencyTypes;
            return tDto;
        }

        public static Target convertFromDTOtoDB(TargetDto tDto)
        {
            Target t = new Target();

            t.IdTargets = tDto.IdTargets;
            t.TzUser = tDto.TzUser;
            t.Description = tDto.Description;
            t.StartDate = tDto.StartDate;
            t.EndDate = tDto.EndDate;
            t.SeveralTimesAday = tDto.SeveralTimesAday;
            t.IdFrequencyTypes = tDto.IdFrequencyTypes;

            return t;
        }

        public static List<Target> convertListFromDTOtoDB(List<TargetDto> ltDTO)
        {
            List<Target> lt = new List<Target>();
            for (int i = 0; i < ltDTO.Count; i++)
            {
                lt.Add(convertFromDTOtoDB(ltDTO[i]));
            }
            return lt;
        }
        public static List<TargetDto> convertListFromDBtoDTO(List<Target> lt)
        {
            List<TargetDto> ltDTO = new List<TargetDto>();
            for (int i = 0; i < lt.Count; i++)
            {
                ltDTO.Add(convertFromDBtoDTO(lt[i]));
            }
            return ltDTO;
        }

    }
}
