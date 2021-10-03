let nums = [2, 5, 1, 3, 4, 7];

let n = nums[nums.length / 2];

let removed = nums.splice(n, n);
//console.log(nums[n]);

// nums.splice(1, 0, removed[0]);
// nums.splice(3, 0, removed[1]);
// nums.splice(5, 0, removed[2]);

for (let i = 0; i < n; i++) {
  nums.splice(2 * i + 1, 0, removed[i]);
}

//console.log(removed);
console.log(nums);
