
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
		 console.log(num)
	   for (var j =0;j<  $("wrap").children.length;j++) {
		 
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
	  console.log(num)
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
		console.log(this.index)
		  $("wrap").children[this.index].style.opacity =1; 
	}
 }
/*让轮播图自己走，设置定时器*/
var time = null;  
time = setInterval($("right").onclick,3000)
/* 左右按钮的显示与隐藏*/
   $("box").onmouseover= function(){
	  $("left").style.opacity = .9;
	  $("right").style.opacity = .9;
	  clearInterval(time)
	};
   $("box").onmouseout = function(){
	  $("left").style.opacity = .55;
	  $("right").style.opacity = .55;
	  clearInterval(time)
	time = setInterval($("right").onclick,3000);
	 console.log("鼠标移出，打开定时器,自动播放")
   };
