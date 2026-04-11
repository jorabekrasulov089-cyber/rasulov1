// Boolean1
let A = 4;
let result1 = A % 2 === 0;
console.log(result1);
// =============================
// Boolean2
let A1 = 1, B = -3;
let result2 = (A1 >= 0)  (B < -2);
console.log(result2);
// ==============================
// Boolean3
let A3 = 2, B3 = 5, C3 = 10;
let result3 = (A3 < B3 && B3 < C3)  (C3 < B3 && B3 < A3);
console.log(result3);
// ===============================
// Boolean4
let A4 = 3, B4 = 5;
let result4 = (A4 % 2 !== 0) && (B4 % 2 !== 0);
console.log(result4);
// ===============================
// Boolean5
let A5 = 4, B5 = 5;
let result5 = (A5 % 2 !== 0)  (B5 % 2 !== 0);
console.log(result5);
// ===============================
// Boolean6 (faqat bittasi toq)
let A6 = 4, B6 = 5;
let result6 = (A6 % 2 !== 0) ^ (B6 % 2 !== 0);
console.log(Boolean(result6));
// =======================================
// Boolean7
let A7 = 1, B7 = 2, C7 = 3;
let result7 = (A7 > 0) && (B7 > 0) && (C7 > 0);
console.log(result7);
// ========================================
// Boolean8 (faqat bittasi musbat)
let A8 = -1, B8 = 2, C8 = -3;
let result8 = (A8 > 0) + (B8 > 0) + (C8 > 0) === 1;
console.log(result8);
// ============================================
// Boolean9 (faqat ikkitasi musbat)
let A9 = 1, B9 = 2, C9 = -3;
let result9 = (A9 > 0) + (B9 > 0) + (C9 > 0) === 2;
console.log(result9);
// ===========================================
// Boolean10 (ikki xonali juft)
let A10 = 24;
let result10 = (A10 >= 10 && A10 <= 99) && (A10 % 2 === 0);
console.log(result10);
// =================================================
// Boolean11 (uch xonali toq)
let A11 = 135;
let result11 = (A11 >= 100 && A11 <= 999) && (A11 % 2 !== 0);
console.log(result11);
//==================================================
// Boolean12 (qarama-qarshi juftlik bor)
let A12 = 3, B12 = -3, C12 = 5;
let result12 = (A12 === -B12)  (A12 === -C12)  (B12 === -C12);
console.log(result12);
// ====================================================
// Boolean13 (raqamlar o‘suvchi)
let A13 = 123;
let a13 = Math.floor(A13 / 100);
let b13 = Math.floor((A13 % 100) / 10);
let b100 = Math.floor((A13 % 100) / 10);

let c13 = A13 % 10;

let result13 = a13 < b13 && b13 < c13;
console.log(result13);
// ========================================================
// Boolean14 (o‘suvchi yoki kamayuvchi)
let A14 = 321;
let a14 = Math.floor(A14 / 100);
let b14 = Math.floor((A14 % 100) / 10);
let c14 = A14 % 10;

let result14 = (a14 < b14 && b14 < c14)  (a14 > b14 && b14 > c14);
console.log(result14);
// =========================================================