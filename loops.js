function forLoop(array){
  for( let i = 0 ; i < 25; i++){
    if(i === 1){
    array.push(`I am 1 strange loop.`)
  } else {
    array.push(`I am ${i} strange loops.`)
  }
}
  return array;
}
let i = 0;
function whileLoop(number){
  while( number < i) {
    console.log(number)
    i--;
  }
return 'done'
}
