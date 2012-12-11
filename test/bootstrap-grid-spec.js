

// what about loading in html scenarios?
// use case scenarios?

// var scenarios = [
//   'default.html',
//   'onlySpanWidth.html',
//   'onlyParentSpanWidth.html'
// ];

// if I want to simulate different html use cases do I have to copy this whole describe block?

describe('bootstrapGrid', function() {
  var elm, scope;
  beforeEach(module('bootstrapGrid'));
  beforeEach(module('tpl/bootstrap-grid.html'));

  describe('scenario using all optional attributes', function() {

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
      expect(elm.find('div.row').length).toBe(3); // 11(items) / (12(rowWidth) / 3(spanWidth)
      dump(elm.find('div.row')[2]);
    });
  }); 

  // it should default its 'spanWidth' to 3 if a 'spanWidth' under 1 or over 12 is passed in

  // it should default its 'parentSpanWidth' to 12 if no 'parentSpanWidth' is passed in && it is not a child of another bootstrap span

  // it should set its 'parentSpanWidth' to the 'spanWidth' of a parent span in the DOM if it finds one and no valid 'parentSpanWidth' is excplicitly passed in

});



// describe('grid controller', function() {
//   var scope, ctrl;
//   beforeEach(module('bootstrapGrid'));

//   beforeEach(inject(function($rootScope, $controller){
//     scope = $rootScope;
//     scope.spanWidth = 3;
//     scope.parentSpanWidth = 12;
//     scope.items = ['item 1', 'item 2','item 3','item 4','item 5','item 6','item 7','item 8','item 9','item 10','item 11'];
//     ctrl = $controller('BootstrapGridCtrl', {$scope: scope});
//   }));

//   describe('constructor', function() {
//     it('should chunk its items into an appropriate number of rows', function() {
//       expect(scope.rows.length).toBe(3);
//     });
//   });
// });