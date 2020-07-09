// console.log($('.header_box_nav_item').eq(0));
// 导航列表移入显示. 移除隐藏
$('.header_box_nav_item').mouseenter(function(){
    // console.log($(this).find(".yx_dropdown").children().eq(0).children().length)
    // console.log($(this).index())
    var $width = $(this).find(".yx_dropdown").children().eq(0).children().width()
    $(this).find('a').addClass('active')
    // console.log($(this).find(".yx_dropdown").width())
    $(this).find(".yx_dropdown").css({
        // display:'block',
        // 动态设置盒子宽
        width:$(this).find(".yx_dropdown").children().eq(0).children().length * ( $width + 24) + 40,
        // 设置位置
        left:0,
        zIndex:999
    }).fadeIn(150,'linear')
}).mouseleave(function(){
    $(this).find('a').removeClass('active')
    // $('.header_box_nav_item').eq(0).find('a').addClass('active')
    $(this).find(".yx_dropdown").fadeOut(150,'linear').css({
        zIndex:3
    })
})


// 点击购物车跳转到购物车页面
$('.header_box_cart_center').click(function(){
    $(location).attr('href', './cart.html');
})



// 动态设置input内的value
$('.selnum input').on('input',function(){
    console.log($(this).val()-0)
    if(($(this).val()-0)>=99){
        $(this).val(99)
    }else if(($(this).val()-0)<=0){
        $(this).val(1)
    }
    $(this).attr('value',$(this).val()-0)
})

// 移入鼠标样式
$('.selnum .less').mouseenter(function(){
    if($('.selnum input').val()<=1){
        $(this).addClass('disb')
    }else{
        $(this).removeClass('disb')
    }
})
$('.selnum .more').mouseenter(function(){
    if($('.selnum input').val()>=99){
        $(this).addClass('disb')
    }else{
        $(this).removeClass('disb')
    }
})



// ---减
$('.selnum .less').click(function(){
    console.log(($('.selnum input').val()-0)-1)
    if(($('.selnum input').val()-0)<=1){
        // 改变鼠标样式
        if($('.selnum input').val()<=1){
            $(this).addClass('disb')
        }else{
            $(this).removeClass('disb')
        }
        return
    }
    // $('.selnum input').attr('value',($('.selnum input').val()-0)-1)
    $('.selnum input').val(($('.selnum input').val()-0)-1)
    if($('.selnum input').val()<=1){
        $(this).addClass('disb')
    }else{
        $(this).removeClass('disb')
    }
})
// +++加
$('.selnum .more').click(function(){
    console.log(($('.selnum input').val()-0)+1)
    if(($('.selnum input').val()-0)>=99){
        // 改变鼠标样式
        if($('.selnum input').val()>=99){
            $(this).addClass('disb')
        }else{
            $(this).removeClass('disb')
        }
        return
    }
    // $('.selnum input').attr('value',($('.selnum input').val()-0)+1)
    $('.selnum input').val(($('.selnum input').val()-0)+1)
})


// 加入购物车
// console.log($('.tab').eq(0).find('img').attr('src'))
// console.log($('.rp .num').html()-0)
// console.log($('.name').eq(0).children().eq(0).attr('id')-0)
// console.log($('.name').eq(0).children().eq(0).html())
$('.add_cart').click(function(){
    console.log($('.selnum input').val()-0)
    $.get('../interface/addwq.php',{
        id:($('.name').eq(0).children().eq(0).attr('id'))-0,
        img:$('.tab').eq(0).find('img').attr('src'),
        price:($('.rp .num').html())-0,
        name:$('.name').eq(0).children().eq(0).html(),
        count:$('.selnum input').val()-0
    },function(data){
        var json = JSON.parse(data)
        if(json.code==1){
            alert('商品添加成功')
        }else(
            alert('商品添加失败')
        )
    })
})
