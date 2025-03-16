namespace TeachPortal.Application.Contracts.Business
{
    public interface ITeacherService
    {
        public Task<IList<TeacherDTO>> GetTeachersWithStudentCount();
    }
}
