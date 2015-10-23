app.controller("mainCtrl", function($scope, dataService) {

  $scope.quotes = dataService.getData();
  $scope.showAdd = false;
  $scope.showRemove = false;
  $scope.showFilter = false;

  $scope.addQuote = function() {
    console.log($scope.data);
    dataService.addData($scope.data);
    $scope.quotes = dataService.getData();
    $scope.showAdd = false;
  }

  $scope.removeQuote = function() {
    dataService.removeData($scope.text);
    $scope.quotes = dataService.getData();
    $scope.showRemove = false;
  }

  // localStorage.setItem(key, JSON.stringify(obj))
  // var obj = JSON.parse(localStorage.getItem(key))
})
