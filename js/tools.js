//获取对象*****
function $(id){
	return document.getElementById(id);	
}
function $create(tagName){
	return document.createElement(tagName);
}


//1.函数名：求任意数的阶乘
//功能：阶乘
//参数：任意数的阶乘
//返回值:任意数的阶乘
function jiecheng(num){
	var x=1;
	for(var i=1;i<=num;i++){
		x=x*i;
	}
	 return x;			
}

//2.函数名：用递归做的任意数的阶乘
//功能：阶乘
//参数：任意数的阶乘
//返回值：任意数的阶乘
	function nn(num1){
		if(num1==1){
			return 1;
		}
		return num1* nn(num1-1);
	}


//4 函数名：用递归做的斐波那契额数
//功能：
//参数：
//返回值：
function fbnq(n){//第三步实现结束递归的代码
	var n3=n1+n2;
	console.log(n3);
	i++;//记录产生斐波那契数的个数
	if(i>n){
	 return;		
	}
	n1=n2;
	n2=n3;
	return fbnq(n);		
}


//5 函数名：求两个数的最大公约数
//功能：
//参数：已知两个数
//返回值：最大公约数

function convention(x,y){		
	var z=x%y;
	if(z==0){
		return y;			
	}
	x=y;
	y=z;
	return convention(x,y);
}

//6查找是否有n 
/*
功能：在数组中查找某个元素
参数1：数组
参数2：目标元素
返回值：true-找到了；false-没找到
*/
function has(arr,n){
	var isZhengchu=false;
	for(var i=0;i<arr.length;i++){  //循环遍历
		if(arr[i]==n){
			return true;
		}
	}
	return false;
}

/*7
功能：任意两个整数之间的随机数
参数1：开始数
参数2：结束数
返回值：两个整数之间的随机数
*/
function numRandom(min,max){
	var num=max-min;
	num=parseInt(Math.random()*(num+1));
	return num+min;
}

/*
功能：产生#ffff内的随机颜色
返回值：#开头的十六进制6位颜色值
**/	
function randomColor(){
	var str="#";
	for(var i=0;i<6;i++){
		var num1=areaRandom(0,16);
		str+=num1.toString(16);
	}
	return str;
}
	
/*8
功能：返回汉字星期
参数：日期对象
返回值：字符串星期（汉字）如：星期一
*/
function getWeek(date){
	switch(date.getDay()){//getDay()星期，从0开始
		case 0:return "星期日";
		case 1:return "星期一";
		case 2:return "星期二";
		case 3:return "星期三";
		case 4:return "星期四";
		case 5:return "星期五";
		case 6:return "星期六";
		default:break;
	}
}

/*9
功能：返回日期（yyyy年MM月dd日）
参数：日期对象
返回值：字符串日期（yyyy年MM月dd日）
*/
function formatDate(date){
	var year=date.getFullYear();//2017
	var month=date.getMonth()+1;//month从0开始
	var day=date.getDate();////返回天
	return year+"年"+month+"月"+day+"日";
}


	/*
	功能：计算两个日期之间的天数
	参数1：第一个日期对象
	参数1：第二个日期对象
	返回值：日期天数的差（整数）
	**/	
	function dateDifference(date1,date2){
		var num1=date1.getTime();
		var num2=date2.getTime();
		return Math.ceil((num2-num1)/(1000*60*60*24));
	}
	
	/*
	功能：计算两个日期之间的月份差
	参数1：第一个日期对象
	参数1：第二个日期对象
	返回值：是 true 不是 false
	*/
	function getMonthCha(date1,date2){
		if(date2<date1){
			var temp=date1;
			date1=date2;
			date2=temp;
		}
		var year1=date1.getFullYear();
		var year2=date2.getFullYear();
		var month1=date1.getMonth();
		var month2=date2.getMonth();
		return (year2-year1)*12+(month2-month1);
	}
	/*
	功能：判断闰年
	参数：年份
	返回值：是 true 不是 false
	**/	
	
	function hasRun(year){
		if((year%4==0 && year%100!=0)||year%400==0){
			return true;
		}else{
			return false;
		}
	}
	/*
	功能：返回节点的某类型的子节点
	参数1：节点
	参数1：节点类型
	返回值：符合传入类型的子节点（数组）
	**/	
	function getElementChilds(node,type){
		var arr=[];
		for(var i in node.childNodes){
			if( node.childNodes[i].nodeType==type){
				arr.push(node.childNodes[i]);
			}
		}
		return arr;
	}
	function getElementNode(node,type){
		var arr=[];
		var arr1=node.childNodes;
		for(var i in arr1){
			if(arr1[i].nodeType==type){
				arr.push(arr1[i]);
			}
		}
		return arr;		
	}
	/*
	功能：取得样式的值
	参数1：元素
	参数2：样式名
	返回值：样式的值
	**/	
	function getStyle(obj,attrName){
		if(obj.currentStyle){
			return obj.currentStyle[attrName];
		}else{
			return window.getComputedStyle(obj,false)[attrName];
		}
	}
	/*
	功能：判断cookie功能是否禁用
	参数：无
	返回值：true;false
	**/	
	 function isCookie(){
		return navigator.cookieEnabled?true:false;
	 }
		/*
	功能：设置cookie
	参数1：键名
	参数2：值
	参数3：过期值（天数）
	返回值：true;false
	**/	
	function setCookie(key,value,time){
		if(isCookie()){
			var date=new Date();
			date.setDate(date.getDate()+time);
			document.cookie=key+"="+value+"; expires="+date.toGMTString();
			return true;
		}else{
			return false;
		}
	}
	/*
	功能：获取cookie
	参数1：键名
	返回值：true;false
	**/	
	function getCookie(key){
		if(isCookie()){
			var arr=document.cookie.split("; ");
			for(var i in arr){
				var item=arr[i].split("=");
				if(item[0]==key){
					return item[1];
				}
			}
			return null;
		}else{
			return undefined;
		}
	 }

 	/*
	功能：删除cookie
	参数：键名
	返回值：true;false
	**/	
	 function delCookie(key){
		if(isCookie()){
			var date=new Date();
			date.setDate(date.getDate()-1);
			document.cookie=key+"=1; expires="+date.toGMTString();
			return true;
		}else{
			return false;
		}	
	 }

	 /*
	功能：正则验证
	参数1：验证类型
	参数2：验证的字符串
	返回值：true:false
	**/	
	//test() :在字符串中查找符合正则的内容，若查找到返回true,反之返回false.
	function checkAll(type,value){ 		 //type是你要验证的类型（自定），value验证该值
		switch(type) {				//判断该类型       
		case 'Phone':   			//如果类型是Phone的话，就执行下面的判断  
			if((/^1[34578]\d{9}$/).test(value)){   //1开头后跟345678，后跟9个数字结尾
				return true;   
			}else{  
				return false;
			}  
			break;  
		case 'password':  //
			if((/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(value)){   
				return true;   
			}else{  
				return false;
			}  
			break; 
		case 'Email':  
			//电子邮件( xxxxx @ xxxx(.xxxx)+)		/^\w+@\w+(\.\w+)+$/        （）至少实现一次  
			if((/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(value)){   
				return true;   
			}else{  
				return false;
			}  
			break; 
		case 'email':   			
			if((/^\w+@\w+(\.\w+)+$/).test(value)){  //770107@qq.com; 770107@qq.com.cn 
				return true;   
			}else{  
				return false;
			}  
			break;
		case 'postcode':   			
			if((/^[1-9]\d{5}$/).test(value)){  //共6位数字，第一位不能为0
				return true;   
			}else{  
				return false;
			}  
			break;  
		case 'package':   			
			if((/^\w+\.(zip|7z|rar)$/).test(value)){  //xxx.zip\xxx.gz\xxx.rar
				return true;   
			}else{  
				return false;
			}  
			break; 	
		case 'username':  //账户名只能使用数字字母下划线，且数字不能开头，长度在6-15之间 			
			if((/^[a-zA-Z_]\w{5,14}$/).test(value)){ 
				return true;   
			}else{  
				return false;
			}  
			break;	
		case 'testIp':   //验证IP	
			if((/^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/).test(value)){  
				return true;   
			}else{  
				return false;
			}  
			break;
		case 'imgFormat':  //jpg/gif/png		
			if((/^\w+\.(jpg|gif|png)$/).test(value)){ 
				return true;   
			}else{  
				return false;
			}  
			break;
		case 'showCode':  //验证码只能是4位数字字母			
			if((/^[a-zA-Z0-9]{4}$/).test(value)){ 
				return true;   
			}else{  
				return false;
			}  
			break;	
		case 'address': 
			return value.replace(/[^\u4e00-\u9fa5]/g,'');
			break; 
		}  
	} 