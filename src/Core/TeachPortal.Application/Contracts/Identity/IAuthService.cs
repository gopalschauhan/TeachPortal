namespace TeachPortal.Application.Contracts.Identity
{
    public interface IAuthService
    {
        public Task<AuthResponse> Login(AuthRequest request);
        public Task<RegistrationResponse> Register(RegistrationRequest request);
    }
}
