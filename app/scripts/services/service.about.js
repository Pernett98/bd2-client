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

  serviceAbout.$inject = ['$http', 'constantConfig'];

  /* @ngInject */
  function serviceAbout($http, constantConfig) {
    this.getEmpresas = getEmpresas;

    function getEmpresas() {
      return $http.get(constantConfig.serverIp + '/empresas');
    }
  }
})();
