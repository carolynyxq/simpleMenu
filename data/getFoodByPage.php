<?php
    //查询出指定条数开始的菜品的所有数据，返回给客户端(JSON格式)

    //读取客户端提交的数据：start - 想要从哪条记录开始获取菜品信息
    $start = $_REQUEST['start'];
	$size = 8; //一次可以返回给客户端的最大记录数

	$conn = mysqli_connect('127.0.0.1',   'root',   '',  'foodList');
	$sql = 'SET   NAMES   UTF8';
    mysqli_query($conn,  $sql);

	$sql = "SELECT   id, name, img FROM  food  LIMIT  $start, $size ";
    $result = mysqli_query($conn,  $sql);

	$outputArr = [  ];   //用于保存查询到的所有记录
	while(  $row = mysqli_fetch_array($result,  MYSQL_ASSOC)   ){
		$outputArr[ ] = $row;   //把查得的一行记录保存到输出数组
	}

    sleep(1);

	//var_dump($outputArr);
	//把一个PHP数组格式化为JSON字符串
	echo  json_encode( $outputArr );
?>