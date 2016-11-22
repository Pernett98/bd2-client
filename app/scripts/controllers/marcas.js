(function() {
  'use strict';
  /**
   * @ngdoc function
   * @name bd2ClientApp.controller:MarcasCtrl
   * @description
   * # MarcasCtrl
   * Controller of the bd2ClientApp
   */

  angular
    .module('bd2ClientApp')
    .controller('MarcasCtrl', MarcasCtrl);

  MarcasCtrl.$inject = ['serviceMarcas'];

  /* @ngInject */
  function MarcasCtrl(serviceMarcas) {
    var vm = this;
    vm.marcas = [];

    getAllMarcas();

    function getAllMarcas() {
      serviceMarcas.getAllMarcas().then(function (result) {
        vm.marcas = result.data;
      });
    }
  }
})();
