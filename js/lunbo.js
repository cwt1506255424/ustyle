
   var Li = (document.getElementById("wrapL").children[0].offsetWidth+10);
   var obannerimg = document.getElementById("wrapL").children;
   var cbannerimg = obannerimg[0].cloneNode(true)
   $("wrapL").appendChild(cbannerimg);
   $("wrapL").style.width = Li*obannerimg.length+"px"
   
  var num = 0;
   $("rightL").onclick = function(){
	   num++;
	   if(num>=obannerimg.length){
		num=1	;
		$("wrapL").style.left = 0+"px";
	   }
		
	 move($("wrapL"),"left",-Li*num);
	}
	
   $("leftL").onclick = function(){
	   num--;
	   if(num<0){
		num=obannerimg.length-2;
		$("wrapL").style.left = -Li*(obannerimg.length-1)+"px";
	   }
		
	   move($("wrapL"),"left",-Li*num);
   }

var time = null;  
time = setInterval($("rightL").onclick,2000)

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
	 
   };