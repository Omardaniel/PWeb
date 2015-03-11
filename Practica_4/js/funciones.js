    

$(document).ready(function()
	{

//alert('Hola desde jquery');
$('h1').hide('slow');
$('h1').show('slow');
$('h1').click(function()
	{
		$(this).hide('slow');
		$('#consola').html($(this).css('fontSize'));
		if($(this).css('fontSize')=='50px')
		{
			$(this).css('fontSize','32px')
		}
        $(this).show('fast');

        
      
	});
$('#btn2').click(function()
{
	$('#img1')attr('src','img/2.jpg');
});

$('#btn2').click(function()
{
	$('#img2ss')attr('src','img/2.jpg');
});

	});


   