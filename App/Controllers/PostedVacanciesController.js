app.controller('postedVacanciesController', function ($scope, $location, $routeParams, vacancyService, $routeParams) {
    $scope.vacancies = [];
    vacancyService.viewPostedVacancies().then(function (obj) {
        $scope.vacancies = obj.data.records;
    });
    $scope.viewVacancy = function (vacancy_id) {
        $location.path('/viewVacancy').search({vacancy_id:vacancy_id});
    }
    $scope.viewSeekers = function (vacancy_id) {
        $location.path('/vieweligibleseekers').search({vacancy_id:vacancy_id});
    }

});