$( document ).ready(function() {

//jquery ui widget - tabs - 5a
$("#tabs").tabs();

//jquery selectors by id 4a
$('#mean').click(function(){
 window.location.href='http://localhost:8888/mean.html';
})

//jquery methods- click - 4b
$('#median').click(function(){
 window.location.href='http://localhost:8888/median.html';
})
$('#mode').click(function(){
 window.location.href='http://localhost:8888/mode.html';
})
$('#contact').click(function(){
 window.location.href='http://localhost:8888/contact.html';
})
//jquery effects hide 4d
$('#examples').hide();

//jquery effects show 5c
$('#show').click(function(){
 $('#examples').show();
});

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




});
