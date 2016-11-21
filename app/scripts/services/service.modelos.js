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

    serviceModelos.$inject = ['$http'];

    /* @ngInject */
    function serviceModelos($http) {
        this.getAllModelos = getAllModelos;

        function getAllModelos() {
          return $http.get('http://127.0.0.1:8089/modelos');
        }
    }
})();
