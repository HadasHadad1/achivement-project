using Dal.models;

namespace Dto
{
    public class Statistic
    {
        public string label { get; set; }

        public int y { get; set; }

        //פונקציות המרה
        public static Statistic convertFromDBtoDTO(Target t)
        {
            Statistic tDto = new Statistic();
            tDto.label = t.Description;
            if(t.Performences.Count>= 0)
            {
                tDto.y = t.Performences.ToArray()[0].CountPerformence;
            }
            return tDto;
        }

       
        public static List<Statistic> convertListFromDBtoDTO(List<Target> lt)
        {
            List<Statistic> ltDTO = new List<Statistic>();
            for (int i = 0; i < lt.Count; i++)
            {
                ltDTO.Add(convertFromDBtoDTO(lt[i]));
            }
            return ltDTO;
        }

    }
}