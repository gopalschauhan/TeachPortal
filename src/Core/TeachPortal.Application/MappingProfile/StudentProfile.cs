namespace TeachPortal.Application.MappingProfile
{
    public class StudentProfile : Profile
    {
        public StudentProfile() 
        {
            CreateMap<StudentDTO, Student>()
                .ForMember(dto => dto.FirstName, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dto => dto.LastName, opt => opt.MapFrom(src => src.LastName))
                .ForMember(dto => dto.Email, opt => opt.MapFrom(src => src.Email))
                .ReverseMap();
        }
    }
}
