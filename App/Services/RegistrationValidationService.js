app.service('registrationValidationService', function ($http) {
    this.validateSeekerOfficer = function (nic_no) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'nic_no': nic_no},
            url: 'App/Backend/User/validateUserApi.php'
        });
    }
    this.validateEmployer = function (oname) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'oname': oname},
            url: 'App/Backend/User/validateEmployerApi.php'
        });
    }
    this.validateUsername = function (username) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'username': username},
            url: 'App/Backend/User/validateUsernameApi.php'
        });
    }

});