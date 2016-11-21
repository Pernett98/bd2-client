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

    serviceModelos.$inject = ['$http', 'constantConfig'];

    /* @ngInject */
    function serviceModelos($http, constantConfig) {
        this.getAllModelos = getAllModelos;

        function getAllModelos() {
          return $http.get(constantConfig.serverIp + '/modelos');
        }
    }
})();
