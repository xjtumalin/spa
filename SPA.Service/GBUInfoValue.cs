//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SPA.Service
{
    using System;
    using System.Collections.Generic;
    
    public partial class GBUInfoValue
    {
        public int GBUID { get; set; }
        public string GBUInfoName { get; set; }
        public string GBUInfoValue1 { get; set; }
        public string GBUInfoDescription { get; set; }
        public string Comment { get; set; }
    
        public virtual GBU GBU { get; set; }
    }
}
