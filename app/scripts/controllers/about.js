(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name bd2ClientApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the bd2ClientApp
   */

  angular
    .module('bd2ClientApp')
    .controller('AboutCtrl', AboutCtrl);

  AboutCtrl.$inject = ['$scope', 'serviceAbout'];

  /* @ngInject */
  function AboutCtrl($scope, serviceAbout) {
    var vm = this;

    activate();

    function activate() {
     serviceAbout.getEmpresas().then(function (l) {
       console.log(l);
       vm.empresas = l.data;
     });

    }
  }
})();
