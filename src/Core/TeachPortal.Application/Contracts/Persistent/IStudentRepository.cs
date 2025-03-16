namespace TeachPortal.Application.Contracts.Persistent
{
    public interface IStudentRepository : IGenericRepository<Student>
    {
        public Task<IList<Student>> GetSudentsByTeacherID(string teacherID);
        public Task<Dictionary<string, int>> GetSudentsCountByTeacherID();
    }
}
