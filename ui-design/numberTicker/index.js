function NumberTicker (selector){
		this.$el=document.querySelector(selector);
		this.Spans=this.$el.querySelectorAll("span");
		this.SpansControls=[];
		this.nums=[];
		this.timer=null;
		this.render();
		this.duration=20;
	}
	NumberTicker.prototype.generate=function(){
		var _this=this;
		this.SpansControls=[];
		[].forEach.call(this.Spans,function(s,i){
			var item=new Object();
			item.$el=s;
			item.symbol=Math.random()>0.5?"+":"-";
			item.target=_this.nums[i];
			item.start=parseInt(s.innerText);
			item.duration=(_this.analyseDuration(item)+Math.floor(Math.random()*2)*10);
			item.draw=function(){
				_this.itemDraw(item);
			}
			_this.SpansControls.push(item);
		})
	}
	NumberTicker.prototype.itemDraw=function(item){
				if(item.duration<0)return;
				item.duration--;
				if(item.symbol=="+"){
					item.$el.innerText=item.start++;
					if(item.start>9)item.start=0;
				}else{
					item.$el.innerText=item.start--;
					if(item.start<0)item.start=9;
				}
			}
	NumberTicker.prototype.analyseDuration=function(item){
		console.log(item.target,item.start)
		var num=this.duration;
		if(item.symbol=="+"){
			return num+(item.target-item.start>0?item.target-item.start:item.target);
		}else if(item.symbol=="-" && item.target<=item.start){
			return num+(item.target-item.start)
		}else if(item.symbol=="-" && item.target>item.start){
			console.log("mio")
			return num+(item.start+10-item.target)
		}
		
	}
	NumberTicker.prototype.createArray=function(){
		for(var i=0;i<=9;i++){
			this.nums.push(i);
		}
	}
	NumberTicker.prototype.setTarget=function(t){
		this.target=t;
		this.nums=this.splitNums(t);
		this.generate();	
	}
	NumberTicker.prototype.splitNums=function(num){
		return num.toString().split("");
	}
	NumberTicker.prototype.render=function(){
		var _this=this;
		setInterval(function(){
			_this.SpansControls.forEach(function(it){
				it.draw();
			})
		},60)
	}
	
	var ticker=new NumberTicker(".number-ticker")
	var num=Math.floor(8765);
	ticker.setTarget(num);
	
	
