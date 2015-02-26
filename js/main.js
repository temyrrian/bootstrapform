$('document').ready(function(){

$('#name_input, #slogan, #location' ).change( 
function(element){
 var target_wrapper = element.target.parentNode;

 if (element.target.value){
     if(!target_wrapper.classList.contains('has-success')){
            target_wrapper.classList.add('has-success' );
            target_wrapper.classList.add('has-feedback');
     }
 }
 else if (!element.target.value){
      if(target_wrapper.classList.contains('has-success')){
            target_wrapper.classList.remove('has-success' );
            target_wrapper.classList.remove('has-feedback');
        }
    } 
})


$('#form').submit(function(e){ 
    e.preventDefault();
        $.ajax({
               url: 'tefst.php',
               type: 'post',
               data: $(this).serialize(),

                    beforeSend: function(xhr, textStatus){ 
                         $('#submit_button').attr('disabled','disabled');
                    },
                    success: function(data, textStatus, jqXHR){
                        $('.success_handler').css('display','block');
                       },
                    error: function (jqXHR, textStatus, errorThrown){
                             console.log('Fail', jqXHR, textStatus, errorThrown)
                        $('.alert_handler').css('display','block');
                        $('#submit_button').removeAttr('disabled');
                       }
            });
	    });


});
