$(function(){

    $(".btn").click(function (){

        let emailId = $(".emailId").val()
          
        if(validateEmail(emailId)){
              $.post('/url', {emailId}, function(data,error){
                       console.log(data)
              })
        }  
    })

    // regex 
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

})