function toOneDimension(previousValue,currentValue){

  console.log('previousValue:', previousValue);
  console.log('currentValue:', currentValue);

  const result = currentValue.concat(previousValue);
  console.log(result);

  return result;

}
//↓修正しない
var sampleArrayA = [
 ['A1','A2','A3'],['B1','B2','B3'],['C1','C2','C3']
];

var sampleArrayB = sampleArrayA.reduce(toOneDimension);

//↓修正しない
for(var counterVar= 0; counterVar< sampleArrayB.length; counterVar++){
  console.log('sampleArrayB['+counterVar+']:');
  console.log(sampleArrayB[counterVar] );
  console.log( '<br/>');

  document.write('sampleArrayB['+counterVar+']:');
  document.write(sampleArrayB[counterVar] );
  document.write( '<br/>');
}
