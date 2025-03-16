namespace TeachPortal.Application.Contracts.Persistent
{
    public interface IGenericRepository<T> where T : class
    {
        Task<IReadOnlyList<T>> GetAsync();
        Task<T> GetByIdAsync(int id);
        Task CreateAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
        Task CreateRangeAsync(IEnumerable<T> entities);
    }
}
