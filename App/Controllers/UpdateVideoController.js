app.controller('updateVideoController', function ($scope, $location, loginSessionService, videoGalleryService, $routeParams) {
    $scope.video_id = $location.search().video_id;
    console.log($scope.video_id);
    $scope.loadData = function (video_id) {
        videoGalleryService.viewSingleVideo(video_id).then(function (obj) {
            $scope.vid = obj.data.records[0].video_id;
            $scope.vname = obj.data.records[0].video_name;
            $scope.link = obj.data.records[0].youtube_link;
            $scope.description = obj.data.records[0].description;
            $scope.author = obj.data.records[0].author;
        });
    }
    $scope.loadData($scope.video_id);

    $scope.updateVideo=function(){
        videoGalleryService.updateVideo($scope.vid, $scope.link, $scope.description,$scope.author).then(function (obj) {
           if(obj.data.records[0].status=='ok'){
               alert("Video has been updated successfully.");
               $location.path("/viewvideolist");
           }
           else{
               alert("Something went wrong. Please try again.");
               $location.path("/viewvideolist");
           }
        });
    }

});