<?php
	

	$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
	$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
	// 2.连接数据库
	include 'connect.php';
	// 写sql语句
//	$sql = "INSERT INTO zhangyanguser(phone) VALUES('$phone')";
	$sql = "insert into zhangyanguser(phone,psw,code) values ('$phone','$psw','123')";
//	$sql = "INSERT INTO zhangyanguser(phone,psw) VALUES('$phone','$psw')";
	//执行语句
	$res = $conn->query($sql);//得到结果集
	//判断是否插入
	if($res->num_rows){
		echo 'yes';
	}else{
		echo 'no';
	}

?>