app.controller("editSeekerProfileController", function ($scope, loginSessionService, $location, seekerProfileService) {
    $scope.showerrormsg = false;
    $scope.errormsg = "";

    $scope.loadData = function () {
        seekerProfileService.getSeekerDetails(loginSessionService.user_index).then(function (obj) {
            $scope.fname = obj.data.records[0].fname;
            $scope.mname = obj.data.records[0].mname;
            $scope.lname = obj.data.records[0].lname;
            $scope.email = obj.data.records[0].email;
            $scope.add1 = obj.data.records[0].add1;
            $scope.add2 = obj.data.records[0].add2;
            $scope.add3 = obj.data.records[0].add3;
            $scope.mobileno = "0" + obj.data.records[0].mobileno;
            $scope.dob = obj.data.records[0].dob;
            $scope.gender = obj.data.records[0].gender;
            $scope.status = obj.data.records[0].status;
            $scope.nicno = obj.data.records[0].nic_no;
        });
    }
    $scope.loadData();

    $scope.saveData = function () {
        if ($scope.fname.length == 0 || $scope.mname.length == 0 || $scope.lname.length == 0 || $scope.email.length == 0 ||
            $scope.add1.length == 0 || $scope.add2.length == 0 || $scope.add3.length == 0 || $scope.mobileno.length == 0 ||
            $scope.dob.length == 0 || $scope.gender.length == 0) {
            $scope.showerrormsg = true;
            $scope.errormsg = "All required fields must not be empty.";
        } else {
            $scope.showerrormsg = false;
            $scope.errormsg = "";
            seekerProfileService.updateSeekerDetails($scope.fname, $scope.mname, $scope.lname, $scope.email, $scope.add1, $scope.add2, $scope.add3, $scope.mobileno, $scope.dob, $scope.gender).then(function (obj) {
                if (obj.data.records[0].status == 'ok') {
                    alert("Career guidance officer profile has been updated successfully");
                    $location.path('/editseekerprofile');
                } else {
                    alert("Something went wrong. Please try again.");
                    $location.path('/editseekerprofile');
                }
            });
        }
    }
});