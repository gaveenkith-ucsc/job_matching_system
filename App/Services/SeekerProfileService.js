app.service('seekerProfileService', function ($http, loginSessionService) {
    this.getSeekerDetails = function (nic_no) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': nic_no
            },
            url: 'App/Backend/User/viewSeekerApi.php'
        });
    }
    this.updateSeekerDetails = function (fname, mname, lname, email, add1, add2, add3, mobileno, dob, gender) {
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
                'dob': dob,
                'gender': gender
            },
            url: 'App/Backend/User/updateSeekerApi.php'
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
    this.getPhoto = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': loginSessionService.user_index
            },
            url: 'App/Backend/User/getSeekerPhotoApi.php'
        });
    }

    this.savePhoto = function (photo) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': loginSessionService.user_index,
                'image': photo
            },
            url: 'App/Backend/User/saveSeekerPhotoApi.php'
        });
    }

});