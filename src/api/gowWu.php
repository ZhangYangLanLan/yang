<?php
	include 'connect.php';
	$id = isset($_GET['id']) ? $_GET['id'] : '1';
	$sql = "SELECT * FROM zhangYanglist WHERE id='$id'";
	$res = $conn->query($sql);
	$content = $res->fetch_all(MYSQLI_ASSOC);
//	 echo $content;
	echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>