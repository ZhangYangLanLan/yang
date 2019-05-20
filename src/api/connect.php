<?php
	// 思路
	// 1.准备参数，连接数据库
	// 2.创建连接
	// 3.检测连接
	// 1.准备参数，连接数据库
	$serverName = 'localhost';
	$userName = 'root';
	$password = '';
	$mysqlName = 'h51902';
	// 2.创建连接
	$conn = new mysqli($serverName,$userName,$password,$mysqlName);
	if($conn->connect_error){
		die('连接失败:'.$conn->connect_error);

	}else{
//		 echo '连接成功';

	}
?>