(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name bd2ClientApp.controller:VolquetasCtrl
   * @description
   * # VolquetasCtrl
   * Controller of the bd2ClientApp
   */

  angular
    .module('bd2ClientApp')
    .controller('VolquetasCtrl', VolquetasCtrl);

  VolquetasCtrl.$inject = ['serviceVolquetas', '$mdSidenav', 'serviceEmpresas', 'serviceColores', 'serviceModelos', '$mdDialog', 'serviceNotification', 'serviceMarcas', '$scope'];

  /* @ngInject */
  function VolquetasCtrl(serviceVolquetas, $mdSidenav, serviceEmpresas, serviceColores, serviceModelos, $mdDialog, serviceNotification, serviceMarcas, $scope) {
    var vm = this;
    vm.formVolqueta = {};
    vm.volquetas = [];
    vm.empresas = [];
    vm.colores = [];
    vm.modelos = [];
    vm.marcas = [];

    vm.modalConfig = {
      title: 'Crear Volqueta',
      submitFunction: createVolqueta,
      type: 'create'
    };

    vm.tableConfig = {
      showSearch: false,
      selected: []
    };

    vm.openModal = openModal;
    vm.createVolqueta = createVolqueta;
    vm.openEditModal = openEditModal;
    vm.confirmDelete = confirmDelete;
    vm.showDetailMessage = showDetailMessage;
    vm.getAllModelos = getAllModelos;
    vm.getModelosById = getModelosById;

    getAllVolquetas();
    getAllEmpresas();
    getAllColores();
    getAllMarcas();
    getAllModelos();

    function getAllVolquetas() {
      serviceVolquetas.getAllVolquetas().then(function(result) {
        vm.volquetas = result;
      });
    }

    function getAllEmpresas() {
      serviceEmpresas.getAllEmpresas().then(function(result) {
        console.log(result);
        vm.empresas = result.data;
      });
    }

    function getAllColores() {
      serviceColores.getAllColores().then(function(result) {
        vm.colores = result.data;
      });
    }

    function getAllMarcas( ) {
      serviceMarcas.getAllMarcas().then(function (result) {
        vm.marcas = result.data;
      });
    }

    function getAllModelos() {
      serviceModelos.getAllModelos().then(function(result) {
        vm.modelos = result.data;
      });
    }

    function getModelosById(idMarca) {
      serviceModelos.getModelosByIdMarca(idMarca).then(function (result) {
        vm.modelos = result.data;
      });
    }

    function openModal() {
      vm.formVolqueta = {};
      vm.modalConfig = {
        title: 'Crear Volqueta',
        submitFunction: createVolqueta,
        type: 'create'
      };
      buildToggler('left-volquetas')();
    }

    function createVolqueta() {
      serviceVolquetas.createVolqueta(vm.formVolqueta).then(function(result) {
        getAllVolquetas();
        buildToggler('left-volquetas')();
      });
    }

    function openEditModal(data) {
      vm.modalConfig = {
        title: 'Actualizar Volqueta',
        submitFunction: updateVolqueta,
        type: 'update'
      };
      vm.formVolqueta = data;
      buildToggler('left-volquetas')();
    }

    function updateVolqueta() {
      serviceVolquetas.updateVolqueta(vm.formVolqueta).then(function(result) {
        getAllVolquetas();
        buildToggler('left-volquetas')();
      }, function(result) {

      });
    }

    function confirmDelete(data) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('¿Está seguro de eliminar está volqueta?')
        .textContent('Luego de elimnar la volqueta no se podra recuperar la información')
        .ariaLabel('Lucky day')
        .targetEvent(data)
        .ok('Eliminar')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function() {
        serviceVolquetas.deleteVolqueta(data).then(function (result) {
          getAllVolquetas();
        });
      });
    }

    function showDetailMessage() {
      console.log('lol funca');
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

    $scope.$watch(vm.formVolqueta, function (x, y) {
      console.log(x);
      console.log(y);
    });

  }
})();
