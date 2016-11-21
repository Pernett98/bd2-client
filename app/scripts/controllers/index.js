(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name bd2ClientApp.controller:IndexCtrl
   * @description
   * # IndexCtrl
   * Controller of the bd2ClientApp
   */

  angular
    .module('bd2ClientApp')
    .controller('IndexCtrl', IndexCtrl);

  IndexCtrl.$inject = ['$scope', '$timeout', '$mdSidenav'];

  /* @ngInject */
  function IndexCtrl($scope, $timeout, $mdSidenav) {
    var vm = this;

    $scope.toggleLeft = buildDelayedToggler('left');

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle();
      }, 200);
    }

  }
})();
