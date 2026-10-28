namespace Reservee.Api.Models;

public class ReservationLengthRule
{
    public int Id { get; set; }
    public int MinGuests { get; set; }
    public int Duration { get; set; }
    
    public int RestaurantId { get; set; }
    public Restaurant Restaurant { get; set; } = null!;
}