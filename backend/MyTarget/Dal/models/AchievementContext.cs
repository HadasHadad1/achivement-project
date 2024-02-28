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
        => optionsBuilder.UseSqlServer("Server=CND2014BGH;Database=achievement; Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AlertDate>(entity =>
        {
            entity.HasKey(e => e.IdAlertDate).HasName("PK__AlertDat__039FE939F4F405A0");

            entity.Property(e => e.Date).HasMaxLength(20);

            entity.HasOne(d => d.IdTargetsNavigation).WithMany(p => p.AlertDates)
                .HasForeignKey(d => d.IdTargets)
                .HasConstraintName("FK__AlertDate__IdTar__5AEE82B9");
        });

        modelBuilder.Entity<AlertHour>(entity =>
        {
            entity.HasKey(e => e.IdAlertHours).HasName("PK__AlertHou__8FDF869DE4B4AB9E");

            entity.Property(e => e.Hour).HasColumnType("datetime");

            entity.HasOne(d => d.IdAlertTypesNavigation).WithMany(p => p.AlertHours)
                .HasForeignKey(d => d.IdAlertTypes)
                .HasConstraintName("FK__AlertHour__IdAle__5812160E");

            entity.HasOne(d => d.IdTargetsNavigation).WithMany(p => p.AlertHours)
                .HasForeignKey(d => d.IdTargets)
                .HasConstraintName("FK__AlertHour__IdTar__571DF1D5");
        });

        modelBuilder.Entity<AlertType>(entity =>
        {
            entity.HasKey(e => e.IdAlertTypes).HasName("PK__AlertTyp__43571A530A81121C");

            entity.Property(e => e.Description).HasMaxLength(20);
        });

        modelBuilder.Entity<Frequency>(entity =>
        {
            entity.HasKey(e => e.IdFrequency).HasName("PK__Frequenc__D5B70EFF351E02E2");

            entity.ToTable("Frequency");

            entity.Property(e => e.Note).HasMaxLength(20);

            entity.HasOne(d => d.IdTargetsNavigation).WithMany(p => p.Frequencies)
                .HasForeignKey(d => d.IdTargets)
                .HasConstraintName("FK__Frequency__IdTar__3E52440B");
        });

        modelBuilder.Entity<FrequencyType>(entity =>
        {
            entity.HasKey(e => e.IdFrequencyTypes).HasName("PK__Frequenc__9467741D9F9FC2AA");

            entity.Property(e => e.Description).HasMaxLength(20);
        });

        modelBuilder.Entity<Performence>(entity =>
        {
            entity.HasKey(e => e.IdPerformence).HasName("PK__Performe__120B077AE7E5D525");

            entity.ToTable("Performence");

            entity.Property(e => e.ExecutionDate).HasColumnType("date");

            entity.HasOne(d => d.IdTargetsNavigation).WithMany(p => p.Performences)
                .HasForeignKey(d => d.IdTargets)
                .HasConstraintName("FK__Performen__IdTar__4222D4EF");
        });

        modelBuilder.Entity<Target>(entity =>
        {
            entity.HasKey(e => e.IdTargets).HasName("PK__Targets__E387358554990877");

            entity.Property(e => e.Description).HasMaxLength(20);
            entity.Property(e => e.EndDate).HasColumnType("date");
            entity.Property(e => e.SeveralTimesAday).HasColumnName("SeveralTimesADay");
            entity.Property(e => e.StartDate).HasColumnType("date");
            entity.Property(e => e.TzUser).HasMaxLength(9);

            entity.HasOne(d => d.IdFrequencyTypesNavigation).WithMany(p => p.Targets)
                .HasForeignKey(d => d.IdFrequencyTypes)
                .HasConstraintName("FK_Targets_FrequencyTypes");

            entity.HasOne(d => d.TzUserNavigation).WithMany(p => p.Targets)
                .HasForeignKey(d => d.TzUser)
                .HasConstraintName("FK__Targets__TzUser__398D8EEE");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Tz).HasName("PK__Users__3214E4516944DEDF");

            entity.Property(e => e.Tz).HasMaxLength(9);
            entity.Property(e => e.Email).HasMaxLength(20);
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
