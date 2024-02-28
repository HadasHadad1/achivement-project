using System;
using System.Collections.Generic;

namespace Dal.models;

public partial class Target
{
    public int IdTargets { get; set; }

    public string? TzUser { get; set; }

    public string? Description { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public int? SeveralTimesAday { get; set; }

    public int? IdFrequencyTypes { get; set; }

    public virtual ICollection<AlertDate> AlertDates { get; set; } = new List<AlertDate>();

    public virtual ICollection<AlertHour> AlertHours { get; set; } = new List<AlertHour>();

    public virtual ICollection<Frequency> Frequencies { get; set; } = new List<Frequency>();

    public virtual FrequencyType? IdFrequencyTypesNavigation { get; set; }

    public virtual ICollection<Performence> Performences { get; set; } = new List<Performence>();

    public virtual User? TzUserNavigation { get; set; }
}
