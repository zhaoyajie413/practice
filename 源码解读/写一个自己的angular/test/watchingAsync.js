const test = (scope)=>{
    scope.aValue = [1, 2, 3];
    scope.asyncEvaluated = false;
    scope.$watch(
        function(scope) {
            if (!scope.asyncEvaluated) {
                scope.$evalAsync(function(scope) {
                    scope.asyncEvaluated = true;
                });
            }
            return scope.aValue;
        },
        function(newValue, oldValue, scope) { }
    );
    scope.$digest();
    console.log(scope.asyncEvaluated==true);
}
export default test;
