app.service('registrationUpdateService', function ($http, registrationSessionService) {
    this.addEmployer = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'oname': registrationSessionService.oname,
                'email': registrationSessionService.email,
                'add1': registrationSessionService.add1,
                'add2': registrationSessionService.add2,
                'add3': registrationSessionService.add3,
                'mobileno': registrationSessionService.mobileno,
                'aboutorganization': registrationSessionService.aboutorganization,
                'username': registrationSessionService.regusername,
                'password': registrationSessionService.regpassword
            },
            url: 'App/Backend/User/addEmployerApi.php'
        });
    }
    this.addFreshSeeker = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': registrationSessionService.nic_no,
                'fname': registrationSessionService.fname,
                'mname': registrationSessionService.mname,
                'lname': registrationSessionService.lname,
                'email': registrationSessionService.email,
                'status': registrationSessionService.status,
                'add1': registrationSessionService.add1,
                'add2': registrationSessionService.add2,
                'add3': registrationSessionService.add3,
                'mobileno': registrationSessionService.mobileno,
                'dob': registrationSessionService.dob,
                'gender': registrationSessionService.gender,
                'profile_photo': registrationSessionService.display,
                'username': registrationSessionService.regusername,
                'password': registrationSessionService.regpassword
            },
            url: 'App/Backend/User/addFreshSeekerApi.php'
        });
    }

    this.addGuidanceOfficer = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': registrationSessionService.nic_no,
                'fname': registrationSessionService.fname,
                'mname': registrationSessionService.mname,
                'lname': registrationSessionService.lname,
                'email': registrationSessionService.email,
                'add1': registrationSessionService.add1,
                'add2': registrationSessionService.add2,
                'add3': registrationSessionService.add3,
                'mobileno': registrationSessionService.mobileno,
                'dob': registrationSessionService.dob,
                'experience': registrationSessionService.experience,
                'gender': registrationSessionService.gender,
                'profile_photo': registrationSessionService.display,
                'username': registrationSessionService.regusername,
                'password': registrationSessionService.regpassword
            },
            url: 'App/Backend/User/addGuidanceOfficerApi.php'
        });
    }

    this.addGraduateSeeker = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': registrationSessionService.nic_no,
                'fname': registrationSessionService.fname,
                'mname': registrationSessionService.mname,
                'lname': registrationSessionService.lname,
                'email': registrationSessionService.email,
                'status': registrationSessionService.status,
                'add1': registrationSessionService.add1,
                'add2': registrationSessionService.add2,
                'add3': registrationSessionService.add3,
                'mobileno': registrationSessionService.mobileno,
                'dob': registrationSessionService.dob,
                'gender': registrationSessionService.gender,
                'profile_photo': registrationSessionService.display,
                'username': registrationSessionService.regusername,
                'password': registrationSessionService.regpassword,
                'qualifications': registrationSessionService.qualificatios_array
            },
            url: 'App/Backend/User/addGraduateSeekerApi.php'
        });
    }


    this.addQualification = function (nic_no, sector, type, institute, certificateno, completedyear) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': nic_no,
                'sector': sector,
                'type': type,
                'institute': institute,
                'certificateno': certificateno,
                'completedyear': completedyear
            },
            url: 'App/Backend/User/addQualificationApi.php'
        });
    }


});