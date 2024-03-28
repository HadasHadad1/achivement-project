using System;
using System.Collections.Generic;

namespace Dal.models;

public partial class User
{
    public string Tz { get; set; } = null!;

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string? Pasword { get; set; }

    public string? Phone { get; set; }

    public string? Gender { get; set; }

    public virtual ICollection<Target> Targets { get; set; } = new List<Target>();
}
