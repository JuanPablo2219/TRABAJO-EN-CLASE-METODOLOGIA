let Nums = [8, 4, 10, 50];
let sum = 0;

for (let i = 0; i < Nums.length; i++) {
    if (Nums[i] > 10) { // los numeros del array Nums mayores a 10 ,lee
        sum = + Nums[i]; // sumar numeros almacenados
    }
}
console.log(sum); // se imprimira los numeros mayores a 10