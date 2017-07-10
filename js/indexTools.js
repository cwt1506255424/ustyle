	function $(id){
		return document.getElementById(id);
   };       
   var btn = document.getElementById("btn").children;//获取底部圆圈
   /* 右按钮*/
   var num = 0;
   $("right").onclick = function(){
		 num++   
		 if(num>= $("wrap").children.length){
			num=0;
		 }
	   for (var j =0;j<$("wrap").children.length;j++) {
		 
			 $("wrap").children[j].style.opacity =0;
		}
		 $("wrap").children[num].style.opacity =1;
		 /*圆按钮*/
	   for (var j =0;j<  $("wrap").children.length;j++) {
			btn[j].className="ccc";
		}
		btn[num].className="black";
   }
	 /* 左按钮*/
   $("left").onclick = function(){
	   num--;
	  if(num<0){
			num=$("wrap").children.length-1;
		 }
	   for (var j =0;j<  $("wrap").children.length;j++) {
			
			 $("wrap").children[j].style.opacity =0;
		}
		 $("wrap").children[num].style.opacity =1;
			/*元按钮*/
	   for (var j =0;j<  $("wrap").children.length;j++) {
			btn[j].className="ccc";
		}
		btn[num].className="black";
   }
  /* 底部小圆圈鼠标移入*/
 for (var i in btn) {
	btn[i].className="ccc";
	btn[0].className="black";
	btn[i].index = i;
	btn[i].onmouseover = function(){
		for (var j =0;j<  $("wrap").children.length;j++) {
			btn[j].className="ccc";
			 $("wrap").children[j].style.opacity =0;
		}
		btn[this.index].className="black";

		  $("wrap").children[this.index].style.opacity =1; 
	}
	btn[i].onmouseout=function(){
		for(var i=0;i<btn.length;i++){
			btn[i].className="ccc";
			$("wrap").children[i].style.opacity=0;
		}
		num=this.index;
		btn[num].className="black";
		$("wrap").children[num].style.opacity=1;
		time=setInterval($("right").onclick,3000);
	}
 }
/*让轮播图自己走，设置定时器*/
var time = null;  
time = setInterval($("right").onclick,3000);
/* 左右按钮的显示与隐藏*/
   $("box").onmouseover= function(){
		$("left").style.opacity = .9;
		$("right").style.opacity = .9;
		for(var i=0;i<$("wrap").children.length;i++){
			btn[i].className="ccc";
			$("wrap").children[i].style.opacity=0;	
		}
		btn[num].className="black";
		$("wrap").children[num].style.opacity=1;
		clearInterval(time);
	};
   $("box").onmouseout = function(){
		$("left").style.opacity = .55;
		$("right").style.opacity = .55;
		for(var i=0;i<$("wrap").children.length;i++){
			btn[i].className="ccc";
			$("wrap").children[i].style.opacity=0;	
		}
		btn[num].className="black";
		$("wrap").children[num].style.opacity=1;
		clearInterval(time);
		time=setInterval($("right").onclick,3000);
   };
