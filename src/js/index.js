$(function(){
	//有用户就显示用户名
	
	
	var $lun = $(".zhangYang-lunBo");
	 $('#toright').hover(function() {
        $("#toleft").hide()
    }, function() {
        $("#toleft").show()
    })
    $('#toleft').hover(function() {
        $("#toright").hide()
    }, function() {
        $("#toright").show()
    })
    
    
    
    
    
    /////点击鼠标 图片切换

    $("#lunbobox ul li").click(function() {

    //添加 移除样式
    //$(this).addClass("lito").siblings().removeClass("lito"); //给当前鼠标移动到的li增加样式 且其余兄弟元素移除样式   可以在样式中 用hover 来对li 实现
    $(this).css({
        "background": "#999",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#cccccc"
    })
    var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的
    // console.log(index);

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});

/////////////上一张、下一张切换
$("#toleft").click(function() {
    index--;
    if (index <= 0) //判断index<0的情况为：开始点击#toright  index=0时  再点击 #toleft 为负数了 会出错
    {
        index = 4
    }
    console.log(index);
    $("#lunbobox ul li").eq(index).css({
        "background": "#999",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#cccccc"
    })

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）必须要写
}); // $("#imgbox a ")获取到的是一个数组集合 。所以可以用index来控制切换

$("#toright").click(function() {

    index++;
    if (index > 4) {
        index = 0
    }
    console.log(index);
    $(this).css({
        "opacity": "0.5"
    })
    $("#lunbobox ul li").eq(index).css({
        "background": "green",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#ccc"
    })
    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});
$("#toleft,#toright").hover(function() {
        $(this).css({
            "color": "black"
        })
    },
    function() {
        $(this).css({
            "opacity": "0.3",
            "color": ""
        })
    })
///

///////鼠标移进  移出
$("#lunbobox ul li,.lunbo,#toright,#toleft ").hover(
    ////////鼠标移进
    function() {
        $('#toright,#toleft').show()
        clearInterval(t);
		console.log(t);
    },
    ///////鼠标移开
    function() {
        //$('#toright,#toleft').hide()
        //alert('aaa')
        t = setInterval(play, 3000)

        function play() {
            index++;
            if (index > 4) {
                index = 0
            }
            $("#lunbobox ul li").eq(index).css({
                "background": "green",
                "border": "1px solid #ffffff"
            }).siblings().css({
                "background": "#cccccc"
            })
            $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
    })
    var flag = true //设置标识。防止出现跑马灯  
    $(".left-menu2 a").click(function(){  
        flag = false  
        $(this).addClass("active").siblings().removeClass("active")  
        var index = $(this).index()//获取当前点击元素的索引  
        var top = $(".index15_recommend").eq(index).offset().top;//获取每个banner到顶部的距离  
        $("html,body").stop(true).animate({"scrollTop":top},function(){flag = true})  
    }) 
    
    //滚动效果
    $(window).scroll(function() {
    	 //可视窗口高度
        var winH = $(window).height();
        //鼠标滚动的距离
        var iTop = $(window).scrollTop();
        if(iTop>=1000){
        	$(".toTop").css("display","block")
        	$(".left-menu2").css("display","block")
        }else{
        	$(".toTop").css("display","none")
        	$(".left-menu2").css("display","none")
        }
    })
    //选项卡
    $(".index15_path dl dd a").click(function(e){
    	var $no =$(this).attr("no");
//  	
    	$(".index15_sku2 ul li").css("display","none");
    	$(`.index15_sku2 ul li[no='${$no}']`).css("display","block")
    	
    	
    	
    	console.log($no);
    	console.log($(`.index15_sku2 ul li[no='${$no}']`));
    	
    })
    
    var num = 0;
    $(".btn").click(function(){
    	$(".toShopCar").css("background","url(images/cart_pop04_7d8dece4.gif) no-repeat")
    	$(".toShopCar").css("backgroundPosition","-11px 0px")
    	num++;
    	$(".num1").html(num);
    	
    	if(num>9){
    		$(".num1").css("right","-51px")
    	}
    	
    })

	$(".btn").click(function(){
		var $phone = getCookie('phone');
		var $gid = $(this).parent().attr("data-id");
		$.ajax({
			type:"get",
			url:"api/gouwucar.php",
			async:true,
			data : "gid=" + $gid  + "&phone=" +$phone,
			success : function(str){
				
				console.log(str);
				
			}
		});
	})
	    
})





var t;
var index = 0;
/////自动播放
t = setInterval(play, 3000)

function play() {
    index++;
    if (index > 4) {
        index = 0
    }
    // console.log(index)
    $("#lunbobox ul li").eq(index).css({
        "background": "#999",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#cccccc",
        "border": ""
    })

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    $(".sideBar .toShopCar").click(function(){
    	location.href = 'html/shopCar.html';
    	console.log(1)
    })
     $(".num1").click(function(){
    	location.href = 'html/shopCar.html';
    	console.log(1)
    })
    $(".toTop").click(function(){
        $('body,html').animate({
            "scrollTop": 0
        }, 500)
        console.log(1);
	})
};

