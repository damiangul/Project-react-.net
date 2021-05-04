using System.ComponentModel.DataAnnotations;

namespace reactSIDE.Dtos
{
    public class SiteUserCreateDto
    {

        public string UserPassword { get; set; }
        public string UserLogin { get; set; }
        public string UserRole { get; set; }
        public string Imie { get; set; }

        public string Nazwisko { get; set; }

        public string adresPart1 { get; set; }

    }
}