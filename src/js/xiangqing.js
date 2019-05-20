$(function(){
	
	
	
	
	
	
	$(".mask").mouseover(function() {
	    $(".float_layer").show()
	    $(".big_box").show()
	})
	$(".mask").mouseout(function() {
	    $(".float_layer").hide()
	    $(".big_box").hide()
	})
	
	
	
	$(".mask").mousemove(function(e) {
	    var l = e.pageX - $(".small_box").offset().left - ($(".float_layer").width() / 2)
	    var t = e.pageY - $(".small_box").offset().top - ($(".float_layer").height() / 2)
	    if (l < 0) {
	        l = 0
	    }
	    if (l > $(this).width() - $(".float_layer").width()) {
	        l = $(this).width() - $(".float_layer").width()
	    }
	    if (t < 0) {
	        t = 0
	    }
	    if (t > $(this).height() - $(".float_layer").height()) {
	        t = $(this).height() - $(".float_layer").height()
	    }
	
	    $(".float_layer").css({
	        "left": l,
	        "top": t
	    })
	    var pX = l / ($(".mask").width() - $(".float_layer").width())
	    var pY = t / ($(".mask").height() - $(".float_layer").height())
	    $(".big_box img").css({
	        "left": -pX * ($(".big_box img").width() - $(".big_box").width()),
	        "top": -pY * ($(".big_box img").height() - $(".big_box").height())
	    })
	
	
	
	})
	//滚动效果
	$(window).scroll(function() {
    	 //可视窗口高度
        var winH = $(window).height();
        //鼠标滚动的距离
        var iTop = $(window).scrollTop();
        if(iTop>=1000){
        	$(".good15_detail").css("position","fixed");
        	$(".good15_detail").css("top","0")
        	$(".good15_detail").css("left","300px")
        	if(iTop>=4000){
        		$(".serve").css("background","url(../images/detail_ico2_aee48cd9.png) right -194px no-repeat")
        		$(".serve").css("color","#fff")
        		$(".shop").css("background","#fff")
        		$(".shop").css("color","#79a000")
        		$(".critic").css("background","#fff")
    		$(".critic").css("color","#79a000")
        	}if(iTop>=8990){
        		$(".shop").css("background","#fff")
        		$(".shop").css("color","#79a000")
        		$(".serve").css("background","#fff")
        		$(".serve").css("color","#79a000")
        		$(".critic").css("background","url(../images/detail_ico2_aee48cd9.png) right -194px no-repeat")
        		$(".critic").css("color","#fff")
        	}
        }
        else{
        	$(".good15_detail").css("position","relative");
        	$(".good15_detail").css("top","0")
        	$(".good15_detail").css("left","0")
        	$(".shop").css("background","url(../images/detail_ico2_aee48cd9.png) right -194px no-repeat")
    		$(".shop").css("color","#fff")
    		$(".serve").css("background","#fff")
    		$(".serve").css("color","#79a000")
    		$(".critic").css("background","#fff")
    		$(".critic").css("color","#79a000")
        }
    })
	
	
	
	$(".shop").click(function(){
		$('html , body').animate({scrollTop: $('.shang').offset().top}, 1000);
	})
	$(".serve").click(function(){
		
		$('html , body').animate({scrollTop: $('.fuwu').offset().top}, 1000);
		
	})
	$(".critic").click(function(){
		$('html , body').animate({scrollTop: $('.ping').offset().top}, 1000);
	})
	var $num = 1;
	
	$(".up").click(function(){
		$num ++;
	$(".bgright input").val($num);
//		console.log(1)
	})
	$(".down").click(function(){
		$num --;
		if($num<1){
			$num =1;
		}
	$(".bgright input").val($num);
//		console.log(1)
	})
	$(".bgright input").change(function(){
		if($(".bgright input").val()<1){
			$(".bgright input").val(1);
		}
	})
	$(".list15_record dl dt a").click(function(){
		$(".list15_record dl dd").css("display","none")
	})
	var bbb = decodeURI(location.search);
	var str = bbb.slice(1);
	$(".btn01").click(function(){
		location.href = 'shopCar.html?'+ str;
		console.log(1)
	})
	$(".good15_box dl dd").mouseover(function(e){
		if(e.target.tagName == "IMG"){
			var imga = $(e.target).attr("src");
			
			$(".small_box img").attr("src",imga) 
			$(".big_box img").attr("src",imga)
console.log(imga);
		}
	})
})
