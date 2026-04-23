let k = 5; // Istalgan son
let n = 3; // Necha marta chiqishi

for (let i = 0; i < n; i++) {
    console.log(k);
}


let narx = 20000; // 1 kg konfet narxi

for (let i = 1; i <= 10; i++) {
    let ogirlik = i * 0.1;
    let umumiy_narx = ogirlik * narx;
    // toFixed(1) sonlarni chiroyli formatlash uchun
    console.log(`${ogirlik.toFixed(1)} kg konfet narxi: ${umumiy_narx} so'm`);
}


let A = 2;
let B = 4;

for (let i = A; i <= B; i++) {
    let qator = "";
    for (let j = 0; j < i; j++) {
        qator += i + " ";
    }
    console.log(qator);
}

let g = 12;
console.log(`${n} ning bo'luvchilari:`);

for (let i = 1; i <= g; i++) {
    if (g % i === 0) {
        console.log(i);
    }
}


let son = 17;
let tubmi = true;

if (son < 2) {
    tubmi = false;
} else {
    for (let i = 2; i <= Math.sqrt(son); i++) {
        if (son % i === 0) {
            tubmi = false;
            break;
        }
    }
}

console.log( `${son} tub son emas`);


for (let i = 1; i <= 10; i++) {
    console.log(`--- ${i}-karra jadvali ---`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); // Har bir jadval orasida bo'sh qator
}