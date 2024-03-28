using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Dal.models;

public partial class AchievementContext : DbContext
{
    public AchievementContext()
    {
    }

    public AchievementContext(DbContextOptions<AchievementContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AlertDate> AlertDates { get; set; }

    public virtual DbSet<AlertHour> AlertHours { get; set; }

    public virtual DbSet<AlertType> AlertTypes { get; set; }

    public virtual DbSet<Frequency> Frequencies { get; set; }

    public virtual DbSet<FrequencyType> FrequencyTypes { get; set; }

    public virtual DbSet<Performence> Performences { get; set; }

    public virtual DbSet<Target> Targets { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.;Database=achievement;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AlertDate>(entity =>
        {
            entity.HasKey(e => e.IdAlertDate).HasName("PK__tmp_ms_x__039FE939E0C4C944");

            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.ExecutionDate).HasColumnType("datetime");

            entity.HasOne(d => d.IdTargetsNavigation).WithMany(p => p.AlertDates)
                .HasForeignKey(d => d.IdTargets)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__AlertDate__IdTar__74AE54BC");
        });

        modelBuilder.Entity<AlertHour>(entity =>
        {
            entity.HasKey(e => e.IdAlertHours).HasName("PK__AlertHou__8FDF869DA77AD687");

            entity.HasOne(d => d.IdAlertTypesNavigation).WithMany(p => p.AlertHours)
                .HasForeignKey(d => d.IdAlertTypes)
                .HasConstraintName("FK__AlertHour__IdAle__49C3F6B7");

            entity.HasOne(d => d.IdTargetsNavigation).WithMany(p => p.AlertHours)
                .HasForeignKey(d => d.IdTargets)
                .HasConstraintName("FK__AlertHour__IdTar__5FB337D6");
        });

        modelBuilder.Entity<AlertType>(entity =>
        {
            entity.HasKey(e => e.IdAlertTypes).HasName("PK__AlertTyp__43571A531FECE170");

            entity.Property(e => e.Description).HasMaxLength(20);
        });

        modelBuilder.Entity<Frequency>(entity =>
        {
            entity.HasKey(e => e.IdFrequency).HasName("PK__Frequenc__D5B70EFFF0B4747F");

            entity.ToTable("Frequency");

            entity.Property(e => e.Note).HasMaxLength(50);

            entity.HasOne(d => d.IdTargetsNavigation).WithMany(p => p.Frequencies)
                .HasForeignKey(d => d.IdTargets)
                .HasConstraintName("FK__Frequency__IdTar__5CD6CB2B");
        });

        modelBuilder.Entity<FrequencyType>(entity =>
        {
            entity.HasKey(e => e.IdFrequencyTypes).HasName("PK__Frequenc__9467741D8040EBF5");

            entity.Property(e => e.Description).HasMaxLength(20);
        });

        modelBuilder.Entity<Performence>(entity =>
        {
            entity.HasKey(e => e.IdPerformence).HasName("PK__Performe__120B077A703004B5");

            entity.ToTable("Performence");

            entity.Property(e => e.ExecutionDate).HasColumnType("date");

            entity.HasOne(d => d.IdTargetsNavigation).WithMany(p => p.Performences)
                .HasForeignKey(d => d.IdTargets)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Performen__IdTar__6383C8BA");
        });

        modelBuilder.Entity<Target>(entity =>
        {
            entity.HasKey(e => e.IdTargets).HasName("PK__tmp_ms_x__E387358564A5B034");

            entity.Property(e => e.Description).HasMaxLength(20);
            entity.Property(e => e.EndDate).HasColumnType("date");
            entity.Property(e => e.SeveralTimesAday).HasColumnName("SeveralTimesADay");
            entity.Property(e => e.StartDate).HasColumnType("date");
            entity.Property(e => e.TzUser).HasMaxLength(9);

            entity.HasOne(d => d.IdFrequencyTypesNavigation).WithMany(p => p.Targets)
                .HasForeignKey(d => d.IdFrequencyTypes)
                .HasConstraintName("FK__Targets__IdFrequ__619B8048");

            entity.HasOne(d => d.TzUserNavigation).WithMany(p => p.Targets)
                .HasForeignKey(d => d.TzUser)
                .HasConstraintName("FK__Targets__TzUser__60A75C0F");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Tz).HasName("PK__Users__3214E45180123B8D");

            entity.Property(e => e.Tz).HasMaxLength(9);
            entity.Property(e => e.Email).HasMaxLength(50);
            entity.Property(e => e.FirstName).HasMaxLength(10);
            entity.Property(e => e.Gender).HasMaxLength(8);
            entity.Property(e => e.LastName).HasMaxLength(10);
            entity.Property(e => e.Pasword).HasMaxLength(20);
            entity.Property(e => e.Phone).HasMaxLength(10);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
