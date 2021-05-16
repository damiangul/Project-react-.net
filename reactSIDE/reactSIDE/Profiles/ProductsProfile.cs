using AutoMapper;
using reactSIDE.Dtos;
using reactSIDE.Models;

namespace gb.Profiles
{
    public class ProductsProfile : Profile
    {
        public ProductsProfile()
        {
            CreateMap<Product,ProductReadDto>();
            CreateMap<ProductCreateDto,Product>();
            CreateMap<Product, ProductUpdateDto>();
            CreateMap<ProductUpdateDto, Product>();
        }
    }
}