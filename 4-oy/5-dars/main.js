// 1.
let user = { name: "jorabek", age: 20 };
console.log(user.name);
// ===========================
// 2.
let product = { title: "text", price: 100 };
console.log(product.price);
// ===========================
// 3.
let student = { name: "dili", active: true };
console.log(student.active);
// =============================
// 4.
let car = { brand: "Jentra", color: "black", year: 2022 };
console.log(car.color);
// ============================
// 5.
let phone = { brand: "iPhone", model: "13" };
console.log(phone['model']);
// ================================
// 6.
let user1 = { name: "jorabek", address: { city: "farg'ona" } };
console.log(user1.address.city);
// ===================================
// 7.
let users = [{ name: "jorabek", age: 20 }, { name: "dili", age: 22 }];
console.log(users[0].name);
// ==================================
// 8.
let student = { name: "jorabek", subjects: ["ona tili", "IT"] };
console.log(student.subjects[0]);
// =========================================
// 9.
let company = {
    name: "jorabek",
    employees: [
        { name: "jorabek", role: "dev" },
        { name: "dili", role: "manager" }
    ]
};
console.log(company.employees[1].role);
// ==========================================
// 10.
let user = {
    name: "jorabek",
    hobbies: ["car ", "code"],
    address: { city: "farg'ona" }
};
console.log(user.hobbies[0], user.address.city);
// ==========================================