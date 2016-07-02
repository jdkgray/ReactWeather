//function getTempCallback (location, callback) {
  //callback(undefined, 78);
  //callback('City not found');
//}

//getTempCallback('Philedelphia', function (err, temp){
  //if (err) {
    //console.log('error',err);
  //} else {
    //console.log('success', temp);
  //}
//});

//function getTempPromise (location) {
  //return new Promise(function (resolve, reject) {
    //setTimeout(function (){
      //resolve(79);
      //reject('City not found');
    //}, 1000);
  //});
//}

//getTempPromise('Philadelphia').then(function (temp) {
  //console.log('promise success', temp);
//}, function (err) {
  //console.log('promise error',err);
//})

//if (typeof a == 'number') {

//}

//Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a == 'number' && typeof b == 'number') {
      resolve(a + b);
    } else{
      reject('a or b is not a number');
    }
  });
}

addPromise(8, 100).then(function (answer) {
  console.log('Answer:', answer);
}, function (err) {
  console.log('Error:',err);
})

addPromise('Jen', 9).then(function (answer) {
  console.log('this should not show up:');
}, function(err) {
  console.log('This should appear:', err);
});
