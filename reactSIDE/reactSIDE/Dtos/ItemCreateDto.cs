using System.ComponentModel.DataAnnotations;

namespace reactSIDE.Dtos
{
    public class ItemCreateDto
    {
        [Required]
        public int ProductID { get; set; }
        [Required]
        public int UserID { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public int Type { get; set; }
        [Required]
        public string AddTime { get; set; }

    }
}