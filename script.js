$(document).ready(function(){
    $('.background').hover(
		function(){$('.background').css("background-image", "url(imgs/img2.jpg)");},
		function(){$('.background').css("background-image", "url(imgs/img1.jpg)");}
	);
	
	$('#check').click(function() {
        if ($(this).is(':checked')) {
            $('#submit').removeAttr('disabled');
        } else {
            $('#submit').attr('disabled', 'disabled');
        }
    });
	
	$('input[type=text]').focus(function() {
		$(this).val('');
	});
	
	$("#submit").click(function(){
		console.log('Username: ' + $('#username').val());
		console.log('Password: ' + $('#password').val());		
		if($('#username').val()==='admin' && $('#password').val()==='password')
		{
			console.log('Hi, admin!');
			alert('Hi, admin!'); 			
		}
		$('#username').val('');
		$('#password').val('');
	});
});