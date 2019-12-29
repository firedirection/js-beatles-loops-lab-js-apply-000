// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  var i;
  for (i=0; i< 4; i++){
    emptyArray.push(musicians[i]+" plays "+instruments[i]);
  }
  return emptyArray;
}

