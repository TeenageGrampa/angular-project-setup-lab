function MainController($scope){
    $scope.name = 'Dan';
}


angular
  .module('app')
  .controller('MainController', MainController);