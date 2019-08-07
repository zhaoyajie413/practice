###select 选框

select.options :选框下所有的option集合。

select.selectedIndex : 选框当前选择的option的序列号。

select.length :选框下所有option的长度。

select改写源码

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			.custom-select {
				position: relative;
				font-family: Arial;
			}
			.custom-select select{
				display: none;
			}
			.select-selected {
				background-color: DodgerBlue;
			}
			.select-selected:after {
				position: absolute;
				content: "";
				top: 14px;
				right: 10px;
				width: 0;
				height: 0;
				border: 6px solid transparent;
				border-color: #fff transparent transparent transparent;
			}
			
			.select-selected.select-arrow-active:after {
				border-color: transparent transparent #fff transparent;
				top: 7px;
			}
			
			.select-items div,
			.select-selected {
				color: #ffffff;
				padding: 8px 16px;
				border: 1px solid transparent;
				border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
				cursor: pointer;
				user-select: none;
			}
			
			.select-items {
				position: absolute;
				background-color: DodgerBlue;
				top: 100%;
				left: 0;
				right: 0;
				z-index_home: 99;
			}
			
			.select-hide {
				display: none;
			}
			
			.select-items div:hover,
			.same-as-selected {
				background-color: rgba(0, 0, 0, 0.1);
			}
		</style>
	</head>
	<body>
		<h1>自定义选择框</h1>
		<div class="custom-select" style="width:200px;">
			<select>
				<option value="0">Select car</option>
				<option value="1">Audi</option>
				<option value="2">BMW</option>
				<option value="3">Citroen</option>
				<option value="4">Ford</option>
				<option value="5">Honda</option>
				<option value="6">Jaguar</option>
				<option value="7">Land Rover</option>
				<option value="8">Mercedes</option>
				<option value="9">Mini</option>
				<option value="10">Nissan</option>
				<option value="11">Toyota</option>
				<option value="12">Volvo</option>
			</select>
		</div>
	</body>
	<script>

		var x,a,b,selElmnt,wrapper;
		
		wrapper=document.querySelector(".custom-select");
		selElmnt=document.querySelector("select");
		/* 已选中 */
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		wrapper.appendChild(a);
		
		/*点击a显示隐藏optios*/
		a.addEventListener("click", function(e) {
			e.stopPropagation();			
			
			//关闭其他选框
			closeAllSelect(this);
			
			/* 点击a的时候显示隐藏options */
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
		
		/*模拟options容器*/
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		
		/* 添加option选项 */
		for (j = 1; j < selElmnt.length; j++) {

			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function(e) {
				/*when an item is clicked, update the original select box,
				and the selected item:*/
				var y, i, k, s, h;
				
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				/* select-selected容器 */
				h = this.parentNode.previousSibling;
				
				for (i = 0; i < s.length; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						
						y = this.parentNode.getElementsByClassName("same-as-selected");
						for (k = 0; k < y.length; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
			})
			b.appendChild(c);
		}
		
		/* 关闭选框 */
		function closeAllSelect(elmnt) {
			
			var x, y, i, arrNo = [];
			x = document.getElementsByClassName("select-items");
			y = document.getElementsByClassName("select-selected");
		
			for (i = 0; i < y.length; i++) {
				if (elmnt == y[i]) {
					arrNo.push(i)
				} else {
					y[i].classList.remove("select-arrow-active");
				}
			}
			
			for (i = 0; i < x.length; i++) {
				if (arrNo.indexOf(i)) {
					x[i].classList.add("select-hide");
				}
			}
		}
		
		/* 将optios容器添加到wrapper */
		wrapper.appendChild(b);


		document.addEventListener("click", closeAllSelect);
	</script>
</html>


```
