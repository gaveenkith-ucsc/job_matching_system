app.controller('addVacancyController', function ($scope, $location, loginSessionService, vacancyService) {
    $scope.title = "";
    $scope.jobprofile = "";
    $scope.candidateprofile = "";
    $scope.expdate = "";
    $scope.sector = {
        "type": "select",
        "name": "Service",
        "value": "Select from here",
        "values": ["Select from here", "Agriculture,Hunting and Forestry", "Fishing", "Mining and Quarrying", "Manufactory",
            "Electricity, Gas and Water Supply", "Construction", "Wholesale and Retail Trade", "Hotel and Restaurants",
            "Transport,Storage and Communications", "Financial Inter-mediation", "Real Estate and Renting", "Public Administration",
            "Education", "Health", "Computing"]
    };

    $scope.qtype = {
        "type": "select",
        "name": "Service",
        "value": "Select from here",
        "values": ["Select from here", "Higher Diploma", "Diploma", "Certificate"]
    };
    $scope.saveChanges = function (exp_date) {
        vacancyService.addVacancy($scope.title, $scope.sector.value, $scope.qtype.value, $scope.jobprofile, $scope.candidateprofile, exp_date).then(function (obj) {
            if (obj.data.records[0].status == 'ok') {
                alert("Vacancy has been added successfully.");
                $scope.title = "";
                $scope.jobprofile = "";
                $scope.candidateprofile = "";
                $scope.expdate = "";
            } else {
                alert("Something went wrong. Please try again.");
                $scope.title = "";
                $scope.jobprofile = "";
                $scope.candidateprofile = "";
                $scope.expdate = "";
            }
        });
    }
});