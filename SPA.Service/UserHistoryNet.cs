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
    
    public partial class UserHistoryNet
    {
        public string UserID { get; set; }
        public System.DateTime EntryTime { get; set; }
        public string Server { get; set; }
        public string Workstation { get; set; }
        public Nullable<int> SiteID { get; set; }
        public Nullable<int> ProjID { get; set; }
        public Nullable<int> SubpID { get; set; }
        public Nullable<int> DiscID { get; set; }
        public Nullable<int> AppID { get; set; }
        public string Job { get; set; }
        public string WBS { get; set; }
        public Nullable<int> AccountingLevel { get; set; }
        public string CostCode { get; set; }
    }
}
