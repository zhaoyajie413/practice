MaterialApp 主要属性如下：
=======================

	title ： 在任务管理窗口中所显示的应用名字
	theme ： 应用各种 UI 所使用的主题颜色
	color ： 应用的主要颜色值（primary color），也就是安卓任务管理窗口中所显示的应用颜色
	home ： 应用默认所显示的界面 Widget
	routes ： 应用的顶级导航表格，这个是多页面应用用来控制页面跳转的，类似于网页的网址
	initialRoute ：第一个显示的路由名字，默认值为 Window.defaultRouteName
	onGenerateRoute ： 生成路由的回调函数，当导航的命名路由的时候，会使用这个来生成界面
	onLocaleChanged ： 当系统修改语言的时候，会触发å这个回调
	navigatorObservers ： 应用 Navigator 的监听器
	debugShowMaterialGrid ： 是否显示 纸墨设计 基础布局网格，用来调试 UI 的工具
	showPerformanceOverlay ： 显示性能标签，https://flutter.io/debugging/#performanceoverlay
	checkerboardRasterCacheImages 、showSemanticsDebugger、debugShowCheckedModeBanner 各种调试开关

title
------------
这个和启动图标名字是不一样的，和当前 Activity 的名字也是不一样的。 这个 Title 是用来定义任务管理窗口界面所看到应用名字的。在原生 Android 系统中点击圆圈 Home 按钮右边的方块按钮就会打开多任务切换窗口。

theme
------------
定义应用所使用的主题颜色，在纸墨设计中定义了 primaryColor、accentColor、hintColor 等颜色值。可以通过这个来指定一个 ThemeData 定义应用中每个控件的颜色。

home
-------------
这个是一个 Widget 对象，用来定义当前应用打开的时候，所显示的界面。

color
------------
定义系统中该应用的主要颜色

routes
------------
定义应用中页面跳转规则。 该对象是一个 Map<String, WidgetBuilder>。
当使用 Navigator.pushNamed 来路由的时候，会在 routes 查找路由名字，然后使用 对应的 WidgetBuilder 来构造一个带有页面切换动画的 MaterialPageRoute。如果应用只有一个界面，则不用设置这个属性，使用 home 设置这个界面即可。

如果 home 不为 null，当 routes 中包含 Navigator.defaultRouteName（'/'） 的时候会出错，两个都是 home 冲突了。

如果所查找的路由在 routes 中不存在，则会通过 onGenerateRoute 来查找。

initialRoute
----------------
指定默认显示的路由名字，默认值为 Window.defaultRouteName

onGenerateRoute
------------------
路由回调函数

比如，我们可以做如下修改：

```
class MyApp extends StatelessWidget {
  final Map<String, WidgetBuilder> _routes = <String, WidgetBuilder>{
    Navigator.defaultRouteName: (context) =>
    new MyHomePage(title: 'Flutter Demo Home Page')
  };

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter App',
      debugShowMaterialGrid: true,
      routes: _routes,
      theme: new ThemeData(
      // This is the theme of your application.
      //
      // Try running your application with "flutter run". You'll see
      // the application has a blue toolbar. Then, without quitting
      // the app, try changing the primarySwatch below to Colors.green
      // and then invoke "hot reload" (press "r" in the console where
      // you ran "flutter run", or press Run > Hot Reload App in IntelliJ).
      // Notice that the counter didn't reset back to zero -- the application
      // is not restarted.
        primarySwatch: Colors.cyan,
      ),
      // 使用 _routes 中定义的 默认路由来替代 home
      //home: new MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}
```



