namespace Reservee.Api.Models;

public class RestaurantTag
{
    public int Id { get; set; }
    public string Tag { get; set; } = String.Empty;
    
    public int RestaurantId { get; set; }
    public Restaurant Restaurant { get; set; } = null!;
}