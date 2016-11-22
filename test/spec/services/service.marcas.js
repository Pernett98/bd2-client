'use strict';

describe('Service: service.marcas', function () {

  // load the service's module
  beforeEach(module('bd2ClientApp'));

  // instantiate service
  var service.marcas;
  beforeEach(inject(function (_service.marcas_) {
    service.marcas = _service.marcas_;
  }));

  it('should do something', function () {
    expect(!!service.marcas).toBe(true);
  });

});
