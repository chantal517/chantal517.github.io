
$( document ).ready(function() {
    console.log( "ready!" );

  $('#aboutMElink').click(function(){
   window.location.href='https://github.com/chantal517/chantal517.github.io/blob/master/webProj/templates/aboutMe.html ';
})
$('#projects').click(function(){
 window.location.href='https://github.com/chantal517/chantal517.github.io/blob/master/webProj/templates/projects.html';
})
$('#eduLink').click(function(){
 window.location.href='https://github.com/chantal517/chantal517.github.io/blob/master/webProj/templates/education.html';
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
