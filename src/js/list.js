$(function(){
	
	var $num = 1;
	var ipage = 1;//第几页
	var num = 4;//
	var paiXu  = document.querySelector(".paiXu");
	var type = '';
	var order = '';
	var prr1 = '';
	var prr2 = '';
	var total;
	$(".jia").click(function(){
		$num++;
		$(".num").val($num);
//		console.log("11")
		return $num;
	})
	$(".jian").click(function(){
		$num--;
//		console.log($num);
		$(".num").val($num);
//		console.log("11")
	})
	$(".ipnum").change(function(){
		if($(".ipnum").val()<1){
			$(".ipnum").val("1");
//			console.log(1)
		}if($(".ipnum").val()>$total){
			
		}
	})
	
			
	var ipage = 1;//第几页
	var num = 10;//
	var type = '';
	var order = '';
	var prr1 = '';
	var prr2 = '';
	var shu = 0;
	function init(ipage){
		ajax2({
			type : 'get',
			url : '../api/listfenye.php',
			data :　'page=' + ipage + '&num=' + num + '&type=' + type + '&order=' + order,
			
			success : function(str){
				
				create(str);
			}
		})
	}
	
	init(1);
	
	function create(str){
		var arr = JSON.parse(str);
		var res = arr.data.map(function(item) {
			return `<dl data-id="${item.id}">
						
						<dd>
							<div class="box">
								<p class="pic">
									<a href="javascript:;">
										<img src="${item.imgUrl}" alt="" />
									</a>
								</p>
								<p class="name">
									<a href="">
										<font>${item.title}</font>
										<span>${item.describe}</span>
									</a>
								</p>
								<p class="price">
									${item.origPrice}
									<span>${item.discoPrice}</span>
								</p>
								<p class="cold">
									<span id="">
										冷链配
									</span>
								</p>
								<p class="quantity">
									<a href="javascript:;" class="jian"></a>
									<input type="" name="" id="" value="1" class="num"/>
									<a href="javascript:;" class="jia"></a>
								</p>
								<p class="btn">
									<a href="javascript:;">
										<img src="../images/list_btn01_24372028.gif" alt="" />
									</a>
								</p>
							</div>
							
						</dd>
					</dl>`;
		}).join("");
		$(".list15_sku").html(res);
		var pages = Math.ceil(arr.total / arr.num);
		$(".list15_sequence dl dd p").html("<span>1</span>/"+pages)
//		return new Promise(function(resolve){
//			 pages = Math.ceil(arr.total / arr.num);
//			 resolve(pages)
//		})
		
			
		
	}

	
	$(".zxf_pagediv").createPage({
		pageNum: 50,
		current: 1,
		backfun: function(e) {
			//console.log(e);//回调
		}
	});
		
	
	function dian(){
		
		$(".zxf_pagediv").click(function(ev){
			 
			var page = ev.target.innerHTML;
				init(page);
				console.log(page);
			var nowpage = $(".zxf_pagediv .current").html();
			
			if(page == "下一页"){
				nowpage = nowpage -1;
				console.log(nowpage)
				nowpage ++;
				init(nowpage);
				console.log(nowpage)
			}
			if(page == "上一页"){
				nowpage = Number(nowpage) +1;
				console.log(nowpage)
				nowpage --;
				init(nowpage);
				console.log(nowpage)
			}
		})
		
	}
	dian();
	
	$(".list15_sku").click(function(e){
		if(e.target.tagName == "IMG" || e.target.tagName == "FONT" || e.target.tagName == "SPAN" || e.target.tagName == "DIV"){
			location.href = 'xiangqing.html?'+ e.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.id;
		}else{
			location.href = 'xiangqing.html?'+ e.target.parentNode.parentNode.parentNode.dataset.id;
		}
		
	})
	$(".list15_sequence ul").click(function(e){
		
			
		$(".list15_sequence ul li").siblings().css("background","#f8f8f6");
		$(".list15_sequence ul li a").css("color","#999")
		if(e.target.tagName == "A"){
		
			e.target.parentNode.style.background = "green"; 
			e.target.style.color = "#fff"; 
		}
		
	})
	$(".xiaoliang a").click(function(){
		
		type = 'id';
		order = 'ASC';
		console.log(1)
		init(1);
	})
	$(".jiage a").click(function(){
		type = 'origPrice';
		order = 'DESC';
		console.log(1)
		init(1);
	})
	$(".shijian a").click(function(){
		type = 'discoPrice';
		order = 'DESC';
		console.log(1)
		init(1);
	})
	$(".pinglun a").click(function(){
		type = 'no';
		order = 'DESC';
		console.log(1)
		init(1);
	})
	$(".moren a").click(function(){
		type = 'id';
		order = 'ASC';
		console.log(1)
		init(1);
	})
	function f(){
		var $isok = true;
		$(".not_b").click(function(e){
			
			if($isok){
				$(".not_b").next().css("display","none");
				console.log($isok)
			}else{
				$(".not_b").next().css("display","block");
			}
			return $isok = !$isok
			
		})
		
	}
	function f1(){
		var $isok = true;
		$(".not_b1").click(function(e){
			
			if($isok){
				$(".not_b1").next().css("display","block");
				console.log($isok)
			}else{
				$(".not_b1").next().css("display","none");
			}
			return $isok = !$isok
			
		})
	}
	function f2(){
		var $isok = true;
		$(".not_b2").click(function(e){
			
			if($isok){
				$(".not_b2").next().css("display","block");
				console.log($isok)
			}else{
				$(".not_b2").next().css("display","none");
			}
			return $isok = !$isok
			
		})
	}
	f();
	f1();
	f2();
	$(".list15_record dl dt a").click(function(e){
		$(".list15_record dl dd").css("display","none");
		
	})
	
	
})

