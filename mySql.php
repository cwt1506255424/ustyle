<?php
	header("content-type","text/html;charset=utf-8");
	//1.连接数据库
	$con=mysql_connect("localhost","root","qianfeng");
	
	if(!$con){
		die("connect fail:".mysql_error());
	}else{
		echo "connect success";
	}
	//2.执行SQL语句
	//1)选择数据库
	mysql_select_db("mydb1703",$con);
	//2)执行SQL语句
	$str="insert into userTable(userName,userPass,userPhone) values('王坤','2013wk','15029707461')"
	//$str="inset into userTable(userName,userPass,userPhone) values('王坤','2013wk','15029707461')";
	mysql_query($str,$con);
	//关闭数据库
	mysql_close($con);
?>