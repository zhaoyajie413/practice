# TextView属性XML详解

android:textColor:

	设置文本颜色 .颜色格式："#ffff0000" </br>
	
android:textSize

	设置文字大小，推荐度量单位”sp”，如”15sp” 
	
android:textStyle

	设置字形[bold(粗体) 0, italic(斜体) 1, bolditalic(又粗又斜) 2] 可以设置一个或多个，用“|”隔开  
	
android:typeface 
  
       设置文本字体，必须是以下常量值之一：normal 0, sans 1, serif 2, monospace(等宽字体) 3] 

android:singleLine  

       设置单行显示。如果和layout_width一起使用，当文本不能全部显示时，后面用“…”来表示。
       
android:textScaleX  

	设置文字之间间隔，默认为1.0f。分别设置0.5f/1.0f/1.5f/2.0f效果如下：  
	
android:text    

	设置显示文本.
	
android:lines 

	  设置文本的行数，设置两行就显示两行，即使第二行没有数据。  
android:maxLines

	    设置文本的最大显示行数，与width或者layout_width结合使用，超出部分自动换行，超出行数将不显示。  

android:minLines  

	  设置文本的最小行数，与lines类似。  
	  
android:maxLength  

	 限制显示的文本长度，超出部分不显示。
	 
android:minEms  

	设置TextView的宽度为最短为N个字符的宽度。与ems同时使用时覆盖ems选项。  

android:gravity

	 设置文本垂直位置，如设置成“center”，文本将垂直居中显示。
	 
android:autoLink   

	 设置是否当文本为URL链接/email/电话号码/map时，文本显示为可点击的链接。