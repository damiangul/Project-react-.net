using System.Collections.Generic;
using AutoMapper;
using reactSIDE.Data;
using reactSIDE.Dtos;
using reactSIDE.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;

namespace reactSIDE.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IGBRepo _repository;
        private readonly IMapper _mapper;

        public LoginController(IGBRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return NoContent();
        }

        //Post api/users
        [HttpPost]
        public async Task<IActionResult> LoginUser(SiteUser siteUser)
        {
            var userItems = _repository.LoginUser(siteUser);
            if (userItems != null)
            {
                var claims = new List<Claim>();
                claims.Add(new Claim("id", userItems.Id.ToString()));
                
                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                var claimsPrincipal = new ClaimsPrincipal(claimsIdentity);
                await HttpContext.SignInAsync(claimsPrincipal);
                return Ok(_mapper.Map<SiteUserReadDto>(userItems));
            }
            return NotFound();
        }
    }
}