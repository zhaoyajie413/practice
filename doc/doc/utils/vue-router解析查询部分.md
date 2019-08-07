vue-router解析查询部分
======================

code:

```angular2
  function parseQuery (query) {
        var res = {};

        query = query.trim().replace(/^(\?|#|&)/, '');

        if (!query) {
            return res
        }

        query.split('&').forEach(function (param) {
            var parts = param.replace(/\+/g, ' ').split('=');
            console.log(parts)
            var key = decodeURIComponent(parts.shift());
            console.log(key)
            var val = parts.length > 0
                ?  decodeURIComponent(parts.join('='))
                : null;
            if (res[key] === undefined) {
                res[key] = val;
            } else if (Array.isArray(res[key])) {
                res[key].push(val);
            } else {
                res[key] = [res[key], val];
            }
        });

        return res
    }
```
