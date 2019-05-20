<?php
	include 'connect.php';
	// 2.接收前端的数据，查询用户是否存在，执行sql语句
	$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
	$sql = "SELECT * FROM zhangYanguser WHERE phone='$phone'";
	$res = $conn->query($sql);
	// var_dump($res);
	if($res->num_rows){
		//找到了，已存在，不给注册
		echo 'no';
	}else {
		echo 'yes';
	}
?>