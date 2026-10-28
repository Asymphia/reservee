namespace Reservee.Api.Models;

public class Reservation
{
    public int Id { get; set; }
    public string GuestName { get; set; } = String.Empty;
    public string GuestSurname { get; set; } = String.Empty;
    public string Phone { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public DateOnly Date { get; set; }
    public TimeOnly Time { get; set; }
    public int GuestsNumber { get; set; }
    
    public int RestaurantId { get; set; }
    public Restaurant Restaurant { get; set; } = null!;
    
    public int TableId { get; set; }
    public Table Table { get; set; } = null!;
    
    public int ReservationStatusId { get; set; }
    public ReservationStatus ReservationStatus { get; set; } = null!;
}