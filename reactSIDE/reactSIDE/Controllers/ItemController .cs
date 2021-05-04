using System.Collections.Generic;
using AutoMapper;
using reactSIDE.Data;
using reactSIDE.Dtos;
using reactSIDE.Models;
using Microsoft.AspNetCore.Mvc;

namespace reactSIDE.Controllers
{
    [Route("api/items")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IGBRepo _repository;
        private readonly IMapper _mapper;

        public ItemController(IGBRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }


        //Get api/items
        [HttpGet]
        public ActionResult<IEnumerable<ItemReadDto>> getAllItems()
        {
            var items= _repository.getAllItems();

            return Ok(_mapper.Map<IEnumerable<ItemReadDto>>(items));
        }

        //Get api/items/5
        [HttpGet("{id}", Name= "getItemById")]
        public ActionResult <ItemReadDto> getItemById(int id)
        {
             var items = _repository.getItemById(id);
             if(items != null)
             {
                 return Ok(_mapper.Map<ItemReadDto>(items));
             }
             return NotFound();
        }

        //Post api/items
        [HttpPost]
        public ActionResult<ItemReadDto> CreateItem(ItemCreateDto itemCreateDto)
        {
            var itemsModel = _mapper.Map<Item>(itemCreateDto);
            _repository.CreateItem(itemsModel);
            _repository.SaveChanges();
            var itemReadDto = _mapper.Map<ItemReadDto>(itemsModel);

            return CreatedAtRoute(nameof(getItemById), new {Id = itemReadDto.Id}, itemReadDto);
        }
    }
}