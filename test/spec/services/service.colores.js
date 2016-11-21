'use strict';

describe('Service: service.colores', function () {

  // load the service's module
  beforeEach(module('bd2ClientApp'));

  // instantiate service
  var service.colores;
  beforeEach(inject(function (_service.colores_) {
    service.colores = _service.colores_;
  }));

  it('should do something', function () {
    expect(!!service.colores).toBe(true);
  });

});
