app.controller("editEmpProfileController", function ($scope, employerProfileService, loginSessionService, $location) {
    $scope.showerrormsg = false;
    $scope.errormsg = "";

    $scope.loadData = function () {
        employerProfileService.getEmployerDetails(loginSessionService.user_index).then(function (obj) {
            console.log(loginSessionService.user_index);
            $scope.oname = obj.data.records[0].oname;
            $scope.email = obj.data.records[0].email;
            $scope.add1 = obj.data.records[0].add1;
            $scope.add2 = obj.data.records[0].add2;
            $scope.add3 = obj.data.records[0].add3;
            $scope.mobileno = "0" + obj.data.records[0].mobileno;
            $scope.aboutorganization = obj.data.records[0].aboutorganization;
        });
    }

    $scope.updateData = function () {
        if ($scope.email.length == 0 || $scope.add1.length == 0 || $scope.add2.length == 0 || $scope.add3.length == 0 || $scope.mobileno.length == 0 || $scope.aboutorganization.length == 0) {
            $scope.showerrormsg = true;
            $scope.errormsg = "All required fields must not be empty.";
        } else {
            $scope.showerrormsg = false;
            $scope.errormsg = "";
            employerProfileService.updateEmployerDetails($scope.email, $scope.add1, $scope.add2, $scope.add3, $scope.mobileno, $scope.aboutorganization).then(function (obj) {

                if (obj.data.records[0].status == "ok") {
                    alert("Employer profile has been updated successfully.");
                    $location.path("/editemployerprofile");
                } else {
                    alert("Something went wrong. Please try again.");
                    $location.path("/editemployerprofile");
                }

            });
        }
    }


    $scope.loadData();
});