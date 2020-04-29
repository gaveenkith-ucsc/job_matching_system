app.controller('guidanceListController', function ($scope, $location, $routeParams, guideSeekerService, $routeParams) {
    $scope.guidances = [];
    $scope.viewGuidances = function () {
        guideSeekerService.viewGuidances().then(function (obj) {
            console.log(obj);
            $scope.guidances = obj.data.records;
            var i = 0;
            while (i < $scope.guidances.length) {
                $scope.guidances[i].profile_photo = "App/Backend/" + $scope.guidances[i].profile_photo;
                $scope.guidances[i].fname = $scope.guidances[i].fname + " " + $scope.guidances[i].lname;
                i = i + 1;
            }
            console.log($scope.guidances);
        });
    }
    $scope.viewGuidance = function (nic_no) {
        $location.path("/viewGuidanceOfficer").search({nic_no: nic_no});
    }
    $scope.viewGuidances();
});