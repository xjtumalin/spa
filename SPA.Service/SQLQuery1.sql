
insert into temporg(site) 
select SiteName from sites 
order by SiteName

--select * from temptable


insert into temporg(site,project) 
select distinct a.SiteName,p.ProjName from Sites a,Projects p,ProjSiteAssignments ps
where a.SiteID=ps.SiteID and p.ProjID=ps.ProjID order by sitename,projname


insert into temporg(site,project,subproj) 
select s.SiteName,p.ProjName,sp.SubpName  from Sites s, Projects p, Subprojects sp, SubprojectAssignments spa, ProjSiteAssignments psa
where spa.ProjID=p.ProjID and spa.SubpID=sp.SubpID and spa.ProjID=psa.ProjID and psa.SiteID=s.SiteID
order by sitename,projname,subpname


insert into temporg(site,project,subproj,disc) 
select distinct s.SiteName ,p.ProjName,sp.SubpName ,d.DiscName 
from Sites s, Projects p, Subprojects sp, SubprojectAssignments spa, ProjSiteAssignments psa,Disciplines d, DiscAssignments1 da
where spa.ProjID=p.ProjID and spa.SubpID=sp.SubpID and spa.ProjID=psa.ProjID and psa.SiteID=s.SiteID and da.DiscID=d.DiscID and da.SubpID=spa.SubpID

