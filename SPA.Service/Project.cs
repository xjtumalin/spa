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
    
    public partial class Project
    {
        public Project()
        {
            this.AppAssignments3 = new HashSet<AppAssignments3>();
            this.GroupAssignments3 = new HashSet<GroupAssignments3>();
            this.JobWbsAssignments1 = new HashSet<JobWbsAssignments1>();
            this.ProjConfigActions = new HashSet<ProjConfigAction>();
            this.ProjectInfoValues = new HashSet<ProjectInfoValue>();
            this.ProjSiteAssignments = new HashSet<ProjSiteAssignment>();
            this.ProjSysParameters = new HashSet<ProjSysParameter>();
            this.Applications = new HashSet<Application>();
            this.Disciplines = new HashSet<Discipline>();
            this.ApplicationGroups = new HashSet<ApplicationGroup>();
            this.Subprojects = new HashSet<Subproject>();
        }
    
        public int ProjID { get; set; }
        public string ProjAbbr { get; set; }
        public string ProjName { get; set; }
        public string ProjDescription { get; set; }
        public Nullable<int> GBUID { get; set; }
        public string Comment { get; set; }
    
        public virtual ICollection<AppAssignments3> AppAssignments3 { get; set; }
        public virtual GBU GBU { get; set; }
        public virtual ICollection<GroupAssignments3> GroupAssignments3 { get; set; }
        public virtual ICollection<JobWbsAssignments1> JobWbsAssignments1 { get; set; }
        public virtual ICollection<ProjConfigAction> ProjConfigActions { get; set; }
        public virtual ICollection<ProjectInfoValue> ProjectInfoValues { get; set; }
        public virtual ICollection<ProjSiteAssignment> ProjSiteAssignments { get; set; }
        public virtual ICollection<ProjSysParameter> ProjSysParameters { get; set; }
        public virtual ICollection<Application> Applications { get; set; }
        public virtual ICollection<Discipline> Disciplines { get; set; }
        public virtual ICollection<ApplicationGroup> ApplicationGroups { get; set; }
        public virtual ICollection<Subproject> Subprojects { get; set; }
    }
}
