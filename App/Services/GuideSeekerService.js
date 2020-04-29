app.service('guideSeekerService', function ($http, loginSessionService) {
    this.viewSeekers = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': loginSessionService.user_index
            },
            url: 'App/Backend/User/viewSeekersGuidanceApi.php'
        });
    }
    this.viewAcceptedSeekers = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': loginSessionService.user_index
            },
            url: 'App/Backend/User/viewAcceptedSeekersGuidanceApi.php'
        });
    }
    this.acceptSeekers = function (nic_no) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'guidance_no': loginSessionService.user_index,
                'seeker_no': nic_no
            },
            url: 'App/Backend/User/acceptSeekerApi.php'
        });
    }

});