using DAL.Configuration;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class ExamContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=Daniela_ominlamning;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ArticleConfiguration());
        }

#nullable disable
        public DbSet<Article> Articles { get; set; }
        public DbSet<Author> Authors { get; set; }
#nullable restore
    }
}
