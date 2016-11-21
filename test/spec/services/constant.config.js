'use strict';

describe('Service: constant.config', function () {

  // load the service's module
  beforeEach(module('bd2ClientApp'));

  // instantiate service
  var constant.config;
  beforeEach(inject(function (_constant.config_) {
    constant.config = _constant.config_;
  }));

  it('should do something', function () {
    expect(!!constant.config).toBe(true);
  });

});
