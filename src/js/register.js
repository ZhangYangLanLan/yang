//var time = 5;
var countdown = 60;
var user,psw11,psw22;

$(document).ready(function(){
    //类似于原生js的window.onload
    $("#phoneTxt").blur(function(){
    	$.ajax({
    		type:"get",
    		url:"../api/user.php",
    		data:"phone=" + $("#phoneTxt").val(),
    		success:function(str){
    			
    			var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    			
    			if(str=="yes"){
    				if(reg.test($("#phoneTxt").val())){
    					$(".prompt").html("账号正确");
	    				$(".prompt").css('color','green'); 
	    				$(".prompt").css('display','block');
	    				
	    				$(".register_box s").css('background-position','0 -102px');
//	    				console.log($(".prompt"))
						user = true;
    				}else{
    					$(".prompt").html("账号格式错误");
	    				$(".register_box s").css('background-position','0 -137px');
	    				$(".prompt").css('display','block'); 
	    				$(".prompt").css('color','red');
    				}
    				
    			}
    			if(str=="no"){
    				$(".prompt").html("账号已存在,请直接登录");
    		
    				$(".register_box s").css('background-position','0 -137px');
    				$(".prompt").css('display','block'); 
    				$(".prompt").css('color','red');
    			}
    			
    		}
    	})
    })
    
    var $isok = true;
    if($isok = true){
    	$(".slid").on({
    	mousedown:function(e){
    		var el = $(this);
    		var os = el.offset();
    		var dx = e.pageX-os.left;
    		var dy = e.pageY-os.top;
    		
    		
    		
    		$(document).on('mousemove.slid', function(e){ el.offset({left: e.pageX-dx});
    		var $abw = e.pageX-dx - 170;
    		$(".abc").css('width',$abw);
    		$(".abc").css('z-index','12');
    		if(el.offset().left<173){
    			
    			el.offset({left:173});
    			$(".abc").html("");
    			
    		}
    		if(el.offset().left>420){
    			
    			el.offset({left:420-1});
    			$(".abc").html("验证成功");
    			$(".abc").css('width',"250");
    			$(el).off('mousemove.slid');
    			$(".abc").css('color',"white");
    			$(".abc").css('fontSize',"18px");
    			$(".abc").css('textAlign',"center");
    			$(".abc").css('lineHeight',"44px");
    			e.preventDefault();
    			$isok = false;
    		}	
//  			console.log(os,dx,dy,e.pageX,el.offset().left);
			
    		});
    	},
    	mouseup: function(e){ $(document).off('mousemove.slid'); }

    })
    	
    }
    
    var randomNum = "";
    $(".codeBtn").click(function(e){
    	randomNum = Math.random().toFixed(6).slice(-6);
	    	$.ajax({
	    		type:"post",
	    		url:"../api/zhuce.php",
	    		data:"phone=" + $("#phoneTxt").val(),
	    		success:function(str){
	    			
	    			
	    			if(str=="yes"){
						if($isok){
	    					$(".tishi").css("display","block");
	    				}
	    				if(!$isok){
//	    					console.log($isok);
	    					settime();
	    					$(".tishi").css("display","none");
//	    					console.log(randomNum);
	    					
	    				}
		    		}		
	    			if(str=="no"){
//	    				
	    				$(".prompt").html("手机号码格式不正确,或者账号已存在");
//	    				console.log($isok,$("#phoneTxt").val());
	    				$(".prompt").css('color','red');
	    				
    					
	    					 
	    				

	    				
	    			}
	    			
	    		}
	    	})
	    	$.ajax({
	    		type:"post",
	    		url:"../api/duanxin.php",
	    		data:"userphone=" + $("#phoneTxt").val()+"&num="+randomNum,
	    		success:function(str){
	    			console.log(str);
	    		}
    		})
    })
    var pswReg = /^(?=.*[a-z][A-Z])(?=.*\d)(?=.*?[.#?!@$%^&*-]).{6,}$/;
    $(".psw01").blur(function(e){
    	if(pswReg.test($(".psw01").val())){
    		$(".tishiPsw").css("display","none")
    		console.log(1)
			if(!$isok){
				psw11 = true;
			}else{
				alert("请输入验证码")
			}
    		
    		$(".psw s").css('background-position','0 -102px');
    	}else{
    		$(".tishiPsw").css("display","block")
    		console.log($(".psw01").val())
			$(".psw s").css('background-position','0 -137px');
    	}
    })
    $(".psw02").blur(function(e){
    	if($(".psw02").val()==$(".psw01").val()){
    		
    		$(".tishiPsw2").css("display","none")
    		$(".psw2 s").css('background-position','0 -102px');
    		console.log(2)
    		psw22 = true;
    	}else{
    		$(".tishiPsw2").css("display","block")
//  		console.log($(".psw02").val())
			$(".psw2 s").css('background-position','0 -137px');
    	}
    })
    $(".log").click(function(e){
    	
//  			console.log(randomNum)
//  			console.log(user)
    			if(user){
    				console.log(user)
    				if(randomNum == $(".code_y").val()){
    					console.log($(".code_y").val())
    					if(psw11){
    						console.log($(".psw01").val)
    						if(psw22){
    							
    							console.log($(".psw02").val)
    							if($(".chek").is(':checked')){
    								$.ajax({
							    		type:"post",
							    		url : "../api/yanZheng.php",
							    		data: "phone=" +  $("#phoneTxt").val() + "&psw=" + $(".psw01").val(),
							    		success : function(str){
							    			console.log()
							    			location.href = "login.html?" + $("#phoneTxt").val();
							    		}
    								})
    								
    							}else{
    								alert("请勾选同意框")
    							}
    							
    						}else{
    							alert("再次输入密码错误")
    							
    						}
    					}else{
    						alert("密码格式错误")
    					}
    				}else{
    					alert("验证码不正确，请重新输入")
    				}
    			}else{
    				alert("用户名有误")
    			}
    		
    		
    		
    		
    		
    	
    })
 	
 	
 	
    
    
    
    
})
//简写
//$(function(){   });

function settime() {
	    if(countdown == 0) {
	        $(".codeBtn").attr("disabled", false);
	        $(".codeBtn").attr("value", "免费获取验证码");
	        countdown = 60;
	    } else {
	        $(".codeBtn").attr("disabled", true);
	        $(".codeBtn").attr("value", "重新发送(" + countdown + ")");
	        countdown--;
	        setTimeout(settime, 1000)
	    }
	}

