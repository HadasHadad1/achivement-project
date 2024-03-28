using System;
using System.Collections.Generic;

namespace Dal.models;

public partial class Performence
{
    public int IdPerformence { get; set; }

    public int IdTargets { get; set; }

    public DateTime? ExecutionDate { get; set; }

    public int CountPerformence { get; set; }

    public virtual Target IdTargetsNavigation { get; set; } = null!;
}
