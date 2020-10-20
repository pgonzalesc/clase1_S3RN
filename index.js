const numbers = [0,2,6,7,9];
const newNumbers = Array.from(numbers,function increment(number){
    return number +1;
});

console.log(newNumbers); //Suma 1 a cada elemento del array

const summarize = (acumulator, number) => {
    return acumulator + number;
}

const sum = numbers.reduce(summarize, 0);
console.log(sum); //Suma todos los elementos

const sumx = numbers.reduce((acc,nmm)=>{
    return acc + nmm;
}, 0);

console.log(sumx); //Suma todos los elementos