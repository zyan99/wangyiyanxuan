<?php
    // 解决中文乱码
    header('content-type:text/html;charset=utf-8;');
    // 获取前端的用户名个密码
    $name = $_POST['username'];
    $pw = $_POST['password'];

    // 进行登录(数据库验证)
    $link = mysqli_connect('localhost','root','root','music');
    // 执行sql查询语句
    $sql = "SELECT * FROM `user` WHERE `username`='$name' AND `password`='$pw'";
    $res = mysqli_query($link,$sql);
    // 解析查询结果, 因为不能重名, 只要解析单行就可以
    $row = mysqli_fetch_assoc($res);

    // 前端发一个身份牌name=用户名
    if($row){
        $arr = array('code'=>1);
        $json = json_encode($arr);
        setcookie('name',$name,0,'/wyyx/src');// 会话时效
        // echo "登录成功, 给你发了一个临时cookie身份牌";
    }else{
        $arr = array('code'=>0);
        $json = json_encode($arr);
        // echo "登陆失败, 请重新登录";
    }
    // $arr = array('code'=>0);
    // $json = json_encode($arr);
    // setcookie('name',$_POST['username'],time()+7*24*60*60);


    echo $json;
    // setcookie('name',11,0,'/wyyx/src');
?>