using AutoMapper;
using reactSIDE.Dtos;
using reactSIDE.Models;

namespace gb.Profiles
{
    public class SiteUserProfile : Profile
    {
        public SiteUserProfile()
        {
            CreateMap<SiteUser, SiteUserReadDto>();
            CreateMap<SiteUserCreateDto, SiteUser>();
        }
    }
}