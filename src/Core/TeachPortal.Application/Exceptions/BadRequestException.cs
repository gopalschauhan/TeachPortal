namespace TeachPortal.Application.Exceptions
{
    public class BadRequestException : Exception
    {
        public IDictionary<string, string[]>? ValidationErrors { get; set; }
        public BadRequestException()
        {
        }

        public BadRequestException(string? message) : base(message)
        {
        }
    }
}
