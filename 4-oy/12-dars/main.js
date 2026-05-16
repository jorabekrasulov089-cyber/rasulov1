// 1) sumTo(n) — 1 dan n gacha yig‘indi

function sumTo(n) {
  if (n <= 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// Test
console.log(sumTo(5));   // 15
console.log(sumTo(1));   // 1
console.log(sumTo(0));   // 0
console.log(sumTo(-10)); // 0



// 2) isPrime(n) — tub son tekshirish

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Test
console.log(isPrime(2));  // true
console.log(isPrime(3));  // true
console.log(isPrime(4));  // false
console.log(isPrime(1));  // false
console.log(isPrime(17)); // true



// 3) reverseStr(str) — stringni teskari qilish

function reverseStr(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Test
console.log(reverseStr("salom")); // molas
console.log(reverseStr("abc"));   // cba
console.log(reverseStr(""));      // ""



// 4) countVowels(str) — unlilar sonini topish

function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

// Test
console.log(countVowels("Salom")); // 2
console.log(countVowels("JAVA"));  // 2
console.log(countVowels("mmm"));   // 0



// 5) findMax(arr) — eng katta sonni topish

function findMax(arr) {
  if (arr.length === 0) {
    return null;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Test
console.log(findMax([1, 5, 3]));      // 5
console.log(findMax([-10, -3, -7])); // -3
console.log(findMax([]));            // null



// 6) Student Manager (CRUD)

let students = [];



// 6.1) CREATE — createStudent(name, age, score)

function createStudent(name, age, score) {
  if (!name || name.trim() === "") {
    return "Invalid name";
  }

  if (age < 5) {
    return "Invalid age";
  }

  if (score < 0 || score > 100) {
    return "Invalid score";
  }

  let id;

  if (students.length === 0) {
    id = 1;
  } else {
    id = students[students.length - 1].id + 1;
  }

  const newStudent = {
    id: id,
    name: name,
    age: age,
    score: score,
  };

  students.push(newStudent);

  return newStudent;
}



// 6.2) READ — getStudentById(id)

function getStudentById(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }

  return null;
}



// 6.3) UPDATE — updateStudent(id, data)

function updateStudent(id, data) {
  let student = null;

  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      student = students[i];
      break;
    }
  }

  if (!student) {
    return "Student not found";
  }

  // name validation
  if ("name" in data) {
    if (!data.name || data.name.trim() === "") {
      return "Invalid name";
    }

    student.name = data.name;
  }

  // age validation
  if ("age" in data) {
    if (data.age < 5) {
      return "Invalid age";
    }

    student.age = data.age;
  }

  // score validation
  if ("score" in data) {
    if (data.score < 0 || data.score > 100) {
      return "Invalid score";
    }

    student.score = data.score;
  }

  return student;
}



// 6.4) DELETE — deleteStudent(id)

function deleteStudent(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      const deletedStudent = students[i];

      students.splice(i, 1);

      return deletedStudent;
    }
  }

  return null;
}



// =======================
// CRUD TEST
// =======================

console.log(createStudent("dili", 16, 85));
console.log(createStudent("abu", 17, 90));

console.log(getStudentById(1));

console.log(updateStudent(1, {
  name: "dili inomov",
  score: 95
}));

console.log(deleteStudent(2));

console.log(students);