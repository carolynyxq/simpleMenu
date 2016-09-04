angular.module('myCtrl',[])
    .controller('startCtrl',function($scope,$http){
        $scope.list=[];//保存所有的菜谱数据到model
        //加载更多
        $scope.showmore=function(){
            $http.get('data/getFoodByPage.php?start=0'+$scope.list.length)
                .success(function(data){
                    $scope.list=$scope.list.concat(data);
                });
        };
        $http.get('data/getFoodByPage.php?start=0')
            .success(function(data){
               // console.log(data);
                $scope.list=$scope.list.concat(data);
            });
        /*搜索功能
        $scope.search=function($scope,$routeParams,$http){
            var url="data/getFoodByKwd.php?kwd="+$routeParams.kwd;
            $http.get(url)
                .success(function(data){
                    $scope.list=$scope.list.concat(data);
                });
        };
            $("#food").keypress(function(e){
                if(e.which==13){
                    //console.log($("#food").val());
                }
            });*/
    })
    .controller('detailCtrl',function($scope,$routeParams,$http){
        var url="data/getFoodById.php?fid="+$routeParams.fid;
        $http.get(url)
            .success(function(data){
                $scope.food=data;
                //console.log($scope.food);
            });
    });
