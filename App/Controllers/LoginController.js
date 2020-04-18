app.controller('LoginController', function ($scope, $location, loginService, $routeParams) {
    $scope.message_status = false;
    $scope.showregerror = false;
    $scope.regerrormsg = "";
    $scope.message = "";
    $scope.username = "";
    $scope.password = "";
    $scope.nic_no = "";
    $scope.fname = "";
    $scope.mname = "";
    $scope.lname = "";
    $scope.oname = "";
    $scope.email = "";
    $scope.regusername = "";
    $scope.regpassword = "";
    $scope.confirmpassword = "";

    $scope.shownic = false;
    $scope.showfname = false;
    $scope.showmname = false;
    $scope.showlname = false;
    $scope.showoname = false;
    $scope.showemail = false;
    $scope.showstatus = false;
    $scope.showusername = false;
    $scope.showregpassword = false;
    $scope.showconfirmpassword = false;

    $scope.user_type = $location.search().usertype;

    if ($scope.user_type == "Job Seeker") {
        $scope.shownic = true;
        $scope.showfname = true;
        $scope.showmname = true;
        $scope.showlname = true;
        $scope.showemail = true;
        $scope.showstatus = true;
        $scope.showusername = true;
        $scope.showregpassword = true;
        $scope.showconfirmpassword = true;
    }
    if ($scope.user_type == "Career Guidance Officer") {
        $scope.shownic = true;
        $scope.showfname = true;
        $scope.showmname = true;
        $scope.showlname = true;
        $scope.showemail = true;
        $scope.showusername = true;
        $scope.showregpassword = true;
        $scope.showconfirmpassword = true;
    }
    if ($scope.user_type == "Employer") {
        $scope.showoname = true;
        $scope.showemail = true;
        $scope.showusername = true;
        $scope.showregpassword = true;
        $scope.showconfirmpassword = true;
    }

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
        $location.path("/regstep2").search({usertype: $scope.user_type});
    }
    $scope.formValidation = function () {
        if ($scope.user_type == "Job Seeker") {

            if ($scope.nic_no.length == 0 || $scope.fname.length == 0 || $scope.mname.length == 0 ||
                $scope.prop.value == 'Select from here' || $scope.email.length == 0 || $scope.regusername.length == 0
                || $scope.regpassword.length == 0 || $scope.confirmpassword.length == 0) {

                $scope.showregerror = true;
                $scope.regerrormsg = "All required fields must be filled.";
            } else {
                var reg_ex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var email_validity = reg_ex.test($scope.email);
                if (!email_validity) {
                    $scope.showregerror = true;
                    $scope.regerrormsg = "Please provide a valid email address.";
                } else {
                    if ($scope.regpassword != $scope.confirmpassword) {
                        $scope.showregerror = true;
                        $scope.regerrormsg = "Password and confirm password are not matched.";
                    } else {
                        $scope.showregerror = false;
                        $location.path("/regstep2").search({usertype: $scope.user_type});
                    }
                }

            }
        }


        if ($scope.user_type == "Employer") {

            if ($scope.oname.length == 0 || $scope.email.length == 0 || $scope.regusername.length == 0
                || $scope.regpassword.length == 0 || $scope.confirmpassword.length == 0) {
                alert("fill all");
            } else {
                var reg_ex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var email_validity = reg_ex.test($scope.email);
                if (!email_validity) {
                    alert("invalid email");
                } else {
                    if ($scope.regpassword != $scope.confirmpassword) {
                        alert("password and confirm passwords are not matched");
                    } else {
                        $location.path("/regstep2").search({usertype: $scope.user_type});
                    }
                }

            }
        }

        if ($scope.user_type == "Career Guidance Officer") {

            if ($scope.nic_no.length == 0 || $scope.fname.length == 0 || $scope.mname.length == 0 ||
                $scope.email.length == 0 || $scope.regusername.length == 0
                || $scope.regpassword.length == 0 || $scope.confirmpassword.length == 0) {
                alert("fill all");
            } else {
                var reg_ex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var email_validity = reg_ex.test($scope.email);
                if (!email_validity) {
                    alert("invalid email");
                } else {
                    if ($scope.regpassword != $scope.confirmpassword) {
                        alert("password and confirm passwords are not matched");
                    } else {
                        $location.path("/regstep2").search({usertype: $scope.user_type});
                    }
                }

            }
        }


    }
})
;
