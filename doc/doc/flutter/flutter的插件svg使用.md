flutter的插件flutter——svg的使用；
=================

在pubsper.yaml中添加

```
 flutter_svg : ^0.10.3
```
 
参考代码：

```
	import 'package:flutter_svg/flutter_svg.dart';

	final String assetName = 'assets/image.svg';
	
	final Widget svg = new SvgPicture.asset(
	  assetName,
	  alignment: Alignment.centerRight,
	  semanticsLabel: 'Acme Logo'
	);
```