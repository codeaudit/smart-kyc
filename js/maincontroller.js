
var crypbrokersApp = angular.module('crypbrokersApp', []);
crypbrokersApp.controller('crypbrokersCntl', function ($scope,$http) {
    $http.defaults.headers.post["Accept"] = "";
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.user={
        firstName:'',
        lastName:'',
        gender:'',
        address1:'',
        address2:'',
        address3:'',
        city:'',
        state:'',
        countryOfResidence:'',
        zip:'',
        mobile:'',
        dateOfBirth:'',
        idType:'',
        idNumber:'',
        idIssueDate:'',
        idValidTo:'',
    };
    $scope.company={
        name:'',
        phone:'',
        websiteUrl:'',
        address1:'',
        address2:'',
        address3:'',
        city:'',
        state:'',
        countryOfResidence:'',
        zip:'',
        mobile:'',
        dateOfBirth:'',
        idType:'',
        idNumber:'',
        idIssueDate:'',
        idValidTo:'',
    }

    /* add user details function [Start] */
    $scope.addUserInformation = function (){
            if(!$scope.user.firstName){
                // showError('Please enter name','error',false);
                return;
            }
            console.log($('#dob').val())
           $scope.user.dateOfBirth= $('#dob').val();
            $scope.user.idIssueDate=$('#issueDate').val();
        $scope.user.idValidTo=$('#validTo').val();

        console.log('users_first_name='+ $scope.user.firstName + '&&users_last_name=' +
                $scope.user.lastName + '&&users_gender=' + $scope.user.gender+
                '&&users_address1='+ $scope.user.address1 + '&&users_address2='+$scope.user.address2+
                '&&users_address3=' +$scope.user.address3+'&&users_city=' +$scope.user.city+
                '&&users_state='+ $scope.user.state + '&&users_country_residence='+$scope.user.countryOfResidence +
                '&&users_zip='+ $scope.user.zip + '&&users_mobile_number='+$scope.user.mobile +
                '&&users_date_of_birth='+ $scope.user.dateOfBirth + '&&users_id_type='+$scope.user.idType+
                '&&users_id_number='+ $scope.user.idNumber + '&&users_id_issue_date='+$scope.user.idIssueDate+
                '&&users_id_valid_date='+ $scope.user.idValidTo);
            var data = 'users_first_name='+ $scope.user.firstName + '&&users_last_name=' +
                $scope.user.lastName + '&&users_gender=' + 1+
                '&&users_address1='+ $scope.user.address1 + '&&users_address2='+$scope.user.address2+
                '&&users_address3=' +$scope.user.address3+'&&users_city=' +$scope.user.city+
                '&&users_state='+ $scope.user.state + '&&users_country_residence='+$scope.user.countryOfResidence +
                '&&users_zip='+ $scope.user.zip + '&&users_mobile_number='+$scope.user.mobile +
                '&&users_date_of_birth='+ $scope.user.dateOfBirth + '&&users_id_type='+$scope.user.idType+
                '&&users_id_number='+ $scope.user.idNumber + '&&users_id_issue_date='+$scope.user.idIssueDate+
                '&&users_id_valid_date='+ $scope.user.idValidTo;

        var postData = data;
            var requestObj = {
                method: 'POST',
                url: ServerApi+'addInfo.php',
                data: postData
            };

            // Making API Call [start]
            $http(requestObj).success(function (data) {
                console.log(data);
            showError('successfully added user information','success',true)

            }).error(function (data, err) {
              console.log(data);
                console.log(err);
                showError('errooooor','error',false)


            });
    };
    /* add user details function [End] */

    /* add company details function [Start] */
    $scope.addCompanyInformation = function (){

        var data = 'users_first_name='+ $scope.user.firstName + '&&users_last_name=' +
            $scope.user.lastName + '&&users_gender=' + $scope.user.gender+
            '&&users_address='+ $scope.user.address1 + '&&users_city=' +$scope.user.city+
            '&&users_state='+ $scope.user.state + '&&users_country_residence='+$scope.user.countryOfResidence +
            '&&users_zip='+ $scope.user.zip + '&&users_mobile_number='+$scope.user.mobile +
            '&&users_date_of_birth='+ $scope.user.dateOfBirth + '&&users_passport_id='+$scope.user.idType+
            '&&users_id_number='+ $scope.user.idNumber + '&&users_id_issue_date='+$scope.user.idIssueDate+
            '&&users_id_valid_date='+ $scope.user.idValidTo;

        var postData = data;
        var requestObj = {
            method: 'POST',
            url: ServerApi+'addInfo.php',
            data: postData
        };

        // Making API Call [start]
        $http(requestObj).success(function (data) {
            console.log(data);
            showError('successfully added user information','success',true)
        $scope.uniqurId= data.result.users_uniqueId;
        }).error(function (data, err) {
            console.log(data);
            console.log(err);

        });

    };
    /* add company details function [End] */
//init functions
    $scope.imageUpload = function () {
        console.log($('#my-awesome-dropzone').val());
        console.log($scope.data.images)
    }


});

