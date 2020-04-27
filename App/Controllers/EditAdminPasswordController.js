app.controller('editAdminPasswordController', function ($scope, $location, loginSessionService, adminProfileService) {
    $scope.showerrormsg = false;
    $scope.errormsg = "";
    $scope.cpassword = "";
    $scope.npassword = "";
    $scope.saveChanges = function () {
        if ($scope.cpassword.length == 0 || $scope.npassword.length == 0) {
            $scope.showerrormsg = true;
            $scope.errormsg = "Please fill all required fields.";
        } else {
            $scope.showerrormsg = false;
            $scope.errormsg = "";
            adminProfileService.verifyPassword($scope.cpassword).then(function (obj) {
                if (obj.data.records[0].status == 'no') {
                    $scope.showerrormsg = true;
                    $scope.errormsg = "Current password is incorrect.";
                } else {
                    adminProfileService.updatePassword($scope.npassword).then(function (obj) {
                        if (obj.data.records[0].status == 'ok') {
                            alert("Password updated successfully.");
                            $scope.errormsg = "";
                            $scope.cpassword = "";
                            $scope.npassword = "";
                            $location.path("/changeemployerpassword");
                        } else {
                            alert("Something went wrong. Please try again.");
                            $scope.errormsg = "";
                            $scope.cpassword = "";
                            $scope.npassword = "";
                            $location.path("/changeemployerpassword");
                        }
                    });
                }
            });
        }
    }
});