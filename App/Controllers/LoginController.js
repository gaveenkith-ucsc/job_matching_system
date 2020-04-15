app.controller('LoginController', function ($scope, $location, loginService) {
    $scope.message_status = false;
    $scope.message = "";
    $scope.login = function () {
        loginService.register($scope.username, $scope.password).then(function (obj) {
            console.log(obj);
        });
    }
    $scope.checkLogin = function () {
        loginService.checkLogin($scope.username, $scope.password).then(function (obj) {
            console.log(obj);
            if (obj.data.records.length == 0) {
                $scope.message = "Credentials failed. Please try again.";
                $scope.message_status = true;
            } else {
                if (obj.data.records[0].status == "no") {
                    $scope.message = "Credentials failed. Please try again.";
                    $scope.message_status = true;
                } else {
                    $scope.message = "";
                    $scope.message_status = false;
                }
            }
        });
    }
});
