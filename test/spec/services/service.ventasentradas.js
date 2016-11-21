'use strict';

describe('Service: service.ventasEntradas', function () {

  // load the service's module
  beforeEach(module('bd2ClientApp'));

  // instantiate service
  var service.ventasEntradas;
  beforeEach(inject(function (_service.ventasEntradas_) {
    service.ventasEntradas = _service.ventasEntradas_;
  }));

  it('should do something', function () {
    expect(!!service.ventasEntradas).toBe(true);
  });

});
