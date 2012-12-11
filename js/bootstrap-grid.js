angular.module('bootstrapGrid', []).

  directive('bootstrapGrid', function() {
    return {

      scope: {items: '='},
      templateUrl: 'tpl/bootstrap-grid.html',
      transclude: true,
      replace: true,

      link: function(scope, iElement, iAttrs) {

        var parentSpanWidth = iAttrs.parentSpanWidth || 12;
        scope.spanWidth = iAttrs.spanWidth || 3;
        scope.rows = makeRows();

        console.log("scope.spanWidth", scope.spanWidth);

        function makeRows() {
          var itemsCopy = scope.items.slice(0),
              itemsPerRow = parentSpanWidth / scope.spanWidth,
              rows = [];
          while (itemsCopy.length) {
            rows.push(itemsCopy.splice(0, itemsPerRow));
          }
          return rows;
        }
      }
    };
  });















    // template:
    //   '<div>' +
    //     '<div class="row" ng-repeat="row in rows">' +
    //       '<div class="span{{spanWidth}}" ng-repeat="item in row">' +
    //         '<div ng-transclude></div>' +
    //       '</div>' +
    //     '</div>' +
    //   '</div>',