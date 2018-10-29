$(function(){

    $(".btn").click(function (){

        let emailId = $(".emailId").val()
        console.log(emailId)
          
        if(validateEmail(emailId)){
              $.post('/server.php', {emailId}, function(data,error){
                       if(data.users.insertId){
                           alert('successfully added')
                       }
              })
        }  
    })

    // regex 
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

})