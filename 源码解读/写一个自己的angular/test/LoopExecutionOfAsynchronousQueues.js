const test =(scope)=>{
    scope.aValue = [1, 2, 3];
    scope.asyncEvaluatedTimes = 0;
    scope.$watch(
        function(scope) {
            if (scope.asyncEvaluatedTimes < 2) {
                scope.$evalAsync(function(scope) {
                    scope.asyncEvaluatedTimes++;
                });
            }
            return scope.aValue;
        },
        function(newValue, oldValue, scope) { }
    );

    scope.$digest();
    console.log(scope.asyncEvaluatedTimes);
}

export default test;
