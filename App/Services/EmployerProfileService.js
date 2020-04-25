app.service('employerProfileService', function ($http, loginSessionService) {
    this.getEmployerDetails = function (emp_id) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'emp_id': emp_id
            },
            url: 'App/Backend/User/viewEmployerApi.php'
        });
    }
    this.updateEmployerDetails = function (email, add1, add2, add3, mobileno, aboutorganization) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'emp_id': loginSessionService.user_index,
                'email': email,
                'add1': add1,
                'add2': add2,
                'add3': add3,
                'mobileno': mobileno,
                'aboutorganization': aboutorganization
            },
            url: 'App/Backend/User/updateEmployerApi.php'
        });
    }

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