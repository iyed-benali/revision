function sumBetween(start, end) {
 if(start ===end){
  return end
 }  
else if( start > end){
[start,end] = [end,start]
}
return start + sumBetween(start +1,end) 
}
sumBetween(2,7)
  















  
function sumBetween(start,end){
if(start > end){
    return 0
}
return start+sumBetween(start+1,end)
}


