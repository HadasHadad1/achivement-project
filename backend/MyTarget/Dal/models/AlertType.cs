using System;
using System.Collections.Generic;

namespace Dal.models;

public partial class AlertType
{
    public int IdAlertTypes { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<AlertHour> AlertHours { get; set; } = new List<AlertHour>();
}
