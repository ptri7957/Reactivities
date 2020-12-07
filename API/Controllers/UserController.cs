using System.Diagnostics.Tracing;
using System.Threading.Tasks;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class UserController : BaseController
    {
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(Login.Query request)
        {
            return await Mediator.Send(request);
        }
        
        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(Register.Command request)
        {
            return await Mediator.Send(request);
        }
    }
}