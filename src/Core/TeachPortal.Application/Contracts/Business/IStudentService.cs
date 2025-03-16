namespace TeachPortal.Application.Contracts.Business
{
    public interface IStudentService
    {
        public Task<PostActionResponse> CreateStudents(List<StudentDTO> students);
        public Task<List<StudentDTO>> GetStudents();
        public Task<Dictionary<string, int>> GetCountOfStudents();
    }
}
