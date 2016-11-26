(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name bd2ClientApp.service.volquetas
   * @description
   * # service.volquetas
   * Service in the bd2ClientApp.
   */

  angular
    .module('bd2ClientApp')
    .service('serviceVolquetas', serviceVolquetas);

  serviceVolquetas.$inject = ['$http', '$q', 'serviceNotification', 'constantConfig'];

  /* @ngInject */
  function serviceVolquetas($http, $q, serviceNotification, constantConfig) {
    this.getAllVolquetas = getAllVolquetas;
    this.createVolqueta = createVolqueta;
    this.updateVolqueta = updateVolqueta;
    this.deleteVolqueta = deleteVolqueta;

    function getAllVolquetas() {
      var deferred = $q.defer();

      $http.get(constantConfig.serverIp + '/volquetas').then(function(result) {
        deferred.resolve(result.data);
      }, function(err) {
        deferred.reject(err);
      });

      return deferred.promise;
    }

    function createVolqueta(data) {
      var deferred = $q.defer();

      $http.post(constantConfig.serverIp + '/volquetas', data).then(function (result) {
        serviceNotification.success("Volqueta creada", 3000, 'scc-create-volqueta');
        deferred.resolve(result);
      },function (result) {
        serviceNotification.error(result.data.message, 3000, 'err-create-volqueta');
        deferred.reject(result);
      });

      return deferred.promise;
    }

    function updateVolqueta(data) {
      var deferred = $q.defer();

      $http.put(constantConfig.serverIp + '/volquetas/?PLACA=' + data.PLACA, data).then(function (result) {
        serviceNotification.success("Volqueta actualizada", 3000, 'scc-update-volqueta');
        deferred.resolve(result);
      },function (result) {
        serviceNotification.error(result.data.message, 3000, 'err-update-volqueta');
        deferred.reject(result);
      });

      return deferred.promise;
    }

    function deleteVolqueta(data) {
      var deferred = $q.defer();

      $http.delete(constantConfig.serverIp + '/volquetas/?PLACA=' + data.PLACA).then(function (result) {
        serviceNotification.warning("Volqueta eliminada", 3000, 'scc-delete-volqueta');
        deferred.resolve(result);
      }, function (result) {
        console.log(result);
        serviceNotification.error(result.data.message + constantConfig.errorDeatailTemplate, 3000, 'err-delete-volqueta');
        deferred.reject(result);
      });

      return deferred.promise;
    }

  }
})();
