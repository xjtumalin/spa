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
    
    public partial class AppSetGUID
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AppSetGUID()
        {
            this.AppSetAssignments = new HashSet<AppSetAssignment>();
        }
    
        public int AppsetID { get; set; }
        public string GUID { get; set; }
        public string AppsetName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AppSetAssignment> AppSetAssignments { get; set; }
    }
}
