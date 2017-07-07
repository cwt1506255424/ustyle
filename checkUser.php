<?php	
	header("Content-type","text/html;charset=utf-8");
	//接收数据
	$userName=$_GET['userName'];
	$con=mysql_connect("localhost","root","qianfeng");
	
	if(!$con){
		die("连接失败".mysql_error());
	}else{
		//2)、执行SQL语句
		mysql_select_db("mydb1703",$con);
		$str="select * from userTable where userName='".$userName."'";
		$result = mysql_query($str,$con); 
		$rowCount = mysql_num_rows($result);
		
		//3)、关闭数据库
		mysql_close($con);
		
		//3、响应根据查询结果给前端响应对应的（1：用户名已经被使用，0：用户名没有注册）
		echo $rowCount;
				
	}
?>