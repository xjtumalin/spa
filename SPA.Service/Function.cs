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
    
    public partial class Function
    {
        public Function()
        {
            this.RolesInFunctions = new HashSet<RolesInFunction>();
        }
    
        public int FunctionID { get; set; }
        public string Description { get; set; }
    
        public virtual ICollection<RolesInFunction> RolesInFunctions { get; set; }
    }
}
