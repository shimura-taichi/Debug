function toOneDimension(previousValue,currentValue){
  return currentValue.concat(previousValue);
}
//↓修正しない
var sampleArrayA = [
  ['A1','A2','A3'],['B1','B2','B3'],['C1','C2','C3']
];


var sampleArrayB = sampleArrayA.reduce(toOneDimension);

//↓修正しない
for(var counterVar= 0; counterVar< sampleArrayB.length; counterVar++){
  document.write('sampleArrayB['+counterVar+']:');
  document.write(sampleArrayB[counterVar] );
  document.write( '<br/>');
}
