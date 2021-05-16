using System.Collections.Generic;
using AutoMapper;
using reactSIDE.Data;
using reactSIDE.Dtos;
using reactSIDE.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

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
        [Authorize]
        [HttpPost]
        public ActionResult<SiteUserReadDto> CreateSiteUser(SiteUserCreateDto siteUserCreateDto)
        {
            var userModel = _mapper.Map<SiteUser>(siteUserCreateDto);
            _repository.CreateSiteUser(userModel);
            _repository.SaveChanges();
            var siteUserReadDto = _mapper.Map<SiteUserReadDto>(userModel);

            return CreatedAtRoute(nameof(GetSiteUserById), new {Id = siteUserReadDto.Id}, siteUserReadDto);
        }
    }
}