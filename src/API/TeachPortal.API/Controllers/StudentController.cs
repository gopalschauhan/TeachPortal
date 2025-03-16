namespace TeachPortal.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;
        
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet("getstudents")]
        [Authorize]
        public async Task<ActionResult<IList<StudentDTO>>> GetStudents()
        {
            return Ok(await _studentService.GetStudents());
        }

        [HttpPost("createstudents")]
        [Authorize]
        public async Task<ActionResult<PostActionResponse>> CreateStudents(List<StudentDTO> request)
        {
            return Ok(await _studentService.CreateStudents(request));
        }

    }
}
