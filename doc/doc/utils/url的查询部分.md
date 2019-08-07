  url查询部分的获取
  ====================
  
  ```
  function queryMap(url) {
          if (typeof url === 'string') {
              const urls = url.split('?')
  
              url = urls[0]
  
              const params = {};
              (urls[1] || '').split('&').forEach(function (pair) {
                  if (pair) {
                      const pairs = pair.split('=')
                      params[pairs[0]] = encodeURIComponent(pairs[1])
                  }
              })
  
              return params
          }
          return url
      }
      
  ```
