
$( document ).ready(function() {
    console.log( "ready!" );

  $('#aboutMElink').click(function(){
   window.location.href='https://chantal517.github.io/webProj/templates/aboutMe.html ';
})
$('#projects').click(function(){
 window.location.href='https://chantal517.github.io/webProj/templates/projects.html';
})
$('#eduLink').click(function(){
 window.location.href='https://chantal517.github.io/webProj/templates/education.html';
})

$(".element").typed({
    strings: ["Tech Enthusiast", "Student", "Software Engineer", "Tech Enthusiast - Student - Software Engineer"],
    typeSpeed: 0,
    backDelay: 500,
    cursorChar: "",
    backSpeed:2

});

});


//http://localhost:8888/templates/aboutMe.html
