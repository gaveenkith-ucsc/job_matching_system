app.service('videoGalleryService', function ($http) {
    this.addVideo = function (name, link, description, author) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'name': name,
                'link': link,
                'description': description,
                'author': author
            },
            url: 'App/Backend/User/addVideoApi.php'
        });
    }
});