'use strict';

describe('Service: consultationService', function () {

  // load the service's module
  beforeEach(module('mytodoApp'));

  // instantiate service
  var consultationService;
  beforeEach(inject(function (_consultationService_) {
    consultationService = _consultationService_;
  }));

  it('should do something', function () {
    expect(!!consultationService).toBe(true);
  });

});
