using System;
using System.Collections.Generic;

namespace Dal.models;

public partial class AlertDate
{
    public int IdAlertDate { get; set; }

    public int? IdTargets { get; set; }

    public DateTime? Date { get; set; }

    public virtual Target? IdTargetsNavigation { get; set; }
}
