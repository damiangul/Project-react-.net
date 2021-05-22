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
    [Route("api/users")]
    [ApiController]
    public class SiteUserController : ControllerBase
    {
        private readonly IGBRepo _repository;
        private readonly IMapper _mapper;

        public SiteUserController(IGBRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }


        //Get api/users
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<SiteUserReadDto>> getAllSiteUser()
        {
            var userItems= _repository.getAllSiteUser();

            return Ok(_mapper.Map<IEnumerable<SiteUserReadDto>>(userItems));
        }

        //Get api/users/5
        [Authorize]
        [HttpGet("{id}", Name= "GetSiteUserById")]
        public ActionResult <SiteUserReadDto> GetSiteUserById(int id)
        {
             var userItems = _repository.GetSiteUserById(id);
             if(userItems != null)
             {
                 return Ok(_mapper.Map<SiteUserReadDto>(userItems));
             }
             return NotFound();
        }

        //Post api/users
      
        [HttpPost]
        public ActionResult<SiteUserReadDto> CreateSiteUser(SiteUserCreateDto siteUserCreateDto)
        {
            var userModel = _mapper.Map<SiteUser>(siteUserCreateDto);
            _repository.CreateSiteUser(userModel);
            _repository.SaveChanges();
            var siteUserReadDto = _mapper.Map<SiteUserReadDto>(userModel);

            return CreatedAtRoute(nameof(GetSiteUserById), new {Id = siteUserReadDto.Id}, siteUserReadDto);
        }

        //PATCH api/users/5
        [Authorize]
        [HttpPatch("{id}")]
        public ActionResult PartialUpdateSiteUser(int id, JsonPatchDocument<SiteUserUpdateDto> patchDoc)
        {
            var siteUserModelFromRepository = _repository.GetSiteUserById(id);
            if (siteUserModelFromRepository == null)
            {
                return NotFound();
            }
            var itemToPatch = _mapper.Map<SiteUserUpdateDto>(siteUserModelFromRepository);
            patchDoc.ApplyTo(itemToPatch, ModelState);
            if (!TryValidateModel(itemToPatch))
            {
                return ValidationProblem(ModelState);
            }
            _mapper.Map(itemToPatch, siteUserModelFromRepository);
            _repository.UpdateUser(siteUserModelFromRepository);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}