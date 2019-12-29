// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  var i;
  for (i=0; i< 4; i++){
    emptyArray.push(musicians[i]+" plays "+instruments[i]);
  }
  return emptyArray;
}


function johnLennonFacts(fact) {
  var facts
  var emptyArray2 = [];
  var i;
  var whileLength = fact.length
  while (i < whileLength) {
    emptyArray2.push(fact[i]+"!!!");
    i++;
  }
  return emptyArray2;
}
