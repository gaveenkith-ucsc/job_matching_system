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
});