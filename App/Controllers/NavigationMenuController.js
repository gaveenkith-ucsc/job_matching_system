app.controller('collapseDemoCtrl', function ($scope, $location) {
    $scope.isCollapsedProfile = true;
    $scope.isCollapsedVacancy = true;

    $scope.editProfile = function () {
        $location.path("/editemployerprofile");
    }

    $scope.changePassword = function () {
        $location.path("/changeemployerpassword");
    }
    $scope.addVacancy = function () {
        $location.path("/addVacancy");
    }
    $scope.viewPostedVacancy = function () {
        $location.path("/postedVacancy");
    }
});