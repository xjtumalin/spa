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
    
    public partial class spGetApplicationsBySubpID_Result
    {
        public int SubpID { get; set; }
        public int AppID { get; set; }
        public string AppAbbr { get; set; }
        public string AppName { get; set; }
        public string AppDescription { get; set; }
        public string AppInvocation { get; set; }
        public string AltAppInvocation { get; set; }
        public string AppArgs { get; set; }
        public string AppToMonitor { get; set; }
        public string AppWorkingDir { get; set; }
        public string AppVersion { get; set; }
        public int AppType { get; set; }
        public int AccountingLevel { get; set; }
        public Nullable<int> SoftwarePublisherID { get; set; }
        public string Comment { get; set; }
    }
}
