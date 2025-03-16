namespace TeachPortal.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authenticationService;

        public AuthController(IAuthService authenticationService)
        {
            this._authenticationService = authenticationService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthResponse>> Login(AuthRequest request)
        {
            return Ok(await _authenticationService.Login(request));
        }

        [HttpPost("signup")]
        public async Task<ActionResult<RegistrationResponse>> SignUp(RegistrationRequest request)
        {
            return Ok(await _authenticationService.Register(request));
        }
    }
}
