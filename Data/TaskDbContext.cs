using Microsoft.EntityFrameworkCore;
using TaskTrackerApi.Models;

namespace TaskTrackerApi.Data;

public class TaskDbContext : DbContext
{
    public DbSet<TaskItem> Tasks { get; set; } = null!;
    
    public TaskDbContext(DbContextOptions<TaskDbContext> options) 
        : base(options) { }
}
