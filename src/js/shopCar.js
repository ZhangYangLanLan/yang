$(function(){
	var $phone = getCookie('phone');
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
//	console.log(str)
	
	
		var phone = getCookie('phone');
		
		
		
		
			$.ajax({
				type:"get",
				url:"../api/zhangyangche.php",
				async:true,
				data : "phone=" + phone,
				success : function(str){
//					console.log(str);
					var arr = JSON.parse(str);
//					console.log(arr);
 					
					var res = "";
					for(var x in arr){
						res += `<ul class="order_lists" data-id="${arr[x][0].id}"><li class="list_chk">
						<input type="checkbox" id="checkbox_2" class="son_check">
						<label for="checkbox_2"></label>
					</li>
					<li class="list_con">
						<div class="list_img"><a href="javascript:;"><img src="${arr[x][0].imgUrl}" alt=""></a></div>
						<div class="list_text"><a href="javascript:;">${arr[x][0].title}</a></div>
					</li>
					<li class="list_info">
						<p>${arr[x][0].describe}</p>
						<p>${arr[x][0].describe}</p>
					</li>
					<li class="list_price">
						<p class="price">${arr[x][0].discoPrice}</p>
					</li>
					<li class="list_amount">
						<div class="amount_box">
							<a href="javascript:;" class="reduce reSty">-</a>
							<input type="text" value="${arr[x].num}" class="sum">
							<a href="javascript:;" class="plus">+</a>
						</div>
					</li>
					<li class="list_sum">
						<p class="sum_price">${arr[x][0].discoPrice*arr[x].num}</p>
					</li>
					<li class="list_op">
						<p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
					</li></ul>`
						
					}
					 
				
				$(".order_content:first").html(res);
				
				
				
					
				 var $allCheckbox = $('input[type="checkbox"]'),     //全局的全部checkbox
	        $wholeChexbox = $('.whole_check'),
	        $cartBox = $('.cartBox'),                       //每个商铺盒子
	        $shopCheckbox = $('.shopChoice'),               //每个商铺的checkbox
	        $sonCheckBox = $('.son_check');                 //每个商铺下的商品的checkbox
	    $allCheckbox.click(function () {
	        if ($(this).is(':checked')) {
	            $(this).next('label').addClass('mark');
	        } else {
	            $(this).next('label').removeClass('mark')
	        }
	    });

    //===============================================全局全选与单个商品的关系================================
    $wholeChexbox.click(function () {
        var $checkboxs = $cartBox.find('input[type="checkbox"]');
        if ($(this).is(':checked')) {
            $checkboxs.prop("checked", true);
            $checkboxs.next('label').addClass('mark');
        } else {
            $checkboxs.prop("checked", false);
            $checkboxs.next('label').removeClass('mark');
        }
        totalMoney();
    });


    $sonCheckBox.each(function () {
        $(this).click(function () {
            if ($(this).is(':checked')) {
                //判断：所有单个商品是否勾选
                var len = $sonCheckBox.length;
                var num = 0;
                $sonCheckBox.each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $wholeChexbox.prop("checked", true);
                    $wholeChexbox.next('label').addClass('mark');
                }
            } else {
                //单个商品取消勾选，全局全选取消勾选
                $wholeChexbox.prop("checked", false);
                $wholeChexbox.next('label').removeClass('mark');
            }
        })
    })

    //=======================================每个店铺checkbox与全选checkbox的关系/每个店铺与其下商品样式的变化===================================================

    //店铺有一个未选中，全局全选按钮取消对勾，若店铺全选中，则全局全选按钮打对勾。
    $shopCheckbox.each(function () {
        $(this).click(function () {
            if ($(this).is(':checked')) {
                //判断：店铺全选中，则全局全选按钮打对勾。
                var len = $shopCheckbox.length;
                var num = 0;
                $shopCheckbox.each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $wholeChexbox.prop("checked", true);
                    $wholeChexbox.next('label').addClass('mark');
                }

                //店铺下的checkbox选中状态
                $(this).parents('.cartBox').find('.son_check').prop("checked", true);
                $(this).parents('.cartBox').find('.son_check').next('label').addClass('mark');
            } else {
                //否则，全局全选按钮取消对勾
                $wholeChexbox.prop("checked", false);
                $wholeChexbox.next('label').removeClass('mark');

                //店铺下的checkbox选中状态
                $(this).parents('.cartBox').find('.son_check').prop("checked", false);
                $(this).parents('.cartBox').find('.son_check').next('label').removeClass('mark');
            }
            totalMoney();
        });
    });


    //========================================每个店铺checkbox与其下商品的checkbox的关系======================================================

    //店铺$sonChecks有一个未选中，店铺全选按钮取消选中，若全都选中，则全选打对勾
    $cartBox.each(function () {
        var $this = $(this);
        var $sonChecks = $this.find('.son_check');
        $sonChecks.each(function () {
            $(this).click(function () {
                if ($(this).is(':checked')) {
                    //判断：如果所有的$sonChecks都选中则店铺全选打对勾！
                    var len = $sonChecks.length;
                    var num = 0;
                    $sonChecks.each(function () {
                        if ($(this).is(':checked')) {
                            num++;
                        }
                    });
                    if (num == len) {
                        $(this).parents('.cartBox').find('.shopChoice').prop("checked", true);
                        $(this).parents('.cartBox').find('.shopChoice').next('label').addClass('mark');
                    }

                } else {
                    //否则，店铺全选取消
                    $(this).parents('.cartBox').find('.shopChoice').prop("checked", false);
                    $(this).parents('.cartBox').find('.shopChoice').next('label').removeClass('mark');
                }
                totalMoney();
            });
        });
    });


    //=================================================商品数量==============================================
    var $plus = $('.plus'),
        $reduce = $('.reduce'),
        $all_sum = $('.sum');
    $plus.click(function () {
        var $inputVal = $(this).prev('input'),
            $count = parseInt($inputVal.val())+1,
            $obj = $(this).parents('.amount_box').find('.reduce'),
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(),  //单价
            $priceTotal = $count*parseInt($price.substring(1));
        $inputVal.val($count);
        $priceTotalObj.html('￥'+$priceTotal);
        if($inputVal.val()>1 && $obj.hasClass('reSty')){
            $obj.removeClass('reSty');
        }
        totalMoney();
    });

    $reduce.click(function () {
        var $inputVal = $(this).next('input'),
            $count = parseInt($inputVal.val())-1,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(),  //单价
            $priceTotal = $count*parseInt($price.substring(1));
        if($inputVal.val()>1){
            $inputVal.val($count);
            $priceTotalObj.html('￥'+$priceTotal);
        }
        if($inputVal.val()==1 && !$(this).hasClass('reSty')){
            $(this).addClass('reSty');
        }
        totalMoney();
    });
	
    $all_sum.keyup(function () {
        var $count = 0,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(),  //单价
            $priceTotal = 0;
        if($(this).val()==''){
            $(this).val('1');
        }
        $(this).val($(this).val().replace(/\D|^0/g,''));
        $count = $(this).val();
        $priceTotal = $count*parseInt($price.substring(1));
        $(this).attr('value',$count);
        $priceTotalObj.html('￥'+$priceTotal);
        totalMoney();
    })

    //======================================移除商品========================================

    
    var $order_content = '';
    $('.delBtn').click(function () {
    	var sss = $(this);
        var $order_lists = $(this).parents('.order_lists');
        console.log($order_lists)
        $order_content = $order_lists.parents('.order_content');
        $('.model_bg').fadeIn(300);
        $('.my_model').fadeIn(300);
        $('.dialog-sure').click(function () {
	    	console.log(sss)
	        $order_lists.remove();
			
	        if($order_content.html().trim() == null || $order_content.html().trim().length == 0){
	            $order_content.parents('.cartBox').remove();
	            
	        }
	        closeM();
	        $sonCheckBox = $('.son_check');
	        totalMoney();
	        var $gid = sss.parent().parent().parent().attr("data-id");
			
			console.log($gid,$phone)
			$.ajax({
				type:"get",
				url:"../api/delcar.php",
				async:true,
				data:"phone=" + $phone + "&gid=" +  $gid,
				success : function(str){
					
				}
			});
	        
	        
	    })
    });

    //关闭模态框
    $('.closeModel').click(function () {
        closeM();
    });
    $('.dialog-close').click(function () {
        closeM();
    });
    function closeM() {
        $('.model_bg').fadeOut(300);
        $('.my_model').fadeOut(300);
    }
    //确定按钮，移除商品
    

    //======================================总计==========================================

    function totalMoney() {
        var total_money = 0;
        var total_count = 0;
        var calBtn = $('.calBtn a');
        $sonCheckBox.each(function () {
            if ($(this).is(':checked')) {
                var goods = parseInt($(this).parents('.order_lists').find('.sum_price').html().substring(1));
                var num =  parseInt($(this).parents('.order_lists').find('.sum').val());
                total_money += goods;
                total_count += num;
            }
        });
        $('.total_text').html('￥'+total_money);
        $('.piece_num').html(total_count);

        // console.log(total_money,total_count);

        if(total_money!=0 && total_count!=0){
            if(!calBtn.hasClass('btn_sty')){
                calBtn.addClass('btn_sty');
            }
        }else{
            if(calBtn.hasClass('btn_sty')){
                calBtn.removeClass('btn_sty');
            }
        }
    }	
			}
		});
	
	
		$('.order_content').on('input propertychange',".sum", function() {
			var num = $(this).val();
			var $gid = $(this).parent().parent().parent().attr("data-id");
//			console.log(2)
			$.ajax({
				type:"get",
				url:"../api/car.php",
				async:true,
				data : "num=" + num + "&phone=" + $phone+"&gid=" +$gid,
				success : function(str){
					var arr = JSON.parse(str);
					console.log(str);
					
					$.ajax({
						type:"get",
						url:"../api/zhangyangche.php",
						async:true,
						data : "phone=" + phone+"&gid=" +$gid,
						success : function(str1){
							
							var arr1 = JSON.parse(str1);
							console.log(`${arr1[1][0].discoPrice*arr[0].num}`);
							$(".sum_price").html(`￥${arr1[1][0].discoPrice*arr[0].num}`)
							console.log($(".sum_price").html())
							
						}
					})		
				}
			});
		})
		$('.order_content').on('a click',".reduce", function() {
			var num = $(this).next().val();
			var $gid = $(this).parent().parent().parent().attr("data-id");
			
//			console.log(num,$gid,$phone);
			$.ajax({
				type:"get",
				url:"../api/car.php",
				async:true,
				data : "num=" + num + "&phone=" + $phone+"&gid=" +$gid,
				success : function(str){
					var arr = JSON.parse(str);
					console.log(str);
					
					$.ajax({
						type:"get",
						url:"../api/zhangyangche.php",
						async:true,
						data : "phone=" + phone+"&gid=" +$gid,
						success : function(str1){
							
							var arr1 = JSON.parse(str1);
							console.log(`${arr1[1][0].discoPrice*arr[0].num}`);
							$(".sum_price").html(`￥${arr1[1][0].discoPrice*arr[0].num}`)
							console.log($(".sum_price").html())
							
						}
					})		
				}
			});
		})
		$('.order_content').on('a click',".plus", function() {
			var num = $(this).prev().val();
			var $gid = $(this).parent().parent().parent().attr("data-id");
			
//			console.log(num,$gid,$phone);
			$.ajax({
				type:"get",
				url:"../api/car.php",
				async:true,
				data : "num=" + num + "&phone=" + $phone+"&gid=" +$gid,
				success : function(str){
					var arr = JSON.parse(str);
					console.log(str);
					
					$.ajax({
						type:"get",
						url:"../api/zhangyangche.php",
						async:true,
						data : "phone=" + phone+"&gid=" +$gid,
						success : function(str1){
							
							var arr1 = JSON.parse(str1);
							console.log(`${arr1[1][0].discoPrice*arr[0].num}`);
							$(".sum_price").html(`￥${arr1[1][0].discoPrice*arr[0].num}`)
							console.log($(".sum_price").html())
							
						}
					})		
				}
			});
		})
})
