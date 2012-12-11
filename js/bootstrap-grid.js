var bootstrapGrid = angular.module('bootstrapGrid', []);

var BootstrapGridCtrl = function($scope) {
  $scope.rows = makeRowsFromItems($scope.items);
  function makeRowsFromItems(items) {
    var itemsCopy = items.slice(0),
        rows = [];
    while (itemsCopy.length) {
      rows.push(itemsCopy.splice(0, 4));
    }
    return rows;
  }
};

bootstrapGrid.directive('bootstrapGrid', function() {
  return {
    scope: {
      items: '=',
      spanWidth: '=',
      parentSpanWidth: '='
    },
    controller: BootstrapGridCtrl,
    // templateUrl: 'tpl/bootstrap-grid.html',
    template:
      '<div>' +
        '<div class="row" ng-repeat="row in rows">' +
          '<div class="span3" ng-repeat="item in row">' +
            '<div ng-transclude></div>' +
          '</div>' +
        '</div>' +
      '</div>',
    transclude: true,
    replace: true
  };
});