let nums = [3, 5, 8, 4,];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) { // % para determinar si un numero es impar
        sum += nums[i]; // += es para ya no repetir sum , esta variable sum sirve para sumar los numeros impares.
    }
}

console.log("aqui esta la suma de los numeros impares")

console.log(sum);
