
   var Li = (document.getElementById("wrapL").children[0].offsetWidth+10);//获取单个图片li的宽
   console.log(Li)
   var obannerimg = document.getElementById("wrapL").children;//获取li
   var cbannerimg = obannerimg[0].cloneNode(true)//克隆
   $("wrapL").appendChild(cbannerimg);
   $("wrapL").style.width = Li*obannerimg.length+"px"
   /* 右按钮*/
  var num = 0;
   $("rightL").onclick = function(){
	   num++;
	   if(num>=obannerimg.length){
		num=1	;
		$("wrapL").style.left = 0+"px";
	   }
		console.log(num)
	 move($("wrapL"),"left",-Li*num);
	}
	 /* 左按钮*/
   $("leftL").onclick = function(){
	   num--;
	   if(num<0){
		num=obannerimg.length-2;
		$("wrapL").style.left = -Li*(obannerimg.length-1)+"px";
	   }
		console.log(num)
	   move($("wrapL"),"left",-Li*num);
   }
/*让轮播图自己走，设置定时器*/
var time = null;  
time = setInterval($("rightL").onclick,2000)
/* 左右按钮的显示与隐藏*/
   $("boxL").onmouseover= function(){
	  $("leftL").style.display = "block";
	  $("rightL").style.display = "block";
	  clearInterval(time)
	};
   $("boxL").onmouseout = function(){
	  $("leftL").style.display = "none";
	  $("rightL").style.display = "none";
	  clearInterval(time)
	 time = setInterval($("rightL").onclick,2000);
	 console.log("鼠标移出，打开定时器,自动播放")
   };