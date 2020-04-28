app.controller('seekerListController', function ($scope, $location, $routeParams, guideSeekerService) {
    $scope.seekers = [];
    $scope.viewSeekers = function () {
        guideSeekerService.viewSeekers().then(function (obj) {
            console.log(obj);
            $scope.seekers = obj.data.records;
            var i = 0;
            while (i < $scope.seekers.length) {
                $scope.seekers[i].profile_photo = "App/Backend/" + $scope.seekers[i].profile_photo;
                $scope.seekers[i].fname = $scope.seekers[i].fname + " " + $scope.seekers[i].lname;
                i = i + 1;
            }
            console.log($scope.seekers);
        });
    }
    $scope.viewSeekers();
});