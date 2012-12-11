describe('bootstrap grid', function() {

  var elm, scope;
  beforeEach(module('bootstrapGrid'));
  // beforeEach(module('tpl/bootstrap-grid.html'));

  beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element();
    elm = angular.element(
      '<div bootstrap-grid items="myTestItems" span-width="3" parent-span-width="12">' +
        '<div>' +
          'hello {{item}}' +
        '</div>' +
      '</div>');
    scope = $rootScope;
    scope.myTestItems = ['item 1', 'item 2','item 3','item 4','item 5','item 6','item 7','item 8','item 9','item 10','item 11'];
    $compile(elm)(scope);
    scope.$digest();
  }));
  
  it('should be awesome', function() {
    dump(scope.myTestItems);
    expect(true).toBe(true);
  });
});



describe('bootstrap grid controller', function() {
  var scope, ctrl;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope;
    scope.items = ['item 1', 'item 2','item 3','item 4','item 5','item 6','item 7','item 8','item 9','item 10','item 11'];
    // instantiate the controller stand-alone, without the directive
    ctrl = $controller(BootstrapGridCtrl, {$scope: scope, $element: null});
  }));

  describe('instantiation', function() {

    it("should be able to create it's rows", function() {
      dump(scope.rows.length);
      expect(scope.rows.length).toBe(3);
    });

  });


});