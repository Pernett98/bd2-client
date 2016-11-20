(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name bd2ClientApp.service.about
   * @description
   * # service.about
   * Service in the bd2ClientApp.
   */

  angular
    .module('bd2ClientApp')
    .service('serviceAbout', serviceAbout);

  serviceAbout.$inject = ['$http'];

  /* @ngInject */
  function serviceAbout($http) {
    this.getEmpresas = getEmpresas;

    function getEmpresas() {
      return $http.get('http://127.0.0.1:8089/empresas');
    }
  }
})();
