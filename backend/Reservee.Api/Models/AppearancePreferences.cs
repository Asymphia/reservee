namespace Reservee.Api.Models;

public class AppearancePreferences
{
    public int Id { get; set; }
    public string Type { get; set; } = String.Empty;
    
    public List<User> Users { get; set; } = [];
}