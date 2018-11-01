var print=(function(){
		var arr=[];
		var title=document.querySelector("title").innerText;
		document.body.style.color="#FFFFFF";
		document.body.style.fontSize="13px";
		document.body.style.backgroundColor="#000000";
		var _color="#fff";
		setInterval(function(){
			_color=_color=="#fff"?"#000":"#fff";
			document.getElementById("blink").style.color=_color;
			
		},500)
		return {
			add:function(m){
				arr.push(m+"");
				this.render();
			},
			render:function(){
				var str=arr.join("</br>");
				console.log(arr);
				document.body.innerHTML="<div ><p style='color=silver;'>"+title+" 输出结果：</p>"+str+"<span id='blink'>_</span></div>";
			}
		}
})()
