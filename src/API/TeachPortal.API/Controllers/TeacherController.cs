namespace TeachPortal.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherService _teacherService;

        public TeacherController(ITeacherService teacherService)
        {
            _teacherService = teacherService;
        }

        [HttpGet("getteachers")]
        [Authorize]
        public async Task<ActionResult<IList<TeacherDTO>>> GetTeachers()
        {
            return Ok(await _teacherService.GetTeachersWithStudentCount());
        }
    }
}
