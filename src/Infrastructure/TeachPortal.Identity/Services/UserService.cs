namespace TeachPortal.Identity.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IHttpContextAccessor _contextAssessor;

        public UserService(UserManager<ApplicationUser> userManager, IHttpContextAccessor contextAssessor)
        {
            _userManager = userManager;
            _contextAssessor = contextAssessor;
        }

        public string UserId => _contextAssessor.HttpContext?.User?.FindFirstValue("uid") ?? "";

        public async Task<TeacherDTO> GetTeacher(string userId)
        {
            var teacher = await _userManager.FindByIdAsync(userId);

            return new TeacherDTO
            {
                Id = teacher.Id,
                Firstname = teacher.FirstName,
                Lastname = teacher.LastName,
                Email = teacher.Email
            };
        }

        public async Task<List<TeacherDTO>> GetTeachers(string roleName)
        {
            var teachers = await _userManager.GetUsersInRoleAsync(roleName);
            return teachers.Select(t => new TeacherDTO
            {
                Id = t.Id,
                Email = t.Email,
                Firstname = t.FirstName,
                Lastname = t.LastName
            }).ToList();
        }
    }
}
