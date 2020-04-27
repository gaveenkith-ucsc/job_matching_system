app.controller('viewQualificationsController', function ($scope, loginSessionService, seekerProfileService) {
    $scope.qualifications = [];
    $scope.loadData = function () {
        seekerProfileService.getQualifications().then(function (obj) {
            $scope.qualifications = obj.data.records;
            console.log($scope.qualification);
        });

    }
    $scope.loadData();
});