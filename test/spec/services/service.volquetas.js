'use strict';

describe('Service: service.volquetas', function () {

  // load the service's module
  beforeEach(module('bd2ClientApp'));

  // instantiate service
  var service.volquetas;
  beforeEach(inject(function (_service.volquetas_) {
    service.volquetas = _service.volquetas_;
  }));

  it('should do something', function () {
    expect(!!service.volquetas).toBe(true);
  });

});
