app.controller('LoginMenuController', function ($scope, $location) {
    $scope.directToLogin = function () {
        $location.path("/login");
    }
});