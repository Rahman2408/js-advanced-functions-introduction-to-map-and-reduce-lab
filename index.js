// Your code here
function mapToNegativize(arry) {
  let newArry = []
    for (let i = 0; i < arry.length; i++) {
      newArry.push(arry[i] * -1);
    }
    return newArry;
}

function mapToNoChange(arry) {
  let newArry = arry 
  return newArry;
}

function mapToDouble(arry) {
  let newArry = []
    for (let i = 0; i < arry.length; i++) {
      newArry.push(arry[i] * 2);
    }
    return newArry;
}

function mapToSquare(arry) {
  let newArry = []
    for (let i = 0; i < arry.length; i++) {
      newArry.push(arry[i] ** 2);
    }
    return newArry;
}

function reduceToTotal(arry, start = 0) {
  let finValue = start
   
  for (let i = 0; i < arry.length; i++) {
    finValue = finValue + arry[i];
  }
  return finValue;
}
const isTrue = (num) => !!num 

function reduceToAllTrue(arry) {
   if (arry.every(isTrue)) {return true}
   else {return false}
} 
function reduceToAnyTrue(arry) {
  if (arry.some(isTrue)) {return true}
  else {return false}
} 