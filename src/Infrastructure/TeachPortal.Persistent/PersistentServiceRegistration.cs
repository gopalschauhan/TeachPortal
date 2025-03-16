namespace TeachPortal.Persistent
{
    public static class PersistentServiceRegistration
    {
        public static IServiceCollection RegisterPersistentService(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<TeachPortalDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("TeachPortalDB"));
            });

            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IStudentRepository, StudentRepository>();

            return services;
        }
    }
}
