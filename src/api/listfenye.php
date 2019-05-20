<?php
	$page = isset($_GET['page']) ? $_GET['page'] : '';
	$num = isset($_GET['num']) ? $_GET['num'] : '';
	$type = isset($_GET['type']) ? $_GET['type'] : '';//这个变量用于判断是否排序，根据什么规则排序
	$order = isset($_GET['order']) ? $_GET['order'] : '';//判断是升序还是降序
	include 'connect.php';
	$index = ($page - 1) * $num;
	if($type){
		$sql1 = "SELECT * FROM zhangyanglist ORDER BY $type $order LIMIT $index,$num";
//		$sql1 = SELECT * from zhangyanglist ORDER BY $type $order;
	}else{
		 $sql1="SELECT * FROM zhangyanglist LIMIT $index,$num";
	}
	 if($type == 'no') {
		
	}
	
	if($type == '') {
		//登录功能
	}
	
	if($type == '') {
		//排序功能
	}
	// echo $sql1;
	//执行语句
	$res = $conn->query($sql1);
	// 获取数据 
	$content = $res->fetch_all(MYSQLI_ASSOC);
	//查询语句
	$sql2 = "SELECT * FROM zhangyanglist";
	$res2 = $conn->query($sql2);
	// 释放结果集 
	
	$datalist = array(
		'data' => $content,
		'page' => $page,
		'num' => $num,
		'total' =>$res2->num_rows
	);
	echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
?>