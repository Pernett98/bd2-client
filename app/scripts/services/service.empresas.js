'use strict';

/**
 * @ngdoc service
 * @name bd2ClientApp.service.empresas
 * @description
 * # service.empresas
 * Service in the bd2ClientApp.
 */
angular.module('bd2ClientApp')
  .service('service.empresas', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });


(function() {
    'use strict';

    angular
        .module('bd2ClientApp')
        .service('serviceEmpresas', serviceEmpresas);

    serviceEmpresas.$inject = ['$http'];

    /* @ngInject */
    function serviceEmpresas($http) {
        this.getAllEmpresas = getAllEmpresas;

        function getAllEmpresas() {
          return $http.get('http://127.0.0.1:8089/empresas');
        }
    }
})();
