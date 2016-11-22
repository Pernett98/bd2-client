(function() {
  'use strict';
  /**
   * @ngdoc function
   * @name bd2ClientApp.controller:ColoresCtrl
   * @description
   * # ColoresCtrl
   * Controller of the bd2ClientApp
   */

  angular
    .module('bd2ClientApp')
    .controller('ColoresCtrl', ColoresCtrl);

  ColoresCtrl.$inject = ['serviceColores'];

  /* @ngInject */
  function ColoresCtrl(serviceColores) {
    var vm = this;
    vm.colores = [];

    getAllColores();

    function getAllColores() {
      serviceColores.getAllColores().then(function (result) {
        vm.colores = result.data;
      });
    }
  }
})();
