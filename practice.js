// const arr = ["hamza", "ALi", "Akbar"];

// const newarr = arr.splice(1, 1, "junaid");

// console.log(newarr);
// console.log(arr);

var arr1 = [1, 2, 3, 4, 5];

arr1.forEach((ele, index, array1) => {
  //   console.log(ele * ele);
});

let newArr = arr1
  .map((ele, index, arr) => {
    return ele;
  })
  .filter((ele) => {
    return ele > 3;
  });

console.log(newArr);

let sum = arr1.reduce((accumulator, curEle, index, arrEx) => {
  return (accumulator += curEle);
});

console.log(sum);
