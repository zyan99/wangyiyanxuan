//设置cookie
function setCookie(key,value,day){
    //第一个参数是key:cookie的键
    //第二个参数是value:cookie的值
    //第三个参数是可以选择的day:表示cookie几天以后过期,如果不传就是会话时效
    //不需要返回值
    if(day != null){
        var time = new Date;
        time.setTime(time.getTime() - 8*60*60*1000 + day*24*60*60*1000);
        // console.log(day*60*60*1000);
        document.cookie = key + "=" + value + ";expires=" + time;
    }else{
        document.cookie = key + "=" + value;
    }
}



//删除cookie
function removeCookie(key){
    //一个参数:要删除的cookie的键
    //不需要返回值
    setCookie(key,-1,-1);
}


//获取指定cookie的值
function getCookie(key){
    //一个参数:要获取的cookie的键
    //返回值:指定cookie值
    var str = document.cookie;
    var arr = str.split("; ");
    for(var i = 0;i < arr.length; i++){
        var newArr = arr[i].split("=");
        if(newArr[0] == key){
            return newArr[1];
        }
    }

}