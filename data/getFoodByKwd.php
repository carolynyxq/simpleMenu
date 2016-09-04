<?php
    //根据客户端传递过来的菜品编号，查询出该菜品的所有信息
    //以JSON格式返回给客户端
	$conn = mysqli_connect('127.0.0.1', 'root', '', 'foodList');
	$sql = 'SET   NAMES   UTF8';
    mysqli_query($conn,  $sql);

    $kwd = $_REQUEST['kwd'];
	$sql = "SELECT * FROM  food  WHERE name LIKE '%$fid%'";
    $result = mysqli_query($conn,  $sql);

	$row = mysqli_fetch_array($result,MYSQL_ASSOC);

    //sleep(1);

	echo  json_encode( $row );

?>