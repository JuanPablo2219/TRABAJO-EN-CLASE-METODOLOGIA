let nums = [2, 1, 4, 3, 4]
let sum = 0;
for (let i = 1; i < nums.length; i++) {
    if (nums[i] == i) {
        sum += nums[i];
    }
}
console.log(sum);