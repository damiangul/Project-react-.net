using System.ComponentModel.DataAnnotations;

namespace reactSIDE.Dtos
{
    public class SiteUserCreateDto
    {

        public string UserPassword { get; set; }
        public string UserLogin { get; set; }
        public string UserRole { get; set; }

    }
}