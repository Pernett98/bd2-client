'use strict';

describe('Controller: VolquetasCtrl', function () {

  // load the controller's module
  beforeEach(module('bd2ClientApp'));

  var VolquetasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VolquetasCtrl = $controller('VolquetasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VolquetasCtrl.awesomeThings.length).toBe(3);
  });
});
