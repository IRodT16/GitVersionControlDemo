// function that takes in a string and reverses it

const str = 'this is my string';

const reverse = (str, sep) => {
  const newStr = str.split(sep).reverse().join(sep);
  console.log(newStr);
};
reverse(str, '');

// function that joins two arrays and puts them in ascending order

// const arr1 = [1, 3, 4];
// const arr2 = [2, 4, 1, 6, 8, 33, 2];

// const join = (list1, list2) => {
//   const newArr = list1.concat(list2);
//   const sortedArr = newArr.sort((a, b) => {
//     return b - a;
//   });

//   console.log(newArr);
//   console.log(sortedArr);
// };

// join(arr1, arr2);

// return lowest and highest value

const arr = [1, 5, 33, 88, 2, 4, 8, 1, 89, 345, 245, 2];

const maxMin = (array) => {
  newArr = array.sort((a, b) => {
    return a - b;
  });
  const arrLength = newArr.length - 1;
  console.log(arrLength);
  console.log(newArr);
  console.log(newArr[0], newArr[arrLength]);
};
maxMin(arr);

const factorial = (x) => {
  let answer = 1;
  for (let i = x; i >= 1; i--) {
    answer = answer * i;
  }
  return answer;
};
factorial(4);
console.log(factorial(5));
