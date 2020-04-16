app.controller('LoginController', function ($scope, $location, loginService) {
    $scope.message_status = false;
    $scope.message = "";
    $scope.username = "";
    $scope.password = "";
    $scope.prop = {
        "type": "select",
        "name": "Service",
        "value": "Select from here",
        "values": ["Select from here", "Fresh", "Graduated"]
    };
    $scope.login = function () {
        loginService.register($scope.username, $scope.password).then(function (obj) {
            console.log(obj);
        });
    }
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
    $scope.directToMenu = function () {
        $location.path("/");
    }
    $scope.directToRegStep2 = function () {
        $location.path("/regstep2");
    }
});
