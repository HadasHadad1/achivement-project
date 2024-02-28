using System;
using System.Collections.Generic;

namespace Dal.models;

public partial class AlertHour
{
    public int IdAlertHours { get; set; }

    public int? IdTargets { get; set; }

    public int? IdAlertTypes { get; set; }

    public DateTime? Hour { get; set; }

    public virtual AlertType? IdAlertTypesNavigation { get; set; }

    public virtual Target? IdTargetsNavigation { get; set; }
}
