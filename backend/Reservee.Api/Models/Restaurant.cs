namespace Reservee.Api.Models;

public class Restaurant
{
    public int Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string City { get; set; } = String.Empty;
    public string Address { get; set; } = String.Empty;
    public string Phone { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public string OpeningHours { get; set; } = String.Empty;
    public string ClosingHours { get; set; } = String.Empty;
    public int GuestsHourlyLimit { get; set; }
    public int TurnoverBuffer { get; set; }
    
    public int UserId { get; set; }
    public User User { get; set; } = null!;
    
    public List<RestaurantTag> Tags { get; set; } = [];
    public List<MenuCategory> MenuCategories { get; set; } = [];
    public List<ReservationLengthRule> LengthRules { get; set; } = [];
    public List<TableType> TableTypes { get; set; } = [];
    public List<Reservation> Reservations { get; set; } = [];
}