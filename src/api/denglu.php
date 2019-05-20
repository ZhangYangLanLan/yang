<?php
	// 思路
	// 登录和注册差不多
	// 接收参数，查询数据库是否有该用户，返回查询结果
	// 1.接收数据
	$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
	$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
	// 2.连接数据库
	include 'connect.php';
	// 写sql语句
	$sql = "SELECT * FROM zhangyanguser WHERE phone='$phone' AND psw='$psw'";
	//执行语句
	$res = $conn->query($sql);//得到结果集
	//判断是否找到
	if($res->num_rows){
		echo 'yes';
	}else{
		echo 'no';
	}
?>