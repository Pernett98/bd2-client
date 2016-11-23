(function() {
  "use strict";

  angular.module('bd2ClientApp').config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ventas_entradas', {
          templateUrl: 'views/ventas.entradas.html',
          controller: 'VentasEntradasCtrl as VentasEntradasVM'
      })
      .when('/volquetas', {
        templateUrl: 'views/volquetas.html',
        controller: 'VolquetasCtrl as volquetasVm'
      })
      .when('/empresas', {
        templateUrl: 'views/empresas.html',
        controller: 'EmpresasCtrl as empresasVm'
      })
      .when('/marcas', {
        templateUrl: 'views/marcas.html',
        controller: 'MarcasCtrl as marcasVm'
      })
      .when('/modelos', {
        templateUrl: 'views/modelos.html',
        controller: 'ModelosCtrl as modelosVm'
      })
      .when('/colores', {
        templateUrl: 'views/colores.html',
        controller: 'ColoresCtrl as coloresVm'
      })
      .when('/ventas_entradas', {
        templateUrl: 'views/ventas.entradas.html',
        controller: 'VentasEntradasCtrl as ventasEntradasVm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();
