对json的key进行排序
======================

很多时候我们都要对发往后台的数据进行验签。这个时候就要对发送的数据进行排序。

这里主要是用 **toLowerCase().localeCompare** 方法来进行大小比较

```
	var data={
			 "reqNo": "20180919105921000001",
			 "version": "1.0.0",
			 "channelId": "10001",
			 "cardId": "01234567890",
			 "transAmount": "1",
			 "type": "1",
			 "onlineTradeNo": "0",
			 "callBackURL": "http://www.baidu.com"

		}
		var keys=Object.keys(data);
		keys.sort(function(left,right){
			return left.toLowerCase().localeCompare(right.toLowerCase());
		})
		var dataString='';
		keys.map(function(k,i){
			dataString+=k+data[k]+(i<keys.length-1?"&":"");
		})
		document.write(dataString)
```