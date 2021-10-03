let x = 1221;

const isPalindrome = function (x) {
  if (x < 0) return false;

  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10))
    //The Math.floor() function returns the largest integer less than or equal to a given number.
    rev = rev * 10 + (i % 10);
  // first loop : rev = 0 + 1
  // second loop : rev = 10 + 2 =12
  /// third loop: rev = 120 + 2 = 122
  // fourth loop: rev = 1220 + 1 = 1221
  return rev === x; // 1221 === 1221
};
console.log(isPalindrome(x));
