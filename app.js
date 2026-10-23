// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const juft = [];
// const toq = [];

// for (let i of nums) {
//   if (i % 2 == 0) {
//     juft.push(i);
//   } else {
//     toq.push(i);
//   }
// }
// console.log();

// console.log(toq);

// =========================================================================================

// let str = ["olma", "banan", "uzum", "anor", "shaftoli"];

// max = 0;
// for (let i = 0; i < str.length - 1; i++) {
//   if (str[i].length >= str[i + 1].length) {
//     max = str[i];
//   } else {
//     max = str[i + 1];
//   }
// }
// console.log(max);
//

// let num = [45, 12, 89, 132, 453, 13, 3, 77, 5];
// let max = num[0];

// for (let i = 0; i < num.length - 1; i++) {
//   if (max <= num[i + 1]) {
//     max = num[i + 1];
//   }
// }
// console.log(max);

/////////////////////////////////////////////////////////////////////////////////////////////////

// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 8500000,
//     stock: 12,
//   },
//   {
//     id: 2,
//     name: "Mouse",
//     price: 150000,
//     stock: 25,
//   },
//   {
//     id: 3,
//     name: "Keyboard",
//     price: 350000,
//     stock: 8,
//   },
//   {
//     id: 4,
//     name: "Monitor",
//     price: 2200000,
//     stock: 0,
//   },
//   {
//     id: 5,
//     name: "Headphones",
//     price: 450000,
//     stock: 17,
//   },
// ];

// const totalPrice = products.reduce((sum, product) => {
//   return sum + product.price * product.stock;
// }, 0);

// console.log("Umumiy narx:", totalPrice, "so'm");

// function expensiveProduct() {
//   let maxPrice = 0;
//   let productName = "";

//   for (let i = 0; i < products.length; i++) {
//     if (products[i].price > maxPrice) {
//       maxPrice = products[i].price;
//       productName = products[i].name;
//     }
//   }

//   console.log(productName);
// }

// expensiveProduct();
// ===========================================================///////////////////////////////////////////=/=========

// function getProduct(name) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].name === name) {
//       console.log("Narxi:", products[i].price);
//       console.log("Soni:", products[i].stock);
//       return;
//     }
//   }

//   console.log("Mahsulot topilmadi");
// }

// getProduct("Headphones");

// ==================================================================//===============================================

// JavaScript — 10 ta amaliy masala: yechimlar (har bir masala o'z tegiga mos metod bilan)

const numbers = [12, 7, 23, 4, 11, 18, 5, 29, 10, 3, 16];

const students = [
  { id: 1, name: "Ali", score: 75 },
  { id: 2, name: "Vali", score: 45 },
  { id: 3, name: "Sardor", score: 92 },
  { id: 4, name: "Madina", score: 60 },
  { id: 5, name: "Malika", score: 88 },
  { id: 6, name: "Aziz", score: 52 },
  { id: 7, name: "Zarina", score: 97 },
  { id: 8, name: "Jasur", score: 34 },
];

const products = [
  { id: 1, name: "Laptop", price: 8500000, stock: 12 },
  { id: 2, name: "Mouse", price: 150000, stock: 5 },
  { id: 3, name: "Keyboard", price: 350000, stock: 8 },
  { id: 4, name: "Monitor", price: 2200000, stock: 15 },
  { id: 5, name: "Headphones", price: 450000, stock: 3 },
];

// 1. Tub sonlarni ajratish — ARRAY (for sikli + push)
function primeNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    let isPrime = n >= 2;
    for (let j = 2; j * j <= n; j++) {
      if (n % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result.push(n);
    }
  }
  return result;
}
console.log(primeNumbers(numbers));

// 2. Imtihondan o'tgan talabalar — FILTER
function passedStudents(list) {
  return list.filter((student) => student.score >= 60);
}
console.log(passedStudents(students));

// 3. Sonlar ko'paytmasi — REDUCE
function multiplyAll(arr) {
  return arr.reduce((acc, n) => acc * n, 1);
}
console.log(multiplyAll(numbers));

// 4. Omborda kam qolgan mahsulotlar — FILTER
function lowStockProducts(list) {
  return list.filter((product) => product.stock < 10);
}
console.log(lowStockProducts(products));

// 5. ID orqali mahsulotni topish — FIND
function findProductById(id) {
  return products.find((product) => product.id === id);
}
console.log(findProductById(3));

// 6. Eng yuqori ball olgan talaba — FIND MAX (for sikli)
function topStudent(list) {
  let top = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i].score > top.score) {
      top = list[i];
    }
  }
  return top;
}
console.log(topStudent(students));

// 7. Yangi talaba qo'shish — PUSH
function addStudent(student) {
  students.push(student);
  return students;
}
console.log(addStudent({ id: 9, name: "Kamola", score: 81 }));

// 8. Qimmat mahsulotlar — FILTER
function expensiveProducts(list) {
  return list.filter((product) => product.price > 500000);
}
console.log(expensiveProducts(products));

// 9. Har bir talabaning balini 10 ga oshirish — MAP (asl array o'zgarmaydi)
function addBonusScore(list) {
  return list.map((student) => ({
    id: student.id,
    name: student.name,
    score: student.score + 10,
  }));
}
console.log(addBonusScore(students));

// 10. Barcha mahsulotlarning umumiy qiymati — REDUCE
function totalValue(list) {
  return list.reduce((sum, p) => sum + p.price * p.stock, 0);
}
console.log(totalValue(products));
// test
