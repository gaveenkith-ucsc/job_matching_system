app.controller('headerController', function ($scope, loginSessionService, $rootScope, $location) {
    $scope.showlogout = false;
    $scope.showusername = false;
    $rootScope.set = function () {
        $scope.showlogout = true;
        $scope.showusername = true
        $scope.username = loginSessionService.username;
        $scope.usertype = loginSessionService.user_type;
    }
    $scope.logout = function () {
        $scope.showlogout = false;
        $scope.showusername = false;
        loginSessionService.clearSession();
        $location.path("/");
    }
});