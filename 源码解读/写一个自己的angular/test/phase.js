const test = (scope)=>{
    const done = ()=>{
        console.log("complete");
    };
    scope.aValue = "abc";
    scope.counter = 0;
    scope.$watch(
        function(scope) { return scope.aValue; },
        function(newValue, oldValue, scope) {
            scope.counter++;
        }
    );
    scope.$evalAsync(function(scope) {
    });

    console.log(scope.counter);

    setTimeout(function() {
       console.log(scope.counter)
        done();
    }, 50);

}

export default test;
