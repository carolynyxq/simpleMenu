<?php
    //���ݿͻ��˴��ݹ����Ĳ�Ʒ��ţ���ѯ���ò�Ʒ��������Ϣ
    //��JSON��ʽ���ظ��ͻ���
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