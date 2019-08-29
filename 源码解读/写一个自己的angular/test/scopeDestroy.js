const test = (scope)=>{
    scope.aValue = 'abc';
    scope.counter = 0;
    var destroyWatch = scope.$watch(
        function(scope) { return scope.aValue; },
        function(newValue, oldValue, scope) {
            scope.counter++;
        }
    );
    scope.$digest();
   console.log(scope.counter);
    scope.aValue = 'def';
    scope.$digest();
   console.log(scope.counter);
    destroyWatch();
    scope.$digest();
    console.log(scope.counter);
}

export default test;
