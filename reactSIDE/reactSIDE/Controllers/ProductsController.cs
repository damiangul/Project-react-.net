using System.Collections.Generic;
using AutoMapper;
using reactSIDE.Data;
using reactSIDE.Dtos;
using reactSIDE.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;

namespace reactSIDE.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IGBRepo _repository;
        private readonly IMapper _mapper;

        public ProductsController(IGBRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //private readonly MockGBRepo _repository = new MockGBRepo();
        //Get api/products
        [HttpGet]
        public ActionResult<IEnumerable<ProductReadDto>> GetAllProducts()
        {
            var productItems= _repository.getAllProducts();

            return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(productItems));
        }

        //Get api/products/5
        [HttpGet("{id}", Name="GetProductById")]
        public ActionResult <ProductReadDto> GetProductById(int id)
        {
             var productItems= _repository.GetProductById(id);
             if(productItems!=null)
             {
                 return Ok(_mapper.Map<ProductReadDto>(productItems));
             }
             return NotFound();
        }

        //Post api/products
        [Authorize]
        [HttpPost]
        public ActionResult<ProductReadDto> CreateProduct(ProductCreateDto productCreateDto)
        {
            var productModel = _mapper.Map<Product>(productCreateDto);
            _repository.CreateProduct(productModel);
            _repository.SaveChanges();
            var productReadDto = _mapper.Map<ProductReadDto>(productModel);

            return CreatedAtRoute(nameof(GetProductById), new {Id = productReadDto.Id}, productReadDto);
            //return Ok(productReadDto);
        }

        //PATCH api/product/5
        [Authorize]
        [HttpPatch("{id}")]
        public ActionResult PartialUpdateProduct(int id, JsonPatchDocument<ProductUpdateDto> patchDoc)
        {
            var productModelFromRepository = _repository.GetProductById(id);
            if (productModelFromRepository == null)
            {
                return NotFound();
            }
            var itemToPatch = _mapper.Map<ProductUpdateDto>(productModelFromRepository);
            patchDoc.ApplyTo(itemToPatch, ModelState);
            if (!TryValidateModel(itemToPatch))
            {
                return ValidationProblem(ModelState);
            }
            _mapper.Map(itemToPatch, productModelFromRepository);
            _repository.UpdateProduct(productModelFromRepository);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}