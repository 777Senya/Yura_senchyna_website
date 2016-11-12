$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/Senchina.yura@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(), 
                surname: $('#surname').val(), 
                tel: $('#tel').val(), 
                email: $('#email').val()
            },
            dataType: "json"
        })
        .done(function() {
            $('form').html('Thank you!');
        })
        .fail(function(){
            $('form').html('Error');
        })
    })
});

