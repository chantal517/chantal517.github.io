//Jquery validate plugin validates form for requirements 3f and 3g
$(function() {

  $("form[name='contactForm']").validate({
    // Specify validation rules
    rules: {

      name: "required",
      message: "required",
      email: {
        required: true,

        email: true
      }
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      message: "Please enter your message",
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
