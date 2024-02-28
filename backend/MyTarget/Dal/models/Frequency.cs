using System;
using System.Collections.Generic;

namespace Dal.models;

public partial class Frequency
{
    public int IdFrequency { get; set; }

    public int? IdTargets { get; set; }

    public string? Note { get; set; }

    public virtual Target? IdTargetsNavigation { get; set; }
}
