app.controller('eligibleListController', function ($scope, $location, $routeParams, $routeParams, vacancyService) {
    $scope.vacancy_id = $location.search().vacancy_id;
    $scope.seekers = [];
    $scope.loadData = function () {
        vacancyService.viewEligibleList($scope.vacancy_id).then(function (obj) {
            console.log(obj);
            $scope.seekers = obj.data.records;
            var i = 0;
            while (i < $scope.seekers.length) {
                $scope.seekers[i].photo = "App/Backend/" + $scope.seekers[i].photo;
                $scope.seekers[i].fname = $scope.seekers[i].fname + " " + $scope.seekers[i].lname;
                i = i + 1;
            }
            console.log($scope.seekers);
        });
    }
    $scope.viewSeeker = function (nic_no) {
        $location.path("/responseSeeker").search({nic_no: nic_no, type: 'graduated'});
    }
    $scope.loadData();
});