using AutoMapper;
using reactSIDE.Dtos;
using reactSIDE.Models;

namespace gb.Profiles
{
    public class ItemProfile : Profile
    {
        public ItemProfile()
        {
            CreateMap<Item, ItemReadDto>();
            CreateMap<ItemCreateDto, Item>();
            CreateMap<ItemUpdateDto, Item>();
            CreateMap<Item, ItemUpdateDto>();
        }
    }
}