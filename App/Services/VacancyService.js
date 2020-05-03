app.service('vacancyService', function ($http, loginSessionService) {
    this.addVacancy = function (title, sector, qualification, jobprofile, candidateprofile, expdate) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'title': title,
                'sector': sector,
                'qualification': qualification,
                'jobprofile': jobprofile,
                'candidateprofile': candidateprofile,
                'expdate': expdate,
                'emp_id': loginSessionService.user_index
            },
            url: 'App/Backend/User/addVacancyApi.php'
        });
    }
    this.viewPostedVacancies = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'emp_id': loginSessionService.user_index
            },
            url: 'App/Backend/User/viewPostedVacancyApi.php'
        });
    }
    this.viewVacancy = function (vacancy_id) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'vacancy_id': vacancy_id
            },
            url: 'App/Backend/User/viewVacancyApi.php'
        });
    }
    this.viewEligibleList = function (vacancy_id) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'vacancy_id': vacancy_id
            },
            url: 'App/Backend/User/viewEligibleListApi.php'
        });
    }
    this.viewAppliedVacancies = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'seeker_id': loginSessionService.user_index
            },
            url: 'App/Backend/User/viewAppliedVacancyApi.php'
        });
    }
//notification service is implemented in backend.
});