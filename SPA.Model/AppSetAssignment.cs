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
    
    public partial class AppSetAssignment
    {
        public int AppID { get; set; }
        public int AppsetID { get; set; }
        public int SeqNum { get; set; }
        public bool ActivateOrDeactivate { get; set; }
        public string Comment { get; set; }
    
        public virtual Application Application { get; set; }
        public virtual AppSetGUID AppSetGUID { get; set; }
    }
}