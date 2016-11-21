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

  serviceVentasEntradas.$inject = ['$http'];

  /* @ngInject */
  function serviceVentasEntradas($http) {
    this.getAllVentasEntradas = getAllVentasEntradas;

    function getAllVentasEntradas() {
      return $http.get('http://127.0.0.1:8089/ventas_entradas');
    }
  }
})();
