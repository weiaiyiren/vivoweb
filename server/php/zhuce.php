<?php
	header("Access-Control-Allow-Origin:*");
      header("Content-type: text/html; charset=UTF-8");
      $tel = $_GET["user"];
      $pass=$_GET["password"];
      $coon = new mysqli("localhost", "root", "", "vivoweb", 3306);
      $insert_sql = "INSERT INTO vivo_user (tel, password) VALUES ('$tel', '$pass')";
      $coon->query("SET NAMES 'utf8'");//写库 
      $result = $coon -> query($insert_sql);
//    $rows =$result -> fetch_assoc();
      // 添加，更新, 删除, 执行完sql语句, 返回一个布尔类型的值
         
      if($result) {
        	echo '1';
      } else {
    		echo '0';
    	}	
?>