
describe('bootstrapGrid', function() {
  var elm, scope;
  beforeEach(module('bootstrapGrid'));
  beforeEach(module('tpl/bootstrap-grid.html'));

  describe('scenario using all optional attributes correctly', function() {

    beforeEach(inject(function($rootScope, $compile) {
      elm = angular.element(
        '<div bootstrap-grid items="myTestItems" span-width="4" parent-span-width="8">' +
          '<div>' +
            'hello {{item}}' +
          '</div>' +
        '</div>');
      scope = $rootScope;
      scope.myTestItems = ['item 1', 'item 2','item 3','item 4','item 5','item 6','item 7','item 8','item 9','item 10','item 11'];
      $compile(elm)(scope);
      scope.$digest();
    }));

    it('should populate the correct number of rows and spans based on number of items, spanWidth, and parent-span-width', function() {

      expect(elm.find('div.row').length).toBe(6);
      expect(elm.find('div.span4').length).toBeTruthy();

    });
  }); 

  describe('scenario using no optional attributes', function() {

    beforeEach(inject(function($rootScope, $compile) {
      elm = angular.element(
        '<div bootstrap-grid items="myTestItems">' +
          '<div>' +
            'hello {{item}}' +
          '</div>' +
        '</div>');
      scope = $rootScope;
      scope.myTestItems = ['item 1', 'item 2','item 3','item 4','item 5','item 6','item 7','item 8','item 9','item 10','item 11'];
      $compile(elm)(scope);
      scope.$digest();
    }));

    it('should set its spanWidth to a default of 3 if none is set', function() {
      expect(elm.find('div.span3').length).toBeTruthy();
    });

    it('should set its parentSpanWidth to a default of 12 if none is set', function() {
      expect(elm.find('div.row').length).toBe(3);
    });
  }); 

  describe('scenario using out of bounds attributes', function() {

    beforeEach(inject(function($rootScope, $compile) {
      elm = angular.element(
        '<div bootstrap-grid items="myTestItems" span-width="-2" parent-span-width="27">' +
          '<div>' +
            'hello {{item}}' +
          '</div>' +
        '</div>');
      scope = $rootScope;
      scope.myTestItems = ['item 1', 'item 2','item 3','item 4','item 5','item 6','item 7','item 8','item 9','item 10','item 11'];
      $compile(elm)(scope);
      scope.$digest();
    }));

    it("it should default its 'spanWidth' to 3 if 'spanWidth' passed in is out of bounds (1-12)", function() {
      expect(elm.find('div.span3').length).toBeTruthy();
    });

    it("it should default its 'parentSpanWidth' to 12 if 'parentSpanWidth' passed in is out of bounds (1-12)", function() {
      expect(elm.find('div.row').length).toBe(3);
    });
  }); 

  // potential extra feature

  // it should set its 'parentSpanWidth' to the 'spanWidth' of a parent span in the DOM if it finds one and no valid 'parentSpanWidth' is excplicitly passed in

});
