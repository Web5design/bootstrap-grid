
angular.module('bootstrapGrid', []).

  directive('bootstrapGrid', function() {
    return {
      scope: {items: '='},
      templateUrl: 'tpl/bootstrap-grid.html',
      transclude: true,
      replace: true,
      link: function(scope, iElement, iAttrs) {
        // throwing a useful error if 'items' array not passed in
        scope.items = scope.items || function(){ throw "bootsrap-grid needs a valid 'items' attribute! It should look something like this: <div bootstrap-grid items='myItemsArray'></div>";}();
        // grabbing any attributes being passed in
        scope.spanWidth = iAttrs.spanWidth;
        scope.parentSpanWidth = iAttrs.parentSpanWidth;
        // setting defaults for unassigned, incorrect, or out of bounds attributes
        if (!(scope.spanWidth >= 1 && scope.spanWidth <= 12)) scope.spanWidth = 3;
        if (!(scope.parentSpanWidth >= 1 && scope.parentSpanWidth <= 12)) scope.parentSpanWidth = 12;
        // building rows and exposing them on the scope
        scope.rows = makeRows(scope.items, scope.spanWidth, scope.parentSpanWidth);
        function makeRows(items, spanWidth, parentSpanWidth) {
          var itemsCopy =items.slice(0),
              itemsPerRow = parentSpanWidth / spanWidth,
              rows = [];
          while (itemsCopy.length) {
            rows.push(itemsCopy.splice(0, itemsPerRow));
          }
          return rows;
        }
      }
    };
  });