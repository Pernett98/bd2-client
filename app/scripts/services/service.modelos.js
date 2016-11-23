'use strict';

/**
 * @ngdoc service
 * @name bd2ClientApp.service.modelos
 * @description
 * # service.modelos
 * Service in the bd2ClientApp.
 */
angular.module('bd2ClientApp')
  .service('service.modelos', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });


(function() {
    'use strict';

    angular
        .module('bd2ClientApp')
        .service('serviceModelos', serviceModelos);

    serviceModelos.$inject = ['$http', 'constantConfig', '$q'];

    /* @ngInject */
    function serviceModelos($http, constantConfig, $q) {
        this.getAllModelos = getAllModelos;
        this.getModelosByIdMarca = getModelosByIdMarca;

        function getAllModelos() {
          return $http.get(constantConfig.serverIp + '/modelos');
        }

        function getModelosByIdMarca(idMarca) {
          var deferred = $q.defer();

          $http.get(constantConfig.serverIp + '/modelos?ID_MARCA='+idMarca).then(function (result) {
            deferred.resolve(result);
          }, function (result) {
            deferred.reject(result);
          });

          return deferred.promise;
        }
    }
})();
