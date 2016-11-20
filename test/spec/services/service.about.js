'use strict';

describe('Service: service.about', function () {

  // load the service's module
  beforeEach(module('bd2ClientApp'));

  // instantiate service
  var service.about;
  beforeEach(inject(function (_service.about_) {
    service.about = _service.about_;
  }));

  it('should do something', function () {
    expect(!!service.about).toBe(true);
  });

});
