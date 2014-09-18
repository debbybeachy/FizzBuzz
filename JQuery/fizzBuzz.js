$(document).ready(function(){
 
   console.log("ready")

$("button").on('click', function(){
   console.log("click");
   //remove the "li"with a click
   $("li").remove();

   var numberInput = prompt("Enter you number here")

   for (var i = 1; i <= numberInput; i++) {

      if (i % 3 == 0 && i % 5 == 0){
         $(".fbList").append("<li> FizzBuzz </li>")
      }
      else if (i % 3 == 0){
         $(".fbList").append("<li> Fizz </li>")
      }

      else if (i % 5 == 0){
         $(".fbList").append("<li> Buzz</li>")
      }
      else{
         $(".fbList").append("<li>"+ i +"</li>")
      }
   };
});

});//end of ready function









