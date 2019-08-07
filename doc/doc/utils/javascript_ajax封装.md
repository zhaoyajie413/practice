AJAX 的封装
================

>code:

```$xslt
/**
 * 发起网络请求
 * @param {object} param0
 * @param {string} callbackId
 * @return {RequestTask}
 */
export function request ({
                             url,
                             data,
                             header,
                             method,
                             dataType,
                             responseType
                         }, callbackId) {
    const {
        invokeCallbackHandler: invoke
    } = UniServiceJSBridge
    var body = null
    var timeout = (__uniConfig.networkTimeout && __uniConfig.networkTimeout.request) || 60 * 1000
    // 根据请求类型处理数据
    var contentType
    for (const key in header) {
        if (header.hasOwnProperty(key)) {
            if (key.toLowerCase() === 'content-type') {
                contentType = header[key]
                if (contentType.indexOf('application/json') === 0) {
                    contentType = 'json'
                } else if (contentType.indexOf('application/x-www-form-urlencoded') === 0) {
                    contentType = 'urlencoded'
                } else {
                    contentType = 'string'
                }
                break
            }
        }
    }
    if (method === 'GET') {
        url = setUrl(url, data)
    } else {
        if (!contentType) {
            /**
             * 跨域时部分服务器OPTION响应头Access-Control-Allow-Headers未包含Content-Type会请求失败
             */
            header['Content-Type'] = 'application/json'
            contentType = 'json'
        }
        if (typeof data === 'string' || data instanceof ArrayBuffer) {
            body = data
        } else {
            if (contentType === 'json') {
                try {
                    body = JSON.stringify(data)
                } catch (error) {
                    body = data.toString()
                }
            } else if (contentType === 'urlencoded') {
                let bodyArray = []
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        bodyArray.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                    }
                }
                body = bodyArray.join('&')
            } else {
                body = data.toString()
            }
        }
    }
    var xhr = new XMLHttpRequest()
    var requestTask = new RequestTask(xhr)
    xhr.open(method, url)
    for (var key in header) {
        if (header.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, header[key])
        }
    }

    var timer = setTimeout(function () {
        xhr.onload = xhr.onabort = xhr.onerror = null
        requestTask.abort()
        invoke(callbackId, {
            errMsg: 'request:fail timeout'
        })
    }, timeout)
    xhr.responseType = responseType.toLowerCase()
    xhr.onload = function () {
        clearTimeout(timer)
        let statusCode = xhr.status
        let res = responseType === 'TEXT' ? xhr.responseText : xhr.response
        if (responseType === 'TEXT' && dataType === 'JSON') {
            try {
                res = JSON.parse(res)
            } catch (error) {
                // 和微信一致解析失败不抛出错误
                // invoke(callbackId, {
                //   errMsg: 'request:fail json parse error'
                // })
                // return
            }
        }
        invoke(callbackId, {
            data: res,
            statusCode,
            header: parseHeaders(xhr.getAllResponseHeaders()),
            errMsg: 'request:ok'
        })
    }
    xhr.onabort = function () {
        clearTimeout(timer)
        invoke(callbackId, {
            errMsg: 'request:fail abort'
        })
    }
    xhr.onerror = function () {
        clearTimeout(timer)
        invoke(callbackId, {
            errMsg: 'request:fail'
        })
    }
    xhr.send(body)
    return requestTask
}

```
