
$('document').ready(function(){ 

$('#name_input, #slogan, #location' ).change( 
function(element)
    {
        console.log('start')
 var target_wrapper = element.target.parentNode;  
 if (element.target.value){
     if(!target_wrapper.classList.contains('has-success')){
            target_wrapper.classList.add('has-success' )
            target_wrapper.classList.add('has-feedback')
     }
 }
 else if (!element.target.value){
      if(target_wrapper.classList.contains('has-success')){
            target_wrapper.classList.remove('has-success' )
            target_wrapper.classList.remove('has-feedback')
        }
    } 
})


$('#form').submit(function(e){ 
    e.preventDefault();
				
            var data = $(this).serialize();
            console.log(data);
         
   
    $.ajax({
                    url: 'test.php',
                    type: 'post',
                    data: $(this).serialize(),

                    beforeSend: function(xhr, textStatus){ 
                       //  $('form#feedback-form :input').attr('disabled','disabled');
                    },

                    success: function(data, textStatus, jqXHR){
                                                                    console.log("We did it", data, textStatus, jqXHR)
                        
                        
                                    },
                    error: function (jqXHR, textStatus, errorThrown){
                                                                      console.log('Fail', jqXHR, textStatus, errorThrown)
                                    }
            }); // end ajax({...})
    
	});






    
    
   

  /*   // Теперь отправим наше письмо с помощью AJAX
     $('form#feedback-form').submit(function(e){

         // Запрещаем стандартное поведение для кнопки submit
         e.preventDefault();

         // После того, как мы нажали кнопку "Отправить", делаем проверку,
         // если кол-во полей с классом .not_error равно 3 (так как у нас всего 3 поля), то есть все поля заполнены верно,
         // выполняем наш Ajax сценарий и отправляем письмо адресату

         if($('.not_error').length == 3)
         {
            // Eще одним моментом является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
            // и вызываем метод .serialize().
            // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

             $.ajax({
                    url: 'send.php',
                    type: 'post',
                    data: $(this).serialize(),

                    beforeSend: function(xhr, textStatus){ 
                         $('form#feedback-form :input').attr('disabled','disabled');
                    },

                   success: function(response){
                        $('form#feedback-form :input').removeAttr('disabled');
                        $('form#feedback-form :text, textarea').val('').removeClass().next('.error-box').text('');
                        alert(response);
                   }
            }); // end ajax({...})
        }

        // Иначе, если количество полей с данным классом не равно значению 3, мы возвращаем false,
        // останавливая отправку сообщения в невалидной форме
       else
       {
          return false;
       }

   }); // end submit()

    
    
    */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    





});
