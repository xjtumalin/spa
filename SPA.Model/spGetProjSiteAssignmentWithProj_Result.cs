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
    
    public partial class spGetProjSiteAssignmentWithProj_Result
    {
        public int Id { get; set; }
        public string Abbr { get; set; }
        public string ProjDirName { get; set; }
        public string ProjDrive { get; set; }
        public string Servername { get; set; }
        public string Sharename { get; set; }
        public bool SharedAtProjDir { get; set; }
        public Nullable<int> CmpyStdID { get; set; }
        public string CmpyStdDrive { get; set; }
        public string ProjLinkPath { get; set; }
        public string ProjGEDir { get; set; }
    }
}
