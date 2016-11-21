'use strict';

describe('Service: service.empresas', function () {

  // load the service's module
  beforeEach(module('bd2ClientApp'));

  // instantiate service
  var service.empresas;
  beforeEach(inject(function (_service.empresas_) {
    service.empresas = _service.empresas_;
  }));

  it('should do something', function () {
    expect(!!service.empresas).toBe(true);
  });

});
