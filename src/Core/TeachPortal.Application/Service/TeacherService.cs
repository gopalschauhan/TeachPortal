namespace TeachPortal.Application.Service
{
    public class TeacherService : ITeacherService
    {
        private readonly IUserService _usertService;
        private readonly IStudentService _studentService;

        public TeacherService(IUserService usertService, IStudentService studentService)
        {
            _usertService = usertService;
            _studentService = studentService;
        }

        public async Task<IList<TeacherDTO>> GetTeachersWithStudentCount()
        {
            var teachers =  await _usertService.GetTeachers(ApplicationConstants.TeacherRole);
            var studentCount = await _studentService.GetCountOfStudents();

            teachers.ForEach(t =>
            {
                if (studentCount.TryGetValue(t.Id, out int value))
                {
                    t.NumberOfStudentCreated = value;
                }
                else
                    t.NumberOfStudentCreated = 0;
            });

            return teachers;
        }
    }
}
