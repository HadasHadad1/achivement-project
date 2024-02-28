using System;
using System.Collections.Generic;

namespace Dal.models;

public partial class FrequencyType
{
    public int IdFrequencyTypes { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<Target> Targets { get; set; } = new List<Target>();
}
