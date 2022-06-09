//Javascript mini uzduotis

//Kintamuju inicijavimas

//1

const a = 1;
console.log(a);
const b = 2;
console.log(2);
const c = 3;
console.log(3);

const summ0 = a + b + c;
console.log(summ0);

//2

const t1 = `tekstas vienas`;
console.log(t1);
const t2 = `tekstas du`;
console.log(t2);
const t3 = `tekstas trys;`
console.log(t3);

console.log(t1, t2,  t3);


//3

const aa = 1;
const bb = 2;
const cc = 3;
const dd = 4;
const ee = 5;
const summ = aa + bb + cc + dd + ee;
const calc = aa - bb + cc - dd + ee;
console.log(aa, bb, cc, dd, ee);
console.log(summ);
console.log(calc);

const a1 = 11;
const b1 = 22;
const c1 = 33;
const d1 = 44;
const e1 = 55;
const summ1 = a1 + b1 + c1 + d1 + e1;
const calc1 = a1 - b1 + c1 - d1 + e1;
console.log(a1, b1, c1, d1, e1);
console.log(summ1);
console.log(calc1);

const ab = 111;
const bc = 222;
const cd = 333;
const de = 444;
const ef = 555;
const summ2 = ab + bc + cd + de + ef;
const calc2 = ab - bc + cd - de + ef;
console.log(ab, bc, cd, de, ef);
console.log(summ2);
console.log(calc2);

const summAll = summ0 + summ + summ1 + summ2;
console.log(summAll);

//4

const t11 = 'Labas';
const t22 = 'rytas';
const t33 = 'stai';
const t44 = 'ir';
const t55 = 'as';
console.log(t11, t22, t33, t44, t55);
console.log(t11, ',', t22, ',', t33, ',', t44, ',', t55);


const tt1 = 'Good';
const tt2 = 'morning';
const tt3 = 'here';
const tt4 = 'i';
const tt5 = 'am';
console.log(tt1, tt2, tt3, tt4, tt5);
console.log(tt1, ',', tt2, ',', tt3, ',', tt4, ',', tt5);

const tt11 = 'Pirmadienis';
const tt22 = 'Antradienis';
const tt33 = 'Treciadienis';
const tt44 = 'Ketvirtadienis';
const tt55 = 'Penktadienis';
// console.log(tt11, tt22, tt33, tt44, tt55);
// console.log(tt11, ',', tt22, ',', tt33, ',', tt44, ',', t55);

if (tt11 > tt22) {
    console.log('Pomidoras');
} else {
    console.log('Bandikite dar karta');
}

if (tt11 < tt22) {
    console.log('Pomidoras');
} else {
    console.log('Bandikite dar karta');
}

if (tt11 == tt22) {
    console.log('Pomidoras');
} else {
    console.log('Bandikite dar karta');
}

if (tt11 >= tt22) {
    console.log('Pomidoras');
} else {
    console.log('Bandikite dar karta');
}

if (tt11 <= tt22) {
    console.log('Pomidoras');
} else {
    console.log('Bandikite dar karta');
}

if (tt22 >= tt33) {
    console.log('Pomidoras');
} else {
    console.log('Bandikite dar karta');
}

if (tt33 > tt44) {
    console.log('Pomidoras');
} else {
    console.log('Bandikite dar karta');
}

// kintamuju palyginimas

const number = summ;
const number1 = summ1;

if (number > number1) {
    console.log('Bandikite dar karta');
} else {
    console.log('Pomidoras');
}

if (number == number1) {
    console.log('Pomidoras');
} else {
    console.log('Bandikite dar karta');
}


const number2 = summ2;
const number0 = summ0;

if (number2 > number0) {
    console.log('Pomidoras');
} else {
    console.log('Bandikite dar karta');
}

if (number2 == number0) {
    console.log('Pomidoras');
} else {
    console.log('Bandikite dar karta');
}

console.log('---------------------');

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console


const num = [1 + 2 + 3 + 4 + 5];
const num1 = [11 + 22 + 33 + 44 + 55];
const num2 = [111 + 222 + 333 + 444 + 555];

console.log(num);
console.log(num1);
console.log(num2);

//Susumuoti visus skaičiaus tipo kintamuosius
//Rezultatą išvesti į console


console.log('start');
console.log('--------------');
let suma = 0;
let suma1 = 0;
let suma2 = 0;

for (let i=0; i < num.length; i++) {
    const skaicius = num[i];
    suma += skaicius;
    console.log(suma);

}
console.log('--------------');
for (let i=0; i < num1.length; i++) {
    const skaicius1 = num1[i];
    suma1 += skaicius1;
    console.log(suma1);

}
console.log('--------------');
for (let i=0; i < num2.length; i++) {
    const skaicius2 = num2[i];
    suma2 += skaicius2;
    console.log(suma2);

}
const sumAll = suma + suma1 + suma2;
console.log('Final', suma, '+', suma1, '+', suma2, '=', sumAll);
console.log('--------------');
console.log('end');



//Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console

const text = ['vienas du trys keturi penki'];
const text1 = ['vienuolika dvylika trylika keturiolika penkiolika'];
const text2 = ['1 2 3 4 5'];

console.log(text);
console.log(text1);
console.log(text2);


//Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//1-2+3-4+5
//Rezultatą išvesti į console

const numbers = [1 - 2 + 3 - 4 + 5];
const numbers1 = [11 - 22 + 33 - 44 + 55];
const numbers2 = [111 - 222 + 333 - 444 + 555];

console.log(numbers);
console.log(numbers1);
console.log(numbers2);

//Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const texts = ['vienas, du, trys, keturi, penki, ',];
const texts1 = [' vienuolika, dvylika, trylika, keturiolika, penkiolika, ',];
const texts2 = [' 1, 2, 3, 4, 5'];

const showText = texts + text1 + text2;

console.log(texts);
console.log(texts1);
console.log(texts2);
//Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

//Tarpusavyje palyginti skaičiaus tipo kintamuosius:
//kuris didesnis
//kuris mažesnis
//ar jie lygūs
//ar jie nelygūs
//kuris didesnis arba lygus
//kuris mažesnis arba lygus


const x = 2;
const y = 5;

if (x > y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (x < y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (x === y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (x != y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (x >= y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (x <= y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
