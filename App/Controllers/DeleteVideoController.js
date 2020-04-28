app.controller('deleteVideoController', function ($scope, $location, loginSessionService, videoGalleryService, $routeParams) {
    $scope.video_id = $location.search().video_id;
    console.log($scope.video_id);
    $scope.cancel = function () {
        $location.path("/viewvideolist");
    }
    $scope.deleteVideo = function () {
        videoGalleryService.deleteVideo($scope.video_id).then(function (obj) {
            if (obj.data.records[0].status == 'ok') {
                alert("Video has been deleted successfully.");
                $location.path("/viewvideolist");
            } else {
                alert("Something went wrong. Please try again.");
                $location.path("/viewvideolist");
            }
        });
    }
});