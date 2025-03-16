namespace TeachPortal.Persistent.DBContext
{
    public class TeachPortalDbContext : DbContext
    {
        private readonly IUserService _userService;
        public TeachPortalDbContext(DbContextOptions<TeachPortalDbContext> options, IUserService userService) : base(options)
        {
            _userService = userService;
        }

        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(TeachPortalDbContext).Assembly);
            base.OnModelCreating(modelBuilder);
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            foreach (var entry in base.ChangeTracker.Entries<BaseEntity>()
                .Where(q => q.State == EntityState.Added || q.State == EntityState.Modified))
            {
                entry.Entity.DateModified = DateTime.Now;
                entry.Entity.ModifiedBy = _userService.UserId;
                if (entry.State == EntityState.Added)
                {
                    entry.Entity.DateCreated = DateTime.Now;
                    entry.Entity.CreatedBy = _userService.UserId;
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
