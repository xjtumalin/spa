using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SPA.Service.Controllers
{
    public class ValuesController : ApiController
    {
        private ParStreamStagingDBEntities db = new ParStreamStagingDBEntities();
        // GET api/values
        public IEnumerable<object> Get()
        {
            //var apps = from a in db.Sites
            //           select new { a.SiteName};
            ////var apps_v = AutoMapper.Mapper.Map<List<Application>, List<appViewModel>>(apps.ToList());

            //return apps.ToList();

            //var projs = from p in db.Projects
            //            select new { p.ProjName,p.ProjID,p.ProjDescription};
            //return projs.ToList();


            var srs = from s in db.Functions
                      select s;
            return srs.ToList();
                      
        }

        // GET api/values/5
        public List<funcViewModel> Get(int id)
        {
            var apps = from a in db.Functions
                       select a;
            var apps_v = AutoMapper.Mapper.Map<List<Function>, List<funcViewModel>>(apps.ToList());

            return apps_v;
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
