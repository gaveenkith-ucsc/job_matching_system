app.controller('appliedVacanciesController', function ($scope, $location, $routeParams, vacancyService, $routeParams) {
    $scope.vacancies = [];
    vacancyService.viewAppliedVacancies().then(function (obj) {
        $scope.vacancies = obj.data.records;
    });
    $scope.viewVacancy = function (vacancy_id) {
        $location.path('/viewseekervacancy').search({vacancy_id: vacancy_id});
    }
    $scope.viewEmployer = function (oid) {
        $location.path('/viewempprofile').search({emp_id: oid});
    }

});