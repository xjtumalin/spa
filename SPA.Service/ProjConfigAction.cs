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
    
    public partial class ProjConfigAction
    {
        public int ProjID { get; set; }
        public int SeqNum { get; set; }
        public int SubSeqNum { get; set; }
        public string ExecType { get; set; }
        public bool Wait { get; set; }
        public bool HaltOnError { get; set; }
        public string CommandStr { get; set; }
        public string Arg1 { get; set; }
        public string Arg2 { get; set; }
        public string Comment { get; set; }
    
        public virtual Project Project { get; set; }
    }
}
