function setCookie(c_name,value,expiredays){//这个函数中的参数存有 cookie 的名称、值以及过期天数。
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/;";
}
 function getCookie(name){//取cookies函数     
    
       var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)")); 
       if(arr != null) return unescape(arr[2]); return null; 

    } 
 function removeCookie(name){ //删除cookie  
       var exp = new Date(); 
       exp.setTime(exp.getTime() - 1); 
       var cval=getCookie(name); 
       if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/;";
    }  
    