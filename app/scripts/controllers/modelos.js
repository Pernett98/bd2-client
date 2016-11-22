'use strict';

/**
 * @ngdoc function
 * @name bd2ClientApp.controller:ModelosCtrl
 * @description
 * # ModelosCtrl
 * Controller of the bd2ClientApp
 */
angular.module('bd2ClientApp')
  .controller('ModelosCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

(function() {
    'use strict';

    angular
        .module('bd2ClientApp')
        .controller('ModelosCtrl', ModelosCtrl);

    ModelosCtrl.$inject = ['serviceModelos'];

    /* @ngInject */
    function ModelosCtrl(serviceModelos) {
        var vm = this;
        vm.modelos = [];

        getAllModelos();

        function getAllModelos() {
          serviceModelos.getAllModelos().then(function (result) {
            vm.modelos = result.data;
          });
        }
    }
})();
