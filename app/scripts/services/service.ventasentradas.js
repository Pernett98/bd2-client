(function() {
  'use strict';
  /**
   * @ngdoc service
   * @name bd2ClientApp.service.ventasEntradas
   * @description
   * # service.ventasEntradas
   * Service in the bd2ClientApp.
   */


  angular
    .module('bd2ClientApp')
    .service('serviceVentasEntradas', serviceVentasEntradas);

  serviceVentasEntradas.$inject = ['$http', 'constantConfig'];

  /* @ngInject */
  function serviceVentasEntradas($http, constantConfig) {
    this.getAllVentasEntradas = getAllVentasEntradas;

    function getAllVentasEntradas() {
      return $http.get(constantConfig.serverIp + '/ventas_entradas');
    }
  }
})();
