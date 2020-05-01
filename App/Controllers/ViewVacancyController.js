app.controller('viewVacancyController', function ($scope, $location, loginSessionService, $routeParams, vacancyService) {
    $scope.vacancy_id = $location.search().vacancy_id;
    $scope.loadData = function () {
        vacancyService.viewVacancy($scope.vacancy_id).then(function (obj) {
            console.log(obj);
            $scope.vacancyno = obj.data.records[0].vacancy_id;
            $scope.title = obj.data.records[0].title;
            $scope.sector = obj.data.records[0].sector;
            $scope.qtype = obj.data.records[0].qualification_type;
            $scope.jobprofile = obj.data.records[0].job_profile;
            $scope.candidateprofile = obj.data.records[0].candidate_profile;
            $scope.expdate = obj.data.records[0].expiration_date;
            $scope.addeddate = obj.data.records[0].added_date;
        });
    }
    $scope.loadData();
});