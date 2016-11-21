'use strict';

describe('Controller: VentasEntradasCtrl', function () {

  // load the controller's module
  beforeEach(module('bd2ClientApp'));

  var VentasEntradasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VentasEntradasCtrl = $controller('VentasEntradasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VentasEntradasCtrl.awesomeThings.length).toBe(3);
  });
});
