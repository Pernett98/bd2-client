(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name bd2ClientApp.controller:VentasEntradasCtrl
   * @description
   * # VentasEntradasCtrl
   * Controller of the bd2ClientApp
   */


  angular
    .module('bd2ClientApp')
    .controller('VentasEntradasCtrl', VentasEntradasCtrl);

  VentasEntradasCtrl.$inject = ['serviceVentasEntradas'];

  /* @ngInject */
  function VentasEntradasCtrl(serviceVentasEntradas) {
    var vm = this;
    vm.ventas = [];

    getVentas();

    function getVentas() {
      serviceVentasEntradas.getAllVentasEntradas().then(function (result) {
        console.log(result);
        vm.ventas = result.data;
      });
    }
  }
})();
