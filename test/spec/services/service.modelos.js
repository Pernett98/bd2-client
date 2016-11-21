'use strict';

describe('Service: service.modelos', function () {

  // load the service's module
  beforeEach(module('bd2ClientApp'));

  // instantiate service
  var service.modelos;
  beforeEach(inject(function (_service.modelos_) {
    service.modelos = _service.modelos_;
  }));

  it('should do something', function () {
    expect(!!service.modelos).toBe(true);
  });

});
