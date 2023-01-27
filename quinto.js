let nums = [1, 9, 3, 4, 5, 6, 12]
let sum = 0;
for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 3 == 0) {
        sum += nums[i];
    }
}
console.log(sum);