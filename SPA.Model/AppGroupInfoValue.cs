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
    
    public partial class AppGroupInfoValue
    {
        public int AppGroupID { get; set; }
        public string AppGroupInfoName { get; set; }
        public string AppGroupInfoValue1 { get; set; }
        public string AppGroupInfoDescription { get; set; }
        public string Comment { get; set; }
    
        public virtual ApplicationGroup ApplicationGroup { get; set; }
    }
}
