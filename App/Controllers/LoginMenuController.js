app.controller('LoginMenuController', function ($scope, $location, $routeParams) {

    $scope.directToSeekerLogin = function () {
        var utype = 'Job Seeker';
        $location.path("/login").search({usertype: utype});
    }
    $scope.directToGuidanceLogin = function () {
        var utype = 'Career Guidance Officer';
        $location.path("/login").search({usertype: utype});
    }
    $scope.directToEmployerLogin = function () {
        var utype = 'Employer';
        $location.path("/login").search({usertype: utype});
    }
    $scope.directToAdminLogin = function () {
        $location.path("/adminlogin");
    }
});