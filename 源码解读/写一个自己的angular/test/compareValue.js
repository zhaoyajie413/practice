const test =(scope)=>{
    scope.aValue = [1, 2, 3];
    scope.counter = 0;
    scope.$watch(
        function(scope) { return scope.aValue },
        function(newValue, oldValue, scope) {
            scope.counter++;
        },
        true
    );
    scope.$digest();
    console.log(scope.counter==1);
    scope.aValue.push(4);
    scope.$digest();
    console.log(scope.counter==2);
}

export default test;
