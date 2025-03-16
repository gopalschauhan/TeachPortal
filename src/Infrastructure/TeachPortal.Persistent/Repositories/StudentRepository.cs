namespace TeachPortal.Persistent.Repositories
{
    public class StudentRepository : GenericRepository<Student>, IStudentRepository
    {
        public StudentRepository(TeachPortalDbContext context) : base(context) { }
        public async Task<IList<Student>> GetSudentsByTeacherID(string teacherID)
        {
            return await _context.Students.Where(s => s.CreatedBy == teacherID).ToListAsync();
        }
        public Task<Dictionary<string, int>> GetSudentsCountByTeacherID()
        {
            var studentCount = _context.Students.GroupBy(s => s.CreatedBy).ToDictionary(g => g.Key, g => g.Count());

            return Task.FromResult(studentCount);
        }
    }
}
