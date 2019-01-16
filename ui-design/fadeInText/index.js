
var Texts=document.querySelectorAll(".text-fade-in");
		var TextsMap=new Object();
		[].forEach.call(Texts,function(it,k){
			TextsMap[k]=it;
			generate(it)
		});
		var timer=setInterval(render,50)
		function render(){
			if(Object.keys(TextsMap).length==0)clearInterval(timer)
			for(var k in TextsMap){
				var it =TextsMap[k];
				var spans=it.querySelectorAll("span");
				if(it.start==it.length){
					delete TextsMap[k];
					return;
				};
				spans[it.start].style.display="inline-block";
				it.start++;
			}
		}
		function generate(it){
			var text,strList,html;
			html="";
			text=it.innerText;
			console.log(text);
			it.start=0;
			it.length=text.length;
			strList=text.split("");
			for(var i=0;i<strList.length;i++){
				html+='<span style="display:none">'+strList[i]+'</span>'
			}
			it.innerHTML=html;
			it.style.opacity="1";
		}