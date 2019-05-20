$(function(){
	$(".del11").click(function(){
		$("input[class='son_check']:checked").each(function() { // 遍历选中的checkbox
            n = $(this).parents("ul").index();// 获取checkbox所在行的顺序
            var $nex = $(".cart_alltit").next();
           	var $nex1 = $nex.children("div:last-child")
            $nex1.find("ul:eq("+n+")").remove();
            
            
            
        });
        $(".cartBox1 input[class='son_check']:checked").each(function() {
        	c = $(this).parents("ul").index();// 获取checkbox所在行的顺序
            var $nexx = $(".cart_alltit1").next();
           	var $nexx1 = $nexx.children("div:last-child")
            $nexx1.find("ul:eq("+c+")").remove();
            console.log($nexx1,c)
    	});
    	
	})
	
	
	var bbb = decodeURI(location.search);
	var str = bbb.slice(1);
	console.log(str)
	function ini(id){
		$.ajax({
			type:"get",
			url:"../api/gowWu.php",
			async:true,
			data : "id=" + id,
			success : function(str){
				console.log(str);
				var arr = JSON.parse(str);
				var res = arr.map(function(item){
				return `<ul class="order_lists"><li class="list_chk">
					<input type="checkbox" id="checkbox_2" class="son_check">
					<label for="checkbox_2"></label>
				</li>
				<li class="list_con">
					<div class="list_img"><a href="javascript:;"><img src="${item.imgUrl}" alt=""></a></div>
					<div class="list_text"><a href="javascript:;">${item.title}</a></div>
				</li>
				<li class="list_info">
					<p>${item.describe}</p>
					<p>${item.describe}</p>
				</li>
				<li class="list_price">
					<p class="price">${item.discoPrice}</p>
				</li>
				<li class="list_amount">
					<div class="amount_box">
						<a href="javascript:;" class="reduce reSty">-</a>
						<input type="text" value="1" class="sum">
						<a href="javascript:;" class="plus">+</a>
					</div>
				</li>
				<li class="list_sum">
					<p class="sum_price">${item.discoPrice}</p>
				</li>
				<li class="list_op">
					<p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
				</li></ul>`;
			}).join();
			$(".order_content:first").html(res);	
				
			}
		});
	}
	ini(str);
						
	
})
