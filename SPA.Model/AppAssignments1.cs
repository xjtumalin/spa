//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SPA.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class AppAssignments1
    {
        public int AppID { get; set; }
        public int SubpID { get; set; }
        public int DiscID { get; set; }
    
        public virtual Application Application { get; set; }
        public virtual Discipline Discipline { get; set; }
        public virtual Subproject Subproject { get; set; }
    }
}
