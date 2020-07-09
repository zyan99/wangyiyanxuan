<?php
    header('content-type:text/html;charset=utf-8;');

    print_r($_GET);
    // 获取用户名和密码
    $username = $_GET['username'];
    $password = $_GET['password'];
    $link = mysqli_connect('localhost','root','root','music');
    $sql = "INSERT INTO `user` (`username`,`password`) VALUES ('$username','$password')";
    $res = mysqli_query($link,$sql);

    if($res){
        header('location:../pages/login.html');
    }else{
        header('location:../pages/register.html');
    };
    mysqli_close($link);
?>