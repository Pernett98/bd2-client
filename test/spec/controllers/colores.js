'use strict';

describe('Controller: ColoresCtrl', function () {

  // load the controller's module
  beforeEach(module('bd2ClientApp'));

  var ColoresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ColoresCtrl = $controller('ColoresCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ColoresCtrl.awesomeThings.length).toBe(3);
  });
});
