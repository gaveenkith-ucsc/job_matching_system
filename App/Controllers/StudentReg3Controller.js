app.controller('StudentReg3Controller', function ($scope, $location, $filter, registrationSessionService, registrationUpdateService) {
    $scope.institute = "";
    $scope.certificateno = "";
    $scope.completedyear = "";
    $scope.showerrormsg = false;
    $scope.errormsg = "";
    $scope.showerrormsg2 = false;
    $scope.errormsg2 = "";
    $scope.flag = "";
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
    $scope.qualifications = [];

    $scope.addQualification = () => {
        $scope.qualifications.push({
            sector: $scope.sector.value,
            type: $scope.qtype.value,
            institute: $scope.institute,
            certificateno: $scope.certificateno,
            completedyear: $scope.completedyear
        });

        console.log($scope.qualifications);
    }
    $scope.back = function () {
        $location.path("/regstep2");
    }
    $scope.next = function () {
        $scope.showerrormsg = false;
        if ($scope.qualifications.length > 0) {
            registrationSessionService.seekerStep3($scope.qualifications);
            registrationSessionService.viewSeekerStep3();
            $scope.showerrormsg2 = false;
            registrationUpdateService.addGraduateSeeker().then(function (obj) {
                if (obj.data.records[0].status == "ok") {
                    for (i = 0; i < $scope.qualifications.length; ++i) {
                        registrationUpdateService.addQualification(registrationSessionService.nic_no, $scope.qualifications[i].sector,
                            $scope.qualifications[i].type, $scope.qualifications[i].institute, $scope.qualifications[i].certificateno,
                            $scope.qualifications[i].completedyear).then(function (obj) {
                            if (obj.data.records[0].status == "ok") {
                                $scope.flag = obj.data.records[0].status;
                            } else {
                                $scope.flag = obj.data.records[0].status;
                            }

                        });
                    }
                    $location.path("/endregistration").search({usertype: 'Job Seeker', status: 'success'});
                }
                //$location.path("/endregistration");
                //if (obj.data.records[0].status == "ok") {
                // $location.path("/endregistration").search({usertype: 'Job Seeker', status: 'success'});
                //} else {
                //  $location.path("/endregistration").search({usertype: 'Job Seeker', status: 'fail'});
                //}
            });
        } else {
            $scope.showerrormsg2 = true;
            $scope.errormsg2 = "Please add at least one qualification to the list.";
        }

    }
    $scope.formValidation = function () {
        $scope.showerrormsg2 = false;
        if ($scope.institute.length == 0 || $scope.certificateno.length == 0 || $scope.completedyear.length == 0
            || $scope.sector.value == "Select from here" || $scope.qtype.value == "Select from here") {
            $scope.showerrormsg = true;
            $scope.errormsg = "Please fill all required fields";
        } else {
            $scope.addQualification();
        }
    }
});
