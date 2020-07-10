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
        left:-($(this).find(".yx_dropdown").children().eq(0).children().length - 8) * 74 - 65,
        zIndex:999
    }).fadeIn(150,'linear')
}).mouseleave(function(){
    $(this).find('a').removeClass('active')
    // $('.header_box_nav_item').eq(0).find('a').addClass('active')
    $(this).find(".yx_dropdown").fadeOut(150,'linear').css({
        zIndex:3
    })
})



// console.log($('.cart_tab'))
$(document).ready(function(){
    $.get('../interface/showlist.php',function(data){
        var json = JSON.parse(data)
        if(json.code==0){
            alert('购物车里空空的')
        }else{
            // console.log(json.data[0]);
            var obj = json.data[0];
            $('.product_name').html(obj.product_name);
            $('.product_name').attr('id',obj.product_id);   
            $('.product_img img').attr('src',obj.product_img);
            $('.product_price').html("¥"+obj.product_price);
            $('.product_num .num').html(obj.product_num);
            // console.log($('.product_name').attr('id'))
        }
    })
})


// 数量减少
$('.selnum .less').click(function(){
    // console.log(($('.product_num .num').html()-0)-1)
    if(($('.product_num .num').html()-0)-1==0){
        $.get('../interface/delwq.php',{
            id:($('.product_name').attr('id'))-0
        },function(data){
            var json = JSON.parse(data);
            if(json.code==1){
                alert('商品删除了啦');
                window.location.reload(true);
            }
        })
    }
    // 更新页面上的数量
    $('.product_num .num').html(($('.product_num .num').html()-0)-1)
    $.get('../interface/updatewq.php',{
        type:'cut',
        id:($('.product_name').attr('id'))-0
    },function(data){
        var json = JSON.parse(data);
        if(json.code==1){
            alert('商品数量减少成功')
        }else{
            alert('商品数量减少失败')
        }
    })
})

$('.selnum .more').click(function(){
    $('.product_num .num').html(($('.product_num .num').html()-0)+1);
    $.get('../interface/updatewq.php',{
        type:'add',
        id:($('.product_name').attr('id'))-0
    },function(data){
        var json = JSON.parse(data);
        if(json.code==1){
            alert('商品数量添加成功')
        }else{
            alert('商品数量添加失败')
        }
    })
})


// 删除
$('.cart_btn').click(function(){
    $.get('../interface/delwq.php',{
        id:($('.product_name').attr('id'))-0
    },function(data){
        var json = JSON.parse(data);
        if(json.code==1){
            alert('商品删除了啦');
            window.location.reload(true);
        }
    })
})