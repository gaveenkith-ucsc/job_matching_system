app.controller("viewEmpProfileController", function ($scope, employerProfileService, loginSessionService, $location) {

    $scope.emp_id = $location.search().emp_id;

    $scope.loadData = function () {
        employerProfileService.getEmployerDetails( $scope.emp_id ).then(function (obj) {
            $scope.oname = obj.data.records[0].oname;
            $scope.email = obj.data.records[0].email;
            $scope.add1 = obj.data.records[0].add1;
            $scope.add2 = obj.data.records[0].add2;
            $scope.add3 = obj.data.records[0].add3;
            $scope.mobileno = "0" + obj.data.records[0].mobileno;
            $scope.aboutorganization = obj.data.records[0].aboutorganization;
        });
    }

    $scope.loadData();
});