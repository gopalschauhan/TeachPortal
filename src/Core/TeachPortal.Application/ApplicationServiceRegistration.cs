namespace TeachPortal.Application
{
    public static class ApplicationServiceRegistration
    {
        public static IServiceCollection RegisterApplicationService(this IServiceCollection services)
        {
            services.AddScoped<IStudentService, StudentService>();
            services.AddScoped<ITeacherService, TeacherService>();
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            return services;
        }
    }
}
