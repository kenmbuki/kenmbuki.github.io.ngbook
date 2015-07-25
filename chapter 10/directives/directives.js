var app = angular.module('myApp'[])
app.directive('ngCompare', function() {
    return{
        require: 'ngModel',
        link:(scope, currentEl, attrs, ctrl){
        var compareField = document.getElementsByName(attrs.ngCompare)[0];

        compareEl = angular.element(compareField);
        currentEl.on('keyup', function(){
        if (compareEl.val())
        })
        }
    }
});