(function(){
			var Buttons=document.querySelectorAll(".btn");
			Array.prototype.forEach.call(Buttons,function(btn){
				btn.addEventListener("click",createWave);
			})
			
			function createWave(e){
				var d,x,y,tw,th,event;
				var wave=document.createElement("div");
				
				event=window.event||e;
				x=event.clientX;
				y=event.clientY;
				
				this.appendChild(wave);
				
				tw=this.offsetWidth;
				th=this.offsetHeight
				d=Math.max(tw,th);
				
				wave.style.width=d+"px";
				wave.style.height=d+"px";
				
				wave.style.top=(y-d/2)+"px";
				wave.style.left=(x-d/2)+"px";
				
				wave.classList.add("btn-wave");
				
				setTimeout(function(){
					wave.remove();
				},900)
			}
			function randomNum(num){
				return Math.floor(Math.random()*num);
			}
		})()