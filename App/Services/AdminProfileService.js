app.service('adminProfileService', function ($http, loginSessionService) {
    this.verifyPassword = function (currentpassword) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'username': loginSessionService.username,
                'currentpassword': currentpassword
            },
            url: 'App/Backend/User/verifyPasswordApi.php'
        });
    }

    this.updatePassword = function (newpassword) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'username': loginSessionService.username,
                'newpassword': newpassword
            },
            url: 'App/Backend/User/updatePasswordApi.php'
        });
    }
});