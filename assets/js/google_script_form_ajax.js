var $form = $('form#rsvp-form'),
    url = 'https://script.google.com/macros/s/AKfycbyjlXn_khJVpZolea8CJAQK8IYE-fxym6uiIxjkR-qYMNBEZw/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault()
  var ajaxReq = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
    success:function(data) {
      document.getElementById("rsvp-form").reset();
       $('#msg').html("Thank you for your RSVP").fadeIn('slow') //also show a success message
       $('#msg').delay(5000).fadeOut('slow');
   }
 });
})
