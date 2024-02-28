using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class UserDto
    {
        public string Tz { get; set; } = null!;

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Email { get; set; }

        public string? Pasword { get; set; }

        public string? Phone { get; set; }

        public string? Gender { get; set; }


        //פונקציות המרה
        public static UserDto convertFromDBtoDTO(User u)
        {
            UserDto uDto = new UserDto();

            uDto.Tz = u.Tz;
            uDto.FirstName = u.FirstName;
            uDto.LastName = u.LastName;
            uDto.Email = u.Email;
            uDto.Pasword = u.Pasword;
            uDto.Phone = u.Phone;
            uDto.Gender = u.Gender;
            return uDto;
        }

        public static User convertFromDTOtoDB(UserDto uDto)
        {
            User u = new User();

            u.Tz = uDto.Tz;
            u.FirstName = uDto.FirstName;
            u.LastName = uDto.LastName;
            u.Email = uDto.Email;
            u.Pasword = uDto.Pasword;
            u.Phone = uDto.Phone;
            u.Gender = uDto.Gender;
            return u;
        }

        public static List<User> convertListFromDTOtoDB(List<UserDto> luDTO)
        {
            List<User> lu = new List<User>();
            for (int i = 0; i < luDTO.Count; i++)
            {
                lu.Add(convertFromDTOtoDB(luDTO[i]));
            }
            return lu;
        }
        public static List<UserDto> convertListFromDBtoDTO(List<User> lu)
        {
            List<UserDto> luDTO = new List<UserDto>();
            for (int i = 0; i < lu.Count; i++)
            {
                luDTO.Add(convertFromDBtoDTO(lu[i]));
            }
            return luDTO;
        }

    }
}
