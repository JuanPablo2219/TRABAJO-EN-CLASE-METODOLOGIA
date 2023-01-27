let Nums = [0, 0, 2, 0, 8, 2];
let sum = 0;
for (let i = 0; i < Nums.length; i++) {
    if (Nums[i] == 0) {
        sum += i;
    }
}
console.log(sum);