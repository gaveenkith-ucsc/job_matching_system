app.controller("viewGuidanceOfficerController", function ($scope, loginSessionService, $location, guidanceProfileService, $routeParams) {
    $scope.nic_no = $location.search().nic_no;
    $scope.loadData = function () {
        guidanceProfileService.getGuidanceDetails($scope.nic_no).then(function (obj) {
            $scope.fname = obj.data.records[0].fname;
            $scope.mname = obj.data.records[0].mname;
            $scope.lname = obj.data.records[0].lname;
            $scope.email = obj.data.records[0].email;
            $scope.add1 = obj.data.records[0].add1;
            $scope.add2 = obj.data.records[0].add2;
            $scope.add3 = obj.data.records[0].add3;
            $scope.mobileno = "0" + obj.data.records[0].mobileno;
            $scope.experience = obj.data.records[0].experience;
            $scope.dob = obj.data.records[0].dob;
            $scope.gender = obj.data.records[0].gender;
            $scope.nicno = obj.data.records[0].nic_no;
            $scope.photo = "App/Backend/" + obj.data.records[0].photo;
        });
    }
    $scope.loadData();
});