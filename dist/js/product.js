"use strict";$(".header_box_nav_item").mouseenter(function(){var n=$(this).find(".yx_dropdown").children().eq(0).children().width();$(this).find("a").addClass("active"),$(this).find(".yx_dropdown").css({width:$(this).find(".yx_dropdown").children().eq(0).children().length*(n+24)+40,left:0,zIndex:999}).fadeIn(150,"linear")}).mouseleave(function(){$(this).find("a").removeClass("active"),$(this).find(".yx_dropdown").fadeOut(150,"linear").css({zIndex:3})}),$(".header_box_cart_center").click(function(){$(location).attr("href","./cart.html")}),$(".selnum input").on("input",function(){console.log(+$(this).val()),99<=+$(this).val()?$(this).val(99):+$(this).val()<=0&&$(this).val(1),$(this).attr("value",+$(this).val())}),$(".selnum .less").mouseenter(function(){$(".selnum input").val()<=1?$(this).addClass("disb"):$(this).removeClass("disb")}),$(".selnum .more").mouseenter(function(){99<=$(".selnum input").val()?$(this).addClass("disb"):$(this).removeClass("disb")}),$(".selnum .less").click(function(){console.log($(".selnum input").val()-1),+$(".selnum input").val()<=1||$(".selnum input").val($(".selnum input").val()-1),$(".selnum input").val()<=1?$(this).addClass("disb"):$(this).removeClass("disb")}),$(".selnum .more").click(function(){console.log(+$(".selnum input").val()+1),99<=+$(".selnum input").val()?99<=$(".selnum input").val()?$(this).addClass("disb"):$(this).removeClass("disb"):$(".selnum input").val(+$(".selnum input").val()+1)}),$(".add_cart").click(function(){console.log(+$(".selnum input").val()),$.get("../interface/addwq.php",{id:+$(".name").eq(0).children().eq(0).attr("id"),img:$(".tab").eq(0).find("img").attr("src"),price:+$(".rp .num").html(),name:$(".name").eq(0).children().eq(0).html(),count:+$(".selnum input").val()},function(n){1==JSON.parse(n).code?alert("商品添加成功"):alert("商品添加失败")})});