namespace TeachPortal.Application.Service
{
    public class StudentService : IStudentService
    {
        private readonly IMapper _mapper;
        private readonly IStudentRepository _studentRepository;
        private readonly IUserService _userService;

        public StudentService(IMapper mapper, IStudentRepository studentRepository, IUserService userService)
        {
            _mapper = mapper;
            _studentRepository = studentRepository;
            _userService = userService;
        }

        public async Task<PostActionResponse> CreateStudents(List<StudentDTO> students)
        {
            var studentList = _mapper.Map<IList<StudentDTO>, IList<Student>>(students);

            await _studentRepository.CreateRangeAsync(studentList);

            return new PostActionResponse { Success = true, Message = "Record created Successfully." };
        }

        public async Task<List<StudentDTO>> GetStudents()
        {
            var students = await _studentRepository.GetSudentsByTeacherID(_userService.UserId);

            return _mapper.Map<IList<Student>, IList<StudentDTO>>(students).ToList(); 
        }

        public async Task<Dictionary<string, int>> GetCountOfStudents()
        {
            var students = await _studentRepository.GetSudentsCountByTeacherID();
            return students;
        }
    }
}
