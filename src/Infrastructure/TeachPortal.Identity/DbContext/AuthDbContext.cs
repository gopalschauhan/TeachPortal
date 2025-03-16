namespace TeachPortal.Identity.DbContext
{
    public class AuthDbContext : IdentityDbContext<ApplicationUser>
    {
        public AuthDbContext(DbContextOptions<AuthDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<IdentityRole>().HasData
                (
                    new IdentityRole { Id = Guid.NewGuid().ToString(), Name = "Teacher", NormalizedName = "Teacher" },
                    new IdentityRole { Id = Guid.NewGuid().ToString(), Name = "Student", NormalizedName = "Student" }
                );
            builder.ApplyConfigurationsFromAssembly(typeof(AuthDbContext).Assembly);
            builder.HasDefaultSchema("identity");
        }
    }
}
