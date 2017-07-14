$(function(){
    $('.login').on('click',function(){
    	$.ajax({
    		url:'/user.ajax',
    		data:{
    			username:$.trim($('#username').val()),
    			password:$.trim($('#password').val())
    		},
    		type:'post'
    	})
    })
    $('.reg').on('click',function(){
    	alert('This is register button')
    })
});