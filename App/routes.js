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
        .when('/endregistration', {
            templateUrl: 'App/Views/Pages/EndRegistration.html'
        })
        .when('/editemployerprofile', {
            templateUrl: 'App/Views/Pages/EmployerProfile.html'
        })
        .when('/changeemployerpassword', {
            templateUrl: 'App/Views/Pages/ChangeEmployerPassword.html'
        })
        .when('/changeguidancepassword', {
            templateUrl: 'App/Views/Pages/ChangeGuidancePassword.html'
        })
        .when('/changeseekerpassword', {
            templateUrl: 'App/Views/Pages/ChangeSeekerPassword.html'
        })
        .when('/editgraduateseekerprofile', {
            templateUrl: 'App/Views/Pages/EditGraduateSeekerProfile.html'
        })
        .when('/editguidanceprofile', {
            templateUrl: 'App/Views/Pages/EditGuidanceProfile.html'
        })
        .when('/editadminprofile', {
            templateUrl: 'App/Views/Pages/ChangeAdminPassword.html'
        })
        .when('/changeguidancephoto', {
            controller: 'editGuidancePhotoController',
            templateUrl: 'App/Views/Pages/ChangeGuidancePhoto.html'
        })
        .when('/changeseekerphoto', {
            templateUrl: 'App/Views/Pages/ChangeSeekerPhoto.html'
        })
        .when('/viewqualification', {
            templateUrl: 'App/Views/Pages/ViewQualifications.html'
        })
        .when('/addvideo', {
            templateUrl: 'App/Views/Pages/AddVideo.html'
        })
        .when('/viewvideolist', {
            templateUrl: 'App/Views/Pages/ViewVideoList.html'
        })
        .when('/updatevideo', {
            templateUrl: 'App/Views/Pages/UpdateVideo.html'
        })
        .when('/deletevideo', {
            templateUrl: 'App/Views/Pages/DeleteVideo.html'
        })
        .when('/seekerviewvideolist', {
            templateUrl: 'App/Views/Pages/SeekerViewVideoList.html'
        })
        .when('/seekerList', {
            templateUrl: 'App/Views/Pages/ViewSeekers.html'
        })
        .when('/guidanceList', {
            templateUrl: 'App/Views/Pages/ViewGuidanceList.html'
        })
        .when('/seekerAcceptedList', {
            templateUrl: 'App/Views/Pages/ViewSeekers-Accepted.html'
        })
        .when('/responseSeeker', {
            templateUrl: 'App/Views/Pages/GuidanceResponseSeeker.html'
        })
        .when('/viewGuidanceOfficer', {
            templateUrl: 'App/Views/Pages/ViewGuidanceOfficer.html'
        })
        .when('/addVacancy', {
            templateUrl: 'App/Views/Pages/AddNewVacancy.html'
        })
        .when('/postedVacancy', {
            templateUrl: 'App/Views/Pages/ViewPostedVacancies.html'
        })
        .when('/viewVacancy', {
            templateUrl: 'App/Views/Pages/ViewVacancy.html'
        })
        .when('/vieweligibleseekers', {
            templateUrl: 'App/Views/Pages/ViewEligibleSeekers.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})