(function () {
    'use strict';
    angular
        .module('app', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
        .controller('DemoCtrl', DemoCtrl);

    function DemoCtrl($timeout, $q, $log) {
        var self = this;

        self.simulateQuery = false;
        self.isDisabled = false;

        self.repos = loadAll();
        self.querySearch = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange = searchTextChange;

        // ******************************
        // Internal methods
        // ******************************

        /**
         * Search for repos... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch(query) {
            var results = query ? self.repos.filter(createFilterFor(query)) : self.repos,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }

        /**
         * Build `components` list of key/value pairs
         */
        function loadAll() {
            var repos = [
              {
                  'name': 'AutoCAD Map 3D 2013 (SP2.1)',
                  'id': '720',
                  'abbr': 'AUTOCADMAP3D2013'
              },
              {
                  'name': 'Autodesk AutoCAD Map 3D 2015 (SP3)',
                  'id': '779',
                  'abbr': 'AUTOCADMAP3D2015'
              },
              {
                  'name': 'Bentley AutoPIPE Batch Generator',
                  'id': '594',
                  'abbr': 'AUTOPIPEBATCH'
              },
              {
                  'name': 'Bentley AutoPIPE Nozzle V8i 08.11.08.20',
                  'id': '593',
                  'abbr': 'AUTOPIPENOZV8I'
              },
              {
                  'name': 'Bentley AutoPIPE V8i_SS5 09.06.00.15',
                  'id': '592',
                  'abbr': 'AUTOPIPEV8ISSX'
              },
              {
                  'name': 'AutoTURN 8.2.1',
                  'id': '148',
                  'abbr': 'AUTOTURN8'
              },
              {
                  'name': 'Bentley View V8i_SS3 08.11.09.459',
                  'id': '61',
                  'abbr': 'VIEWV8ISSX'
              },
              {
                  'name': 'Bentley GEOPAK Suite V8i_SS2 08.11.07.619',
                  'id': '77',
                  'abbr': 'USTNGEOPAKV8ISSX'
              },
              {
                  'name': 'Bentley IEG License Service 02.00.18.03',
                  'id': '94',
                  'abbr': 'BENTLEYIEG'
              },
              {
                  'name': 'Bentley FlowMaster V8i_SS1 08.11.01.03 (9-3-2010)',
                  'id': '95',
                  'abbr': 'FLOWMASTER8'
              },
              {
                  'name': 'Bentley Descartes V8i_SS4 08.11.09.432',
                  'id': '100',
                  'abbr': 'USTNDESCARTESV8ISSX'
              },
              {
                  'name': 'Bentley Navigator V8i_SS5 08.11.09.536',
                  'id': '102',
                  'abbr': 'NAVIGATORV8ISSX'
              },
              {
                  'name': 'Bentley Rebar V8i_SS2 08.11.07.57',
                  'id': '112',
                  'abbr': 'USTNREBARV8ISSX'
              },
              {
                  'name': 'Bentley SewerCAD V8i_SS3 08.11.03.83',
                  'id': '116',
                  'abbr': 'SEWERCADV8ISSX'
              },
              {
                  'name': 'Bentley StormCAD V8i_SS2 08.11.02.75 (10-8-2012)',
                  'id': '118',
                  'abbr': 'STORMCADV8ISSX'
              },
              {
                  'name': 'Bentley WaterCAD V8i SS4 08.11.04.57',
                  'id': '121',
                  'abbr': 'WATERCADV8ISSX'
              },
              {
                  'name': 'Bentley CulvertMaster 03.03.00.04',
                  'id': '122',
                  'abbr': 'CULVERTMASTER'
              },
              {
                  'name': 'Bentley Power Rail Overhead Line V8i_SS2 08.11.07.528',
                  'id': '124',
                  'abbr': 'PWRRAILV8ISSX'
              },
              {
                  'name': 'Bentley GEOPAK Suite V8i_SS2 with FDOT Workspace',
                  'id': '146',
                  'abbr': 'USTNGEOPAKV8ISSX-FDOT'
              },
              {
                  'name': 'Bentley PondPack V8i 08.11.01.56',
                  'id': '181',
                  'abbr': 'PONDPACKV8I'
              },
              {
                  'name': 'Bentley GEOPAK SS2 with MS SS2 with VDOT Workspace',
                  'id': '248',
                  'abbr': 'USTNGEOPAKV8ISSX-VDOT'
              },
              {
                  'name': 'Bentley StormCAD V8i_SS2 with MicroStation V8i_SS3',
                  'id': '290',
                  'abbr': 'STORMCAD_MS'
              }
            ];
            return repos.map(function (repo) {
                repo.value = repo.name.toLowerCase();
                return repo;
            });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(item) {
                return (item.value.indexOf(lowercaseQuery) === 0);
            };

        }
    }
})();