namespace Reservee.Api.Models;

public class Table
{
    public int Id { get; set; }
    
    public int TableTypeId { get; set; }
    public TableType TableType { get; set; } = null!;
}