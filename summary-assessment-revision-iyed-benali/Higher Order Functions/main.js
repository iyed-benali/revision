function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=============================================================================
  /*                              Q1                                           */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  // containingthe length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]
  
function lengths (str){

var arr = str.split(" ")
return arr.map(function(ele){
  console.log(ele)
  return ele.length 
})

}
   
  
  //=============================================================================
  /*                                  Q2                                    */
  //=============================================================================
  // Write a function that accepts one parameter: an array,
  // and returns the total amount that needs to be paid.
  // solve it using the most appropriate helper functions(reduce,each,map,filter).
  // totalPrice(lineItems); // 1*3 + 0.5*5 + 2*6 =  17.5
  const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3},
    { description: 'Cheese', quantity: 0.5, price: 5},
    { description: 'Butter', quantity: 2, price: 6}
  ];

  function totalPrice(arr){
    return arr.reduce(function(acc,ele){
     return    acc + ele.price * ele.quantity
    },0)
  }



  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  // write a function that takes an array of numbers as an input and returns an array
  // with only numbers that are strictly bigger than the average of that array
  // solve it using the most appropriate helper functions(reduce,each,map,filter).
  // moreThanAverage([1, 5, 3, 6, 10]) // [6, 10]
  ​

  function average(arr){
//part one 
var a =  arr.reduce(function(acc,ele){
    return   acc + ele 
},0) / arr.length
//part two 

return arr.filter(function(ele){
return ele > a
})
  }




  