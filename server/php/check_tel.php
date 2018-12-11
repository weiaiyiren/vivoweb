<?php
	header("Access-Control-Allow-Origin:*");
	header("Content-type: text/html; charset=UTF-8");
	$tel = $_GET["user"];
	$coon= new mysqli("localhost","root","","vivoweb",3306);
      $sql = "select * from vivo_user where tel='$tel'";
      $coon -> query("SET CHARACTOR SET 'utf8'");
      $coon -> query("SET NAMES 'utf8'");
      $result = $coon -> query($sql);
      // $row = 查询结果在执行fetch_assoc() , 返回第一条数据
     $row = $result -> fetch_assoc();
     if($row) {
        //  查到数据
            $arr = array("code" => "10000", "data" => "用户已存在");
      } else {
        // 没有查询到
            $arr = array("code" => "0", "data" => "用户不存在");
      }
      echo json_encode($arr);
?>