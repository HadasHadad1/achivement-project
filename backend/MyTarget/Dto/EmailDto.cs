﻿using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class EmailDto
    {
        public string EmailTo { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }
}
