'use strict';

describe('Controller: ModelosCtrl', function () {

  // load the controller's module
  beforeEach(module('bd2ClientApp'));

  var ModelosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModelosCtrl = $controller('ModelosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModelosCtrl.awesomeThings.length).toBe(3);
  });
});
