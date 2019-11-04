var app = angular.module("myApp",[]);
app.controller("AppCtrl", function($scope, $http){
       var refresh = function() {
        $http.get('/employeeList').then(function(response){
            var data = response.data;
            $scope.employeeList = data;
            $scope.employeelist = response.data;
            $scope.employee = null;
        })
    };
    refresh();
    $scope.addEmployee = function() {
        // console.log($scope.employee);
        $http.post('/employeeList', $scope.employee).then(function(response){
            // console.log(response);
            refresh();
            location.reload(true);
        })
        
    };
    
    $scope.remove = function(id) {
        // console.log(id);
        $http.delete('/employeeList/' + id).then(function(response){
            // console.log(response);
            refresh();
            location.reload(true);
        })
    };

    $scope.edit = function(employee){        
        $scope.employee = JSON.parse(JSON.stringify(employee));
        
    };

    $scope.update = function(){
        // console.log($scope.employee._id);
        $http.put('/employeeList/' + $scope.employee._id, $scope.employee).then(function(response){
            refresh();
            location.reload(true);
        })
      
    }
    $scope.deselect = function(){
        $scope.employee = "";
    }

   
});