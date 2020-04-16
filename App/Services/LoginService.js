app.service('loginService', function ($http) {
    this.register = function (username, password) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'username': username, 'password': password},
            url: 'App/Backend/User/userRegisterApi.php'
        });
    }
    this.checkLogin = function (username, password) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'username': username, 'password': password},
            url: 'App/Backend/User/loginApi.php'
        });
    }
});