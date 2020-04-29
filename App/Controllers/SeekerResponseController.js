app.controller("seekerResponseController", function ($scope, loginSessionService, $location, seekerProfileService, $routeParams, guideSeekerService) {
    $scope.showerrormsg = false;
    $scope.errormsg = "";
    $scope.viewqualifications = false;
    $scope.showbutton = false;
    $scope.nic_no = $location.search().nic_no;
    $scope.type = $location.search().type;
    if ($scope.type == "new") {
        $scope.showbutton = true;
    } else {
        $scope.showbutton = false;
    }
    $scope.qualifications = [];
    $scope.loadData = function () {
        seekerProfileService.getSeekerDetails($scope.nic_no).then(function (obj) {
            console.log(obj);
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
            $scope.photo = "App/Backend/" + obj.data.records[0].photo;
            if ($scope.status == 'Graduated') {
                $scope.viewqualifications = true;
            } else {
                $scope.viewqualifications = false;
            }
            seekerProfileService.getQualification($scope.nic_no).then(function (obj) {
                $scope.qualifications = obj.data.records;

            });
        });
    }
    $scope.loadData();

    $scope.addResponse = function () {
        guideSeekerService.acceptSeekers($scope.nic_no).then(function (obj) {
            if (obj.data.records[0].status == 'ok') {
                alert("Job seeker has been accepted successfully.");
                $location.path("/seekerList");
            } else {
                alert("Something went wrong. Please try again.");
            }

        });
    }

});