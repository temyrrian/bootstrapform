
$('document').ready(function(){ 

$('#name_input, #slogan, #location' ).change( 
function(element)
    {
        console.log('start');
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
            var data = $(this).serialize();
            console.log(data);

    $.ajax({
                    url: 'test.php',
                    type: 'post',
                    data: $(this).serialize(),

                    beforeSend: function(xhr, textStatus){ 
                       //  $('#form ').attr('disabled','disabled');
                    },
                    success: function(data, textStatus, jqXHR){
                             console.log("We did it", data, textStatus, jqXHR);
                                    },
                    error: function (jqXHR, textStatus, errorThrown){
                             console.log('Fail', jqXHR, textStatus, errorThrown)
                                    }
            }); // end ajax({...})
	});

});
