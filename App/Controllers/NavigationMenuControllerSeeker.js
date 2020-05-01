app.controller('collapseDemoCtrlSeeker', function ($scope, $location, loginSessionService) {
    $scope.isCollapsedProfile = true;
    $scope.showqualification = false;
    $scope.isCollapsedVideo = true;
    $scope.isCollapsedGuidance = true;
    $scope.isCollapsedVacancy = true;

    if (loginSessionService.user_type == 'seeker-graduate') {
        $scope.showqualification = true;
        $scope.showvacancy = true;
    } else {
        $scope.showqualification = false;
        $scope.showvacancy = false;
    }
    $scope.editProfile = function () {
        $location.path("/editgraduateseekerprofile");
    }

    $scope.changePassword = function () {
        $location.path("/changeseekerpassword");
    }
    $scope.changePhoto = function () {
        $location.path("/changeseekerphoto");
    }
    $scope.viewQualification = function () {
        $location.path("/viewqualification");
    }
    $scope.showVideo = function () {
        $location.path("/seekerviewvideolist");
    }
    $scope.showGuidance = function () {
        $location.path("/guidanceList");
    }
    $scope.viewVacancy = function () {
        $location.path("/viewappliedvacancies");
    }
});