namespace Reservee.Api.Models;

public class TableType
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int seats { get; set; }
    
    public int RestaurantId { get; set; }
    public Restaurant Restaurant { get; set; } = null!;

    public List<Table> Tables { get; set; } = [];
}