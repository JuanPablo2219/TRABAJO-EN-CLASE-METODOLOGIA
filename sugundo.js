let Nums = [10, 50, 8, 4];
let sum = 0;

for (let i = 0; i < Nums.length; i++) {

    if (i % 2 == 0) {
        sum += Nums[i];
    }
}
console.log(sum);