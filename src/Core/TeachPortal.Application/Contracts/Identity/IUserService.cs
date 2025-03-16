namespace TeachPortal.Application.Contracts.Identity
{
    public interface IUserService
    {
        public Task<List<TeacherDTO>> GetTeachers(string roleName);
        public Task<TeacherDTO> GetTeacher(string userId);
        public string UserId { get; }
    }
}
