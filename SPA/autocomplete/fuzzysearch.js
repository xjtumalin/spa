var app = angular.module('app', ['smart-table', 'ngSanitize', 'MassAutoComplete']);

app.controller('rootCtrl', function ($scope, $sce, $q) {

    $scope.tablevisible = true;
    var repos = [{ "AppID": 1, "AppName": "A Test Utility (cmd)", "AppAbbr": "TESTUTILITY" }, { "AppID": 2, "AppName": "Calculator", "AppAbbr": "CALC" }, { "AppID": 3, "AppName": "DeltaCad 6.0", "AppAbbr": "DELTACAD6" }, { "AppID": 4, "AppName": "Dectivate All Appsets", "AppAbbr": "DEACTIVATEALLAPPS" }, { "AppID": 5, "AppName": "Prerequisite - Activate all appsets", "AppAbbr": "PREREQACTIVATE" }, { "AppID": 7, "AppName": "Prerequisite - Install all prereqs", "AppAbbr": "PREREQINSTALL" }, { "AppID": 8, "AppName": "Prerequisite - Install all VC prereqs", "AppAbbr": "PREREQINSTALLVC" }, { "AppID": 9, "AppName": "Prerequisite - Test error condition", "AppAbbr": "PREREQERROR" }, { "AppID": 10, "AppName": "Initialize XP Solution for ES Users", "AppAbbr": "XPSOLUTION_INIT" }, { "AppID": 11, "AppName": "Initialize Win7-32 Solution for DMCS Users", "AppAbbr": "WIN7-32SOLUTION_INITDMCS" }, { "AppID": 12, "AppName": "Run XP Solution", "AppAbbr": "XPSOLUTION_RUN" }, { "AppID": 13, "AppName": "Prerequisite - Show all prereq abbreviations and names", "AppAbbr": "PREREQSHOWALL" }, { "AppID": 14, "AppName": "ConfigAction & ECOM Function Test", "AppAbbr": "FUNCTEST" }, { "AppID": 15, "AppName": "Doconfig Test", "AppAbbr": "DOCONFIGTEST" }, { "AppID": 16, "AppName": "AutoCAD 2011 (SP2) with Raster Design", "AppAbbr": "ACAD2011" }, { "AppID": 17, "AppName": "AutoCAD MEP 2011 (SP1)", "AppAbbr": "ACADMEP2011" }, { "AppID": 18, "AppName": "Copy log files to the server", "AppAbbr": "COPYLOGS" }, { "AppID": 19, "AppName": "Access ftp site ", "AppAbbr": "ACCESSINSTFTP" }, { "AppID": 20, "AppName": "Autodesk Revit Architecture 2011 (SP2)", "AppAbbr": "ACADREVITARCH_11" }, { "AppID": 22, "AppName": "DeltaCad 6.0 - Offline", "AppAbbr": "DELTACAD60OFF" }, { "AppID": 23, "AppName": "Autodesk Navisworks Manage 2011", "AppAbbr": "ACADNAVISMAN2011" }, { "AppID": 24, "AppName": "AutoCAD Civil 3D 2011 (SP2)", "AppAbbr": "ACADCIVIL3D2011" }, { "AppID": 25, "AppName": "Autodesk Revit MEP 2011 (SP2)", "AppAbbr": "ACADREVITMEP_11" }, { "AppID": 26, "AppName": "Autodesk Revit Structure 2011 (SP2)", "AppAbbr": "ACADREVITSTRUC_11" }, { "AppID": 27, "AppName": "Install FARO-LS", "AppAbbr": "INSTALLFARO" }, { "AppID": 28, "AppName": "ConfigAction Function Test (PREA)", "AppAbbr": "PREAFUNCTEST" }, { "AppID": 29, "AppName": "ConfigAction Function Test (OOA)", "AppAbbr": "OOAFUNCTEST" }, { "AppID": 31, "AppName": "CADWorx Pro 2010 for AutoCAD 2011 - IP", "AppAbbr": "CADWORX10AC11_IP" }, { "AppID": 32, "AppName": "CADWorx Pro 2010 for AutoCAD 2011 - Plant", "AppAbbr": "CADWORX10_PLNT" }, { "AppID": 33, "AppName": "CADWorx Pro 2010  for AutoCAD 2011 - P-ID", "AppAbbr": "CADWORX10AC11_PID" }, { "AppID": 34, "AppName": "CADWorx Pro 2010 for AutoCAD 2011 -  Equipment", "AppAbbr": "CADWORX10AC11_EQUIP" }, { "AppID": 35, "AppName": "Special Processing Test  - PREA", "AppAbbr": "PREAHTATEST" }, { "AppID": 36, "AppName": "MicroStation V8i_SS2 08.11.07.470 Install", "AppAbbr": "USTNV8ISS2_INSTALL" }, { "AppID": 37, "AppName": "MicroStation V8i_SS3 08.11.09.459 Install", "AppAbbr": "USTNV8ISS3_INSTALL" }, { "AppID": 38, "AppName": "XP Solution User Guide for ES Users", "AppAbbr": "XPSOLUTIONPDF" }, { "AppID": 39, "AppName": "Win7-32 Solution User Guide for DMCS Users", "AppAbbr": "WIN732SOLUTIONPDF2" }, { "AppID": 40, "AppName": ".Offline Application Reference Guide", "AppAbbr": "OFFLINEPDF" }, { "AppID": 41, "AppName": "HydroCAD 9.1", "AppAbbr": "HYDROCAD9" }, { "AppID": 42, "AppName": "CSiBridge 15.1.1", "AppAbbr": "CSIBRIDGE15" }, { "AppID": 43, "AppName": "ETABS 2013 13.2.2", "AppAbbr": "ETABS13" }, { "AppID": 44, "AppName": "SAP 2000 14.2.5", "AppAbbr": "SAP2000V14" }, { "AppID": 46, "AppName": "SAFE 12.3.1", "AppAbbr": "SAFE12" }, { "AppID": 47, "AppName": "Clear RunOnceInfo for current user", "AppAbbr": "CLEARRUNONCEU" }, { "AppID": 48, "AppName": "Clear RunOnceInfo for current workstation", "AppAbbr": "CLEARRUNONCEW" }, { "AppID": 49, "AppName": "Clear RunOnceInfo for current workstation and user", "AppAbbr": "CLEARRUNONCEUW" }, { "AppID": 50, "AppName": "spSlab 3.60", "AppAbbr": "SPSLAB3" }, { "AppID": 51, "AppName": "spMats 7.52", "AppAbbr": "SPMATS7" }, { "AppID": 52, "AppName": "spColumn 4.81", "AppAbbr": "SPCOLUMN4" }, { "AppID": 53, "AppName": "Mathcad 15.0.M010", "AppAbbr": "MATHCAD15" }, { "AppID": 54, "AppName": "GTStrudl 31", "AppAbbr": "GTSTRUDL31" }, { "AppID": 56, "AppName": "SmartPlant License Manager 11.00.17.00", "AppAbbr": "SPLM11" }, { "AppID": 58, "AppName": "SmartPlant Review 08.00.00.65 HF3", "AppAbbr": "SPR8" }, { "AppID": 59, "AppName": "SmartPlant Review 08.00.00.65 HF3 - with Modules", "AppAbbr": "SPR8_MODS" }, { "AppID": 60, "AppName": "AutoCAD Map 3D 2011 (SP2)", "AppAbbr": "ACADMAP3D2011" }, { "AppID": 61, "AppName": "Bentley View V8i_SS3 08.11.09.459", "AppAbbr": "VIEWV8ISSX" }, { "AppID": 62, "AppName": "MicroStation V8i_SS3 08.11.09.459", "AppAbbr": "USTNV8ISSX" }, { "AppID": 63, "AppName": "ProjectWise V8i_SS4 Explorer 08.11.11.590", "AppAbbr": "PWV8ISS4" }, { "AppID": 64, "AppName": "ProjectWise V8i_SS4 with all Applications", "AppAbbr": "PWV8ISS4-ALL" }, { "AppID": 65, "AppName": "ProjectWise V8i_SS4 with AutoCAD 2011", "AppAbbr": "PWV8ISS4-ACAD11" }, { "AppID": 67, "AppName": "ProjectWise V8i_SS4 with AutoCAD Civil 3D 2011", "AppAbbr": "PWV8ISS4-CIVIL3D11" }, { "AppID": 71, "AppName": "ProjectWise V8i_SS4 with AutoCAD Map 3D 2011", "AppAbbr": "PWV8ISS4-MAP11" }, { "AppID": 72, "AppName": "ProjectWise V8i_SS4 with AutoCAD MEP 2011", "AppAbbr": "PWV8ISS4-MEP11" }, { "AppID": 73, "AppName": "ProjectWise V8i_SS4 with MicroStation V8i_SS3", "AppAbbr": "PWV8ISS4-MSSSX" }, { "AppID": 74, "AppName": "ProjectWise V8i_SS4 with Revit Architecture 2011", "AppAbbr": "PWV8ISS4-RVARCH11" }, { "AppID": 75, "AppName": "ProjectWise V8i_SS4 with Revit MEP 2011", "AppAbbr": "PWV8ISS4-RVMEP11" }, { "AppID": 76, "AppName": "ProjectWise V8i_SS4 with Revit Structure 2011", "AppAbbr": "PWV8ISS4-RVSTRUCT11" }, { "AppID": 77, "AppName": "Bentley GEOPAK Suite V8i_SS2 08.11.07.619", "AppAbbr": "USTNGEOPAKV8ISSX" }, { "AppID": 78, "AppName": "InRoads Suite V8i_SS2 08.11.07.615 with MS V8i_SS3", "AppAbbr": "INROADSV8ISSX_MSV8ISSX" }, { "AppID": 79, "AppName": "ProjectWise V8i_SS4 with Bentley GEOPAK V8i_SS2", "AppAbbr": "PWV8ISS4-GEOPAKSSX" }, { "AppID": 80, "AppName": "ProjectWise V8i_SS4 with InRoads V8i_SS2", "AppAbbr": "PWV8ISS4-INROADSSSX" }, { "AppID": 81, "AppName": "Reset ProjectWise Integrations and Apps", "AppAbbr": "PWRESET" }, { "AppID": 82, "AppName": "Registry Modification Test", "AppAbbr": "REGMODTST" }, { "AppID": 83, "AppName": "Richmond, KY G67CP22 HPRGS 5.4.6 (PGS)", "AppAbbr": "HPRGSG67CP22" }, { "AppID": 84, "AppName": "Richmond, KY G69CP22 HPRGS 5.4.6 (PGS)", "AppAbbr": "HPRGSG69CP22" }, { "AppID": 85, "AppName": "Richmond, KY  F7ZQLM1 HPRGS 5.4.6 (PGS)", "AppAbbr": "HPRGSF7ZQLM1" }, { "AppID": 86, "AppName": "Richmond, KY G64DP22 HPRGS 5.4.6 (PGS)", "AppAbbr": "HPRGSG64DP22" }, { "AppID": 87, "AppName": "Richmond, KY J9DWJ02 HPRGS 5.4.6 - (PGS)", "AppAbbr": "HPRGSJ9DWJ02" }, { "AppID": 88, "AppName": "Richmond, KY J9DVJ02 HPRGS 5.4.6 - (PGS)", "AppAbbr": "HPRGSJ9DVJ02" }, { "AppID": 93, "AppName": "STAAD.Pro V8i_SS5 20.07.10.65", "AppAbbr": "STAADPROV8I" }, { "AppID": 94, "AppName": "Bentley IEG License Service 02.00.18.03", "AppAbbr": "BENTLEYIEG" }, { "AppID": 95, "AppName": "Bentley FlowMaster V8i_SS1 08.11.01.03 (9-3-2010)", "AppAbbr": "FLOWMASTER8" }, { "AppID": 96, "AppName": "Autodesk NavisWorks 2011 Freedom (SP1)", "AppAbbr": "ACADNAVISFREE2011" }, { "AppID": 97, "AppName": "Autodesk NavisWorks 2011 Simulate (SP1)", "AppAbbr": "ACADNAVISSIM2011" }, { "AppID": 98, "AppName": "Autodesk 3ds Max Design 2012 (SP2)", "AppAbbr": "ADSK3DSMAX12" }, { "AppID": 99, "AppName": "AGi32 14.6.13", "AppAbbr": "AGI32_14" }, { "AppID": 100, "AppName": "Bentley Descartes V8i_SS4 08.11.09.432", "AppAbbr": "USTNDESCARTESV8ISSX" }, { "AppID": 101, "AppName": "ProjectWise V8i_SS4 with Bentley Descartes V8i_SS4", "AppAbbr": "PWV8ISS4-DESCARTESSSX" }, { "AppID": 102, "AppName": "Bentley Navigator V8i_SS5 08.11.09.536", "AppAbbr": "NAVIGATORV8ISSX" }, { "AppID": 103, "AppName": "Autodesk DWG TrueView 2015", "AppAbbr": "ACADDWGVIEW2015" }, { "AppID": 104, "AppName": "ETAP 12.5.0", "AppAbbr": "ETAP12" }, { "AppID": 105, "AppName": "LitePro 2.029", "AppAbbr": "LITEPRO2029" }, { "AppID": 106, "AppName": "RISA-3D 13.0.0", "AppAbbr": "RISA3D13" }, { "AppID": 107, "AppName": "RISAFloor 9.0.0", "AppAbbr": "RISAFLOOR9" }, { "AppID": 108, "AppName": "RISAFoundation 7.0.0", "AppAbbr": "RISAFOUND7" }, { "AppID": 109, "AppName": "SKM PowerTools 7.0.2.6", "AppAbbr": "PWRTOOLS7" }, { "AppID": 110, "AppName": "I-Configure 2.9.0", "AppAbbr": "ICONFIG290" }, { "AppID": 111, "AppName": "SolidWorks 2013 (SP3.0)", "AppAbbr": "SOLIDWORKS2013" }, { "AppID": 112, "AppName": "Bentley Rebar V8i_SS2 08.11.07.57", "AppAbbr": "USTNREBARV8ISSX" }, { "AppID": 113, "AppName": "AutoCAD Civil 3D 2012 (SP4)", "AppAbbr": "ACADCIVIL3D2012" }, { "AppID": 115, "AppName": "RM Bridge Advanced V8i 08.11.18.01", "AppAbbr": "RMBRIDGEADVV8I" }];
    $scope.showTable = function () {
        $scope.rowCollection = repos;
    };
    

    $scope.dirty = {};

    var app_words = ['AutoCAD', 'AutoTURN', 'Autodesk',
                     'Bentley',
                     'CAD', 'CASE', 'CALCULUX', 'Carlson',
                     'DESCUS', 'DIAL',
                     'ERDAS', 'ESRI',
                     'FB', 'FLO', 'FME',
                     'GEO', 'GINT', 'GS',
                     'HASS', 'HCS', 'HEC',
                     'Info', 'Initialize',
                     'LARS', 'LARSA', 'LEAP',
                     'MapInfo', 'Mat3D', 'Mathcad', 'Micro',
                     'National', 'NSBA', 'NSS',
                     'ODEON', 'Oracle',
                     'Paladin', 'ParkCAD', 'Pasadena',
                     'Quote',
                     'RAM', 'Registry', 'Remove', 'RESET',
                     'SAFE', 'SAP', 'SAFE',
                     'Tekla', 'TerraGo',
                     'Ultra', 'Unity', 'Unwedge',
                     'V3DM', 'VBent', 'View',
                     'Win',
                     'XP', 'YORK'
    ];

    function suggest_state(term) {
        var q = term.toLowerCase().trim();
        var results = [];

        // Find first 10 states that start with `term`.
        for (var i = 0; i < app_words.length && results.length < 10; i++) {
            var item = app_words[i];
            if (item.toLowerCase().indexOf(q) === 0)
                results.push({ label: item, value: item });
        }

        return results;
    }

    function suggest_state_delimited(term) {
        var ix = term.lastIndexOf(','),
            lhs = term.substring(0, ix + 1),
            rhs = term.substring(ix + 1),
            suggestions = suggest_state(rhs);

        suggestions.forEach(function (s) {
            s.value = lhs + s.value;
        });

        return suggestions;
    };

    function highlight(str, term) {
        var highlight_regex = new RegExp('(' + term + ')', 'gi');
        return str.replace(highlight_regex,
          '<span class="highlight">$1</span>');
    };

    var fuzzySearch = new Fuse(app_words, {
        shouldSort: true,
        caseSensitive: false,
        threshold: 0.4,
    });

    function fuzzy_suggest(term) {
        if (!term)
            return [];

        return fuzzySearch
          .search(term)
          .slice(0, 10)
          .map(function (i) {
              var val = app_words[i];
              return {
                  value: val,
                  label: $sce.trustAsHtml(highlight(val, term))
              };
          });
    }

    //$scope.ac_fuse_options = {
    //    suggest: fuzzy_suggest
    //};


    //$scope.suggest_state_delimited = {
    //    suggest: suggest_state_delimited
    //};

    $scope.autocomplete_options = {
        suggest: suggest_state
    };
});