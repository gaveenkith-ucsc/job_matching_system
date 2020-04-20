app.controller('EndRegistrationController', function ($scope, $location, $routeParams) {
    $scope.user_type = $location.search().usertype;
    $scope.status = $location.search().status;
    $scope.showSuccess = false;
    $scope.showError = false;
    if ($scope.status == 'success') {
        $scope.showSuccess = true;
        $scope.showError = false;
    }
    if ($scope.status == 'fail') {
        $scope.showSuccess = false;
        $scope.showError = true;
    }
    $scope.back = function () {
        $location.path("/");
    }
});