vue-router查询序列化
=========================
>code:
```angular2

    function stringifyQuery (obj) {
        var res = obj ? Object.keys(obj).map(function (key) {
            var val = obj[key];

            if (val === undefined) {
                return ''
            }

            if (val === null) {
                return encode(key)
            }

            if (Array.isArray(val)) {
                var result = [];
                val.forEach(function (val2) {
                    if (val2 === undefined) {
                        return
                    }
                    if (val2 === null) {
                        result.push(encode(key));
                    } else {
                        result.push(encode(key) + '=' + encode(val2));
                    }
                });
                return result.join('&')
            }

            return encode(key) + '=' + encode(val)
        }).filter(function (x) { return x.length > 0; }).join('&') : null;
        return res ? ("?" + res) : ''
    }

```
