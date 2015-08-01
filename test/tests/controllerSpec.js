describe('MainController', function(){
    beforeEach(module('myApp'));

    it('should assign the correct scope',
    inject(function($controller, $rootScope){
        var $scope = $rootScope.$new();
        $controller('MainController',{
            $scope: $scope
        });
        expect($scope.name).toEqual('Mbuki');
    }));

});