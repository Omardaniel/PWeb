

$(document).ready(

  function(){

    var nuevacarta;
    var cont=1 ;
    var numero= 2000;;
    var contador=0;
    setInterval(

      function(){
        //console.log('Hola');
        
        nuevacarta = 'img/lote-'+cont+'.jpg';
        $('#cartaMaestra').attr('src',nuevacarta);
                cont++;
              
                if(cont==32)
                {
                  
                  alert('PERDISTE')
                
                }

      },numero
    );

    $('.carta').click(
      function(){
        $(this).attr('src',"img/x.jpg");
          contador++;
          if(contador==8)
          {
             alert('GANASTE')
             numero=10000;
          }
            
      }
    );

        }
    );









