app.controller('videoListController', function ($scope, $location, loginSessionService, videoGalleryService,$routeParams) {
    $scope.videolist = [];
    $scope.viewVideoList = function () {
        videoGalleryService.viewVideoList().then(function (obj) {
            $scope.videolist = obj.data.records;
            console.log($scope.videolist);
        });
    }
    $scope.updateVideo=function(video_id){
        $location.path("/updatevideo").search({video_id:video_id});
    }
    $scope.deleteVideo=function(video_id){
        $location.path("/deletevideo").search({video_id:video_id});
    }
    $scope.viewVideoList();
});