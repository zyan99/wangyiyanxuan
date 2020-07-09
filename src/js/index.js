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
    $('.header_box_nav_item').eq(0).find('a').addClass('active')
    $(this).find(".yx_dropdown").fadeOut(150,'linear').css({
        zIndex:3
    })
})

// 点击购物车跳转到购物车页面
$('.header_box_cart_center').click(function(){
    $(location).attr('href', './cart.html');
})

// 回到顶部页面上方卷曲高度大于300显示
$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('.to_top').css({
            display:'block'
        })
    }else{
        $('.to_top').css({
            display:'none'
        })
    }
    console.log($(window).scrollTop())
})

// 回到顶部
$('.to_top').click(function(){
    $(window).scrollTop(0)
})

// 新品首发图片移入效果f4f0ea
// console.log($('.swiper_box2 .swiper-slide'))
$('.swiper_box2 .swiper-slide').mouseenter(function(){
    // console.log($(this))
    $(this).css({
        backgroundColor:'#f4f0ea',
        boxShadow: '0 0 10px #ccc'
    })
    $(this).find('.sp_img').eq(0).css({
        display:'none',
    })
    $(this).find('.sp_img').eq(1).css({
        display:'block',
    })
}).mouseleave(function(){
    $(this).css({
        backgroundColor:'#fff',
        boxShadow: 'none'
    })
    $(this).find('.sp_img').eq(0).css({
        display:'block',
    })
    $(this).find('.sp_img').eq(1).css({
        display:'none',
    })
})
// for(var i = 1;i <=9;i++){

//     $('.swiper_box2 .swiper-slide').eq(i-1).html(`<a href="#">
//     <div class="sp_img"><img src="../images/sp`+i+`.jpg" alt=""></div>
//     <div class="sp_img" style="display: none;"><img src="../images/sp0`+i+`.jpg" alt=""></div>
//     <div class="colorNum">2色可选</div>
//     <div class="promBanner">
//         <div class="promTitle">
//             <div class="title">新品限时购</div>
//             <div class="subTitle">
//                 <span style="vertical-align: middle;">¥329</span>
//                 <span class="qi">起</span>
//             </div>
//         </div>
//         <div class="promContent">限300件 仅剩3天</div>
//     </div>
//     </a>
//     <div class="bd">
//     <div class="prdtTags">
//         <span></span>
//         <span class="itemTag">新品限时购</span>
//     </div>
//     <h4 class="name">
//         <a href="#" title="腰椎健康范，护腰塑形坐垫">
//             <span>腰椎健康范，护腰塑形坐垫</span>
//         </a>
//     </h4>
//     <p class="price">
//         <span class="retailPrice">¥329</span>
//         <span class="counterPrice">¥359</span>
//     </p>
//     </div>`)
// }


// 人气推荐切换类名active,hide
// console.log($('.tabList>.innerWarp>ul>li'))
$('.tabList>.innerWarp>ul>li').click(function(){
    // $('.tabList>.innerWarp>ul>li').toggleClass('active')
    $(this).addClass('active')
    .siblings().removeClass('active')
    // console.log($('.showContainer').eq($(this).index()))
    $('.showContainer').eq($(this).index()).removeClass('hide')
    .siblings().addClass('hide')
})

// 人气推荐 商品移入图片放大
// console.log($('.popularItem'))
$('.popularItem').mouseenter(function(){
    // console.log($(this).find('.img'))
    $(this).find('.img').finish().animate({
        width:$(this).find('.img').width()+8,
        height:$(this).find('.img').height()+8,
        left:-4,
        top:-4
    },300,'linear')
}).mouseleave(function(){
    $(this).find('.img').finish().animate({
        width:$(this).find('.img').width()-8,
        height:$(this).find('.img').height()-8,
        left:0,
        top:0
    },300,'linear')
})


// 限时购 商品移入图片放大
// console.log($('.flashSaleProduct'))
$('.flashSaleProduct').mouseenter(function(){
    $(this).find('.pic').finish().animate({
        width:$(this).find('.pic').width()+8,
        height:$(this).find('.pic').height()+8,
        left:-4,
        top:-4
    },300,'linear')
}).mouseleave(function(){
    $(this).find('.pic').finish().animate({
        width:$(this).find('.pic').width()-8,
        height:$(this).find('.pic').height()-8,
        left:0,
        top:0
    },300,'linear')
})



// 限时购 倒计时
// 计算时间差的函数
function timeDiff(time1, time2) {
    // 两个参数表示两个时间节点

    // 2. 计算两个时间节点之间的差值
    var diff = Math.abs(time1.getTime() - time2.getTime())
    var day = Math.floor(diff / 1000 / 60 / 60 / 24)
    var hours =  Math.floor((diff - (day * 24 * 60 * 60 * 1000)) / 1000 / 60 / 60)
    var minutes = Math.floor((diff - (day * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000)) / 1000 / 60)
    var seconds = Math.floor((diff - (day * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000)
    
    // 3. 返回一个对象,里面包含对象信息
    var obj = new Object()
    obj.day = day
    obj.hours = hours
    obj.minutes = minutes
    obj.seconds = seconds
    return obj
}
    var time1 = new Date('2020/9/15 08:50:23')
    setInterval(function(){
        var time2 = new Date()
        var res = timeDiff(time1, time2)
        // console.log('距离嗨皮还有' + res.day + '天' + res.hours + '时' + res.minutes + '分' + res.seconds + '秒')
        // console.log(res.seconds)
        $('.countDown>.w-cd').eq(0).html(res.hours)
        $('.countDown>.w-cd').eq(1).html(res.minutes)
        $('.countDown>.w-cd').eq(2).html(res.seconds)
    },1000)





// 轮播
var mySwiper = new Swiper ('.swiper_box1', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    //   dynamicBullets: true
    },
    // 淡入淡出
    effect : 'fade',
    fade: {
        crossFade: false,
    },
    // 自动轮播
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        // disableOnInteraction: true,
        // false 点击后还可自动轮播
        disableOnInteraction:false
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
// 第二个商品轮播
  var mySwiper = new Swiper ('.swiper_box2', {
    // direction: 'vertical', // 垂直切换选项
    // loop: true, // 循环模式选项
    
    // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination',
    // //   dynamicBullets: true
    // },
    // 淡入淡出
    // effect : 'fade',
    slidesPerView : 4,
    slidesPerGroup : 4,
    fade: {
        crossFade: false,
    },
    // 自动轮播
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    //     // disableOnInteraction: true,
    //     // false 点击后还可自动轮播
    //     disableOnInteraction:false
    // },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })



// 搜索栏关键字联想
$('.inp_s').on('input',function(){
    // 判断没有值的时候隐藏盒子
    if(!$(this).val()){
        $('.associate').css({
            display:'none'
        })
        $('.seach_text').css({
            display:'block'
        })
    }else{
        $('.seach_text').css({
            display:'none'
        })
    }
    // 获取输入的关键字
    var text =  $(this).val();
    // 利用 $.ajax发请求
    $.ajax({
        // callback不能写在参数里面, 要jquery帮我们自动拼接
        url:'https://suggest.taobao.com/sug?code=utf-8&q='+text+'&extras=1&area=c2c&bucketid=atb_search&pid=mm_130402922_1108650181_109789550220&unid=&clk1=&_=1593344789535&callback=jsonp5',
        success:function(data){
            // 为了防止重复添加li要把ul里面的内容清空
            $('.associate').empty()
            // console.log(data.result)
            // 全局的each方法:$.each(要遍历的对象, 每次遍历执行的函数)
            $.each(data.result,function(index,item){
                // console.log(index+item)
                $('.associate').css({
                    display:'block'
                }).append('<li>'+ item[0] +'</li>')
            })
            $('.associate > li').click(function(){
                $('.inp_s').val($(this).html())
                $('.associate').css({
                    display:'none'
                })
            })
        },
        dataType:'jsonp'
    })
})

$('.associate').mouseleave(function(){
    $(this).css({
        display:'none'
    })
})