using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;

namespace SPA.Service
{
    public static class MappingConfig
    {
        public static void RegisterMaps()
        {
            AutoMapper.Mapper.Initialize(config=>{
                config.CreateMap<Application,appViewModel>();
                config.CreateMap<Function, funcViewModel>();
            });
        }
    }
}