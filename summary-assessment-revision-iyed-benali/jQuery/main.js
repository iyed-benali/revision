$(function() {
var count = ($('.count').text())

console.log(typeof count)
console.log(count ++ )


$('.upvote').click(function(){
   count ++ 
   $('.count').html(count) 
  })
  $('.downvote').click(function(){
    count -- 
    $('.count').html(count) 
  })
  


});