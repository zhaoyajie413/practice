const test =(scope)=>{

    scope.aValue = [1, 2, 3];
    scope.asyncEvaluated = false;
    scope.asyncEvaluatedImmediately = false;

    scope.$watch(
        function(scope) { return scope.aValue; },
        function(newValue, oldValue, scope){
            scope.$evalAsync(function(scope) {
                            scope.asyncEvaluated = true;
                });
             scope.asyncEvaluatedImmediately = scope.asyncEvaluated;
        }
);
scope.$digest();

console.log(scope.asyncEvaluated == true);
console.log(scope.asyncEvaluatedImmediately ==false);
}

export default test;
