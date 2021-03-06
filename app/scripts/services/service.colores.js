'use strict';

/**
 * @ngdoc service
 * @name bd2ClientApp.service.colores
 * @description
 * # service.colores
 * Service in the bd2ClientApp.
 */
angular.module('bd2ClientApp')
  .service('service.colores', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

(function() {
    'use strict';

    angular
        .module('bd2ClientApp')
        .service('serviceColores', serviceColores);

    serviceColores.$inject = ['$http', 'constantConfig'];

    /* @ngInject */
    function serviceColores($http, constantConfig) {
        this.getAllColores = getAllColores;

        function getAllColores() {
          return $http.get(constantConfig.serverIp + '/colores');
        }
    }
})();
