﻿namespace TeachPortal.Application.Models.BusinessDTO
{
    public class TeacherDTO
    {
        public string Id { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Firstname { get; set; } = string.Empty;
        public string Lastname { get; set; } = string.Empty;
        public int NumberOfStudentCreated { get; set; } = 0;
    }
}
