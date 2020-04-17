app.controller('AdminLoginController', function ($scope, $location, loginService) {
    $scope.username = "";
    $scope.password = "";
    $scope.checkLogin = function () {
        if ($scope.username.length != 0 && $scope.password != 0) {
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
        } else {
            $scope.message = "Please fill username and password.";
            $scope.message_status = true;
        }
    }
    $scope.back = function () {
        $location.path("/");
    }
});