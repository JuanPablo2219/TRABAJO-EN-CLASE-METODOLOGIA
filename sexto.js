let nums = [12, 14, 5, 7]
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 7 != 0) {
        sum += nums[i];
    }
}
console.log(sum);