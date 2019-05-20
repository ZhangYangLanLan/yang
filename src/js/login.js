$(function(){
	var user;
	var psw11;
	$("#phoneTxt").blur(function(){
		$.ajax({
    		type:"get",
    		url:"../api/user.php",
    		data:"phone=" + $("#phoneTxt").val(),
    		success:function(str){
    			
    			var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    			
    			if(str=="yes"){
    				if(reg.test($("#phoneTxt").val())){
    					$(".prompt").html("账号未注册，请先注册");
	    				$(".prompt").css('color','red'); 
	    				$(".prompt").css('display','block');
	    				
	    				$(".register_box s").css('background-position','0 -137px');
//	    				console.log($(".prompt"))
						
    				}else{
    					$(".prompt").html("账号格式错误");
	    				$(".register_box s").css('background-position','0 -137px');
	    				$(".prompt").css('display','block'); 
	    				$(".prompt").css('color','red');
    				}
    				
    			}
    			if(str=="no"){
    				$(".prompt").html("账号已注册,可以登录");
    		
    				$(".register_box s").css('background-position','0 -102px');
    				$(".prompt").css('display','block'); 
    				$(".prompt").css('color','green');
    				user = true;
    			}
    			
    		}
    	})
	})
	var pswReg = /^(?=.*[a-z])(?=.*\d)(?=.*?[.#?!@$%^&*-]).{8,}$/;
	$(".psw01").blur(function(e){
    	if(pswReg.test($(".psw01").val())){
    		$(".tishiPsw").css("display","none")
    		$(".psw s").css('background-position','0 -102px');
    		psw11 = true;
    	}else{
    		$(".tishiPsw").css("display","block")
//  		console.log($(".psw01").val())
			$(".psw s").css('background-position','0 -137px');
    	}
    })
	$(".log").click(function(e){
    			if(user){
//  				console.log(suser)
					if(psw11){
						if($(".chek").is(':checked')){
							$.ajax({
								type:"post",
								url:"../api/denglu.php",
								data :"phone=" + $("#phoneTxt").val() + "&psw=" + $(".psw01").val(),
								success : function(str){
									if(str =='yes'){
										alert('登录成功')
										location.href='../zhangyang.html?'+$("#phoneTxt").val();
										setCookie('phone',$("#phoneTxt").val(),7);
									}if(str =='no'){
										alert('登录失败')
//										console.log($("#phoneTxt").val(), $(".psw01").val)
									}
								}
							})
						}else{
							$.ajax({
								type:"post",
								url:"../api/denglu.php",
								data :"phone=" + $("#phoneTxt").val() + "&psw=" + $(".psw01").val(),
								success : function(str){
									if(str =='yes'){
										alert('登录成功')
										location.href='../zhangyang.html?'+$("#phoneTxt").val();
										
									}if(str =='no'){
										alert('登录失败')
//										console.log($("#phoneTxt").val(), $(".psw01").val)
									}
								}
							})
						}
						
					}else{
						alert("密码格式有误")
					}
				}else{
				alert("用户名有误")
    			}
    		
    		
    		
    		
    		
    	
    })
});
