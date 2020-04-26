app.service('guidanceProfileService', function ($http, loginSessionService) {
    this.getGuidanceDetails = function (nic_no) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': nic_no
            },
            url: 'App/Backend/User/viewGuidanceApi.php'
        });
    }
    this.updateGuidanceDetails = function (fname, mname, lname, email, add1, add2, add3, mobileno, experience, dob, gender) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': loginSessionService.user_index,
                'fname': fname,
                'mname': mname,
                'lname': lname,
                'email': email,
                'add1': add1,
                'add2': add2,
                'add3': add3,
                'mobileno': mobileno,
                'experience': experience,
                'dob': dob,
                'gender': gender
            },
            url: 'App/Backend/User/updateGuidanceApi.php'
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