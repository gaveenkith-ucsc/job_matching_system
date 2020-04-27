app.controller('AdminLoginController', function ($scope, $location, loginService, loginSessionService) {
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
                        if (obj.data.records[0].user_type == "admin") {
                            loginSessionService.addSessionDetails(obj.data.records[0].username, obj.data.records[0].user_type,
                                obj.data.records[0].user_index, obj.data.records[0].user_status);
                            $location.path("/editadminprofile");
                        } else {
                            $scope.message = "Credentials failed. Please try again.";
                            $scope.message_status = true;
                        }
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