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
      .otherwise({
        redirectTo: '/'
      });
  });

})();
