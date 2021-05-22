using System.Collections.Generic;
using AutoMapper;
using reactSIDE.Data;
using reactSIDE.Dtos;
using reactSIDE.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Authorization;

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


        //GET api/items
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<ItemReadDto>> getAllItems()
        {
            var items = _repository.getAllItems();

            return Ok(_mapper.Map<IEnumerable<ItemReadDto>>(items));
        }

        //GET api/items/5
        [Authorize]
        [HttpGet("{id}", Name = "getItemById")]
        public ActionResult<ItemReadDto> getItemById(int id)
        {
            var items = _repository.getItemById(id);
            if (items != null)
            {
                return Ok(_mapper.Map<ItemReadDto>(items));
            }
            return NotFound();
        }

        //POST api/items
        [Authorize]
        [HttpPost]
        public ActionResult<ItemReadDto> CreateItem(ItemCreateDto itemCreateDto)
        {
            var itemsModel = _mapper.Map<Item>(itemCreateDto);
            _repository.CreateItem(itemsModel);
            _repository.SaveChanges();
            var itemReadDto = _mapper.Map<ItemReadDto>(itemsModel);

            return CreatedAtRoute(nameof(getItemById), new { Id = itemReadDto.Id }, itemReadDto);
        }

        //PUT api/items/5
        [Authorize]
        [HttpPut("{id}")]
        public ActionResult UpdateItem(int id,ItemUpdateDto itemUpdateDto)
        {
            var itemModelFromRepository = _repository.getItemById(id);
            if(itemModelFromRepository==null)
            {
                return NotFound();
            }
            _mapper.Map(itemUpdateDto, itemModelFromRepository);
            _repository.UpdateItem(itemModelFromRepository);
            _repository.SaveChanges();

            return NoContent();
        }

        //PATCH api/items/5
        [Authorize]
        [HttpPatch("{id}")]
        public ActionResult PartialUpdateItem(int id,JsonPatchDocument<ItemUpdateDto> patchDoc)
        {
            var itemModelFromRepository = _repository.getItemById(id);
            if (itemModelFromRepository == null)
            {
                return NotFound();
            }
            var itemToPatch = _mapper.Map<ItemUpdateDto>(itemModelFromRepository);
            patchDoc.ApplyTo(itemToPatch, ModelState);
            if(!TryValidateModel(itemToPatch))
            {
                return ValidationProblem(ModelState);
            }
            _mapper.Map(itemToPatch, itemModelFromRepository);
            _repository.UpdateItem(itemModelFromRepository);
            _repository.SaveChanges();

            return NoContent();
        }

        //DELETE api/items/5
        [Authorize]
        [HttpDelete("{id}")]
        public ActionResult DeleteItem(int id)
        {
            var itemModelFromRepository = _repository.getItemById(id);
            if (itemModelFromRepository == null)
            {
                return NotFound();
            }
            _repository.DeleteItem(itemModelFromRepository);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}