(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name bd2ClientApp.controller:EmpresasCtrl
     * @description
     * # EmpresasCtrl
     * Controller of the bd2ClientApp
     */

    angular
        .module('bd2ClientApp')
        .controller('EmpresasCtrl', EmpresasCtrl);

    EmpresasCtrl.$inject = ['serviceEmpresas'];

    /* @ngInject */
    function EmpresasCtrl(serviceEmpresas) {
        var vm = this;

        vm.modalConfig = {
          title: 'Crear Empresa',
          submitFunction: createEmpresa,
          type: 'create'
        };

        vm.tableConfig = {
          showSearch: false,
          selected: []
        };

        vm.openModal = openModal;
        vm.getAllEmpresas = getAllEmpresas;

        function getAllEmpresas() {
          serviceEmpresas.getAllEmpresas().then(function(result) {
            vm.empresas = result.data;
          });
        }

        function openModal() {
          vm.formVolqueta = {};
          vm.modalConfig = {
            title: 'Crear Empresa',
            submitFunction: createEmpresa,
            type: 'create'
          };
          buildToggler('left-empresa')();
        }

        function createEmpresa() {

        }

        function buildToggler(navID) {
          return function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
              .toggle()
              .then(function() {
                console.log('hola');
              });
          }
        }

        //init
        getAllEmpresas();

    }
})();
