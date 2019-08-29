const test=(scope)=>{
    scope.aValue = [1, 2, 3];
    scope.$watch(
        function(scope) {
            //死循环
            scope.$evalAsync(function(scope) { });
            return scope.aValue;
        },
        function(newValue, oldValue, scope) { }
    );
    scope.$digest();
}
export default test;
