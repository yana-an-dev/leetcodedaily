//7. Reverse Integer
//Given a signed 32-bit integer x,
//return x with its digits reversed.
//If reversing x causes the value to go outside the signed 32-bit
//integer range [-231, 231 - 1], then return 0.

//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//console.log("problem 7");

let x = 901000; //000109

const reverse = function (x) {
  let arr = Array.from(String(x), Number);
  let rev_arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (x === 0) {
        return 0;
      }
    if (arr[0] !== 0) {
      rev_arr.push(arr[i]);
    }
    if( arr[0] === 0 && arr[arr.length-1] !==0){
        //  0이 아닌 첫 인덱스를 찾아서 잘라서 푸시하기
        rev_arr.push(arr[i]);//[0,0,0,1,0,9]
        let y = 0;
        rev_arr.indexOf(Not y)

    }
    
  }
  // 마이너스 처리하기
  if (isNaN(rev_arr[rev_arr.length - 1])) {
    rev_arr.pop();
    rev_arr.unshift("-");
    console.log(rev_arr.join(""));
    return rev_arr.join("");
  } else {
    console.log(rev_arr.join(""));
    return rev_arr.join("");
  }
};

reverse(x);

// let rev_arr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] !== 0) {
//     rev_arr.push(arr[i]);
//   }
// }

// console.log(rev_arr[rev_arr.length - 1]);
// console.log(rev_arr);
// rev_arr.unshift("-");
// rev_arr.pop();
// console.log(rev_arr.join(""));

// function test(a) {
//   let result;
//   if (rev_arr[rev_arr.length - 1] == NaN) {
//     rev_arr.unshift("-");
//     rev_arr.pop();
//     result = rev_arr.join("");
//   } else {
//     result = rev_arr.join("");
//   }
//   return result;
// }

// console.log(test(rev_arr));

// let a = {a: 1, b: 2}
// a['a']

// let a = {1: 999, 2: 8888}
// a[1]

// let b = [300, 400]
// let b = {0: 300, 1: 400}

// b[-1]
