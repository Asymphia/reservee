namespace Reservee.Api.Models;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string Surname { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public string Password { get; set; } = String.Empty;
    
    public int AppearanceId { get; set; }
    public AppearancePreferences Appearance { get; set; } = null!;

    public List<Restaurant> Restaurants { get; set; } = [];
}