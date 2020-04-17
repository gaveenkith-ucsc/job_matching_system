app.config(function ($routeProvider, $locationProvider, $httpProvider) {

    'use strict';
    $locationProvider.html5Mode({enabled: true});
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8; multipart/form-data';

    $routeProvider
        .when('/', {
            templateUrl: 'App/Views/Pages/LoginMenu.html'
        })
        .when('/login', {
            templateUrl: 'App/Views/Pages/StudentLogin.html'
        })
        .when('/adminlogin', {
            templateUrl: 'App/Views/Pages/AdminLogin.html'
        })
        .when('/regstep2', {
            templateUrl: 'App/Views/Pages/StudentRegistrationStep2.html'
        })
        .when('/regstep3', {
            templateUrl: 'App/Views/Pages/QualificationsDetailsStep.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})