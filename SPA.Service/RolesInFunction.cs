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
    
    public partial class RolesInFunction
    {
        public int FunctionID { get; set; }
        public int RoleID { get; set; }
        public Nullable<int> EntityID { get; set; }
        public string EntityType { get; set; }
    
        public virtual Function Function { get; set; }
        public virtual Role Role { get; set; }
    }
}
