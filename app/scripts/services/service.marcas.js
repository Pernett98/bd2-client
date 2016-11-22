'use strict';

/**
 * @ngdoc service
 * @name bd2ClientApp.service.marcas
 * @description
 * # service.marcas
 * Service in the bd2ClientApp.
 */
angular.module('bd2ClientApp')
  .service('service.marcas', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

(function() {
  'use strict';

  angular
    .module('bd2ClientApp')
    .service('serviceMarcas', serviceMarcas);

  serviceMarcas.$inject = ['$http', '$q', 'constantConfig', 'serviceNotification'];

  /* @ngInject */
  function serviceMarcas($http, $q, constantConfig, serviceNotification) {
    this.getAllMarcas = getAllMarcas;

    function getAllMarcas() {
      var deferred = $q.defer();

      $http.get(constantConfig.serverIp + '/marcas').then(function(result) {
        deferred.resolve(result);
      }, function(result) {
        serviceNotification.error(result.data.message, 3000, 'err-get-marcas');
        deferred.reject(result);
      });

      return deferred.promise;
    }

  }
})();
