const test = (scope)=>{
    scope.aValue = 'abc';
    scope.counter = 0;
    scope.$watch(
        function(scope) { return scope.aValue; },
        function(newValue, oldValue, scope) {
            scope.counter++;
        }
    );
    scope.$evalAsync(function(scope) {
        ab=1;
    });

    setTimeout(function() {
        console.log(scope.counter);
    }, 50);

}

export default test;
