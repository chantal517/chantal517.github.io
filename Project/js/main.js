$( document ).ready(function() {

//jquery ui widget - tabs - 5a
  $("#tabs").tabs();

  //jquery selectors by id 4a
  $('#mean').click(function(){
      window.location.href='https://chantal517.github.io/Project/mean.html#';
  })

  //jquery methods- click - 4b
  $('#median').click(function(){
      window.location.href='https://chantal517.github.io/Project/median.html';
  })
  $('#mode').click(function(){
      window.location.href='https://chantal517.github.io/Project/mode.html';
  })
  $('#contact').click(function(){
      window.location.href='https://chantal517.github.io/Project/contact.html';
  })
  $('#stats').click(function(){
      window.location.href='https://chantal517.github.io/Project/index.html';
  })
  //jquery effects hide 4d
  $('#examples').hide();

  //jquery effects show 5c
  $('#show').click(function(){
      $('#examples').show();
  });
  $('#show2').click(function(){
      $('#examples2').show();
  });

  var currentLocation = window.location.href;

  //JS if statement 3a
  if(currentLocation == "https://chantal517.github.io/Project/mean.html#"){
  //DOM creates elements and appends element 3b-1
      var para = document.createElement("p");
      var node = document.createTextNode("Good Job working through the example!");
      para.appendChild(node);
      var element = document.getElementById("answer");
      element.appendChild(para);

      var para2 = document.createElement("p");
      var node2 = document.createTextNode("Good Job working through the example!");
      para2.appendChild(node2);
      var element2 = document.getElementById("answer2");
      element2.appendChild(para2);

      var para3 = document.createElement("p");
      var node3 = document.createTextNode("Good Job working through the example!");
      para3.appendChild(node3);
      var element3 = document.getElementById("answer3");
      element3.appendChild(para3);
  }

  $(".nav a").on("click", function(){
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
  });
//used for a5 alert
  $('#submitButton').click(function(){
    var x = "Thanks, we will get back to you soon!";
      toAlert(x);
  })

});
//custom function for a4 requirement
function toAlert(message) {
    alert(message);
}
