var app = angular.module('tvet-app', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngSanitize']).filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}])