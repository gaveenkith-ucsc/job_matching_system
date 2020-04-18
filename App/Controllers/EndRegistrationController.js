app.controller('EndRegistrationController', function ($scope, $location) {
    $scope.back = function () {
        $location.path("/");
    }
});