

function unhide(divID) {
var item = document.getElementById(divID);
if (item) {
item.className=(item.className=='hidden');
}
}

function unhideMessage(divID) {
var item = document.getElementById(divID);
if (item) {
item.className=(item.className=='unhidden');
}
}

function showhide(id) {
       	var e = document.getElementById(id);
       	e.style.display = (e.style.display == 'none') ? 'none' : 'block';
     }

$(document).ready(function () {
         $(".btn1").click(function () {
             $("#hidediv").hide();
             $("#showingdiv").show();
         });

});

$(document).ready(function () {
         $(".btn2").click(function () {
             $("#hidediv1").hide();
             $("#showingdiv1").show();
         });

});


$(document).ready(function () {
         $(".btn3").click(function () {
             $("#hidediv2").hide();
             $("#showingdiv2").show();
         });

});
 
