const test = (scope)=>{
    var done =()=>console.log("complete");
    scope.counter = 0;
    scope.$watch(
        function(scope) {
            scope.counter++;
            return scope.aValue;
        },
        function(newValue, oldValue, scope) { }
    );
    scope.$applyAsync(function(scope) {
        scope.aValue = 'abc';
    });
    scope.$applyAsync(function(scope) {
        scope.aValue = 'def';
    });
    scope.$digest();
    console.log(scope.counter);
    setTimeout(function() {
        console.log(scope.counter);
        done();
    }, 50);

}

export default test;
