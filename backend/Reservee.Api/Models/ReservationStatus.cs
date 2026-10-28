namespace Reservee.Api.Models;

public class ReservationStatus
{
    public int Id { get; set; }
    public string Status { get; set; } = String.Empty;

    public List<Reservation> Reservations { get; set; } = [];
}