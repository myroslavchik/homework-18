// Створи масив «Список покупок». Кожен елемент масиву є об'єктом,
// який містить назву продукту, кількість і куплений він чи ні,
// ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
// що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту
// і відзначає його як придбаний.


let products = [
{
    name: 'egg',
    quantity: 10,
    bought: 'yes',
    price: 4,
    sum: 40
},
{
    name: 'bread',
    quantity: 2,
    bought: 'no',
    price: 15,
    sum: 30,
},
{
    name: 'butter',
    quantity: 1,
    bought: 'yes',
    price: 70,
    sum: 70,
},
{
    name: 'cheese',
    quantity: 3,
    bought: 'no',
    price: 200,
    sum: 600,
}
];

// function productsList (array) {
//     let sortedProducts = array.sort(function (a, b) {
//         if (a.bought > b.bought) {
//             return 1;
//         }
//         if (a.bought < b.bought) {
//             return -1;
//         }
//         if (a.bought === b.bought) {
//             return 0;
//         }
//     })
//     return sortedProducts;
// }


// console.log(productsList(products));


// function buyProduct(value) {
// objIndex = products.findIndex((obj => obj.name == value));
// products[objIndex].bought = 'yes';
// }

// buyProduct('bread');

// console.log(productsList(products));



// Видалення продукту зі списку (видалення повинно проводитися
// шляхом створення нового масиву, в якому продукт,
// що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки
// з уже існуючим в списку продуктом, необхідно збільшувати
// кількість в існуючій покупці, а не додавати нову.
// При цьому також повинна змінитися сума, наприклад,
// якщо ціна за одиницю 12, а кількості товарів стало 2,
// то сума буде 24.


// function deleteProduct(value) {
//     newProducts = products.filter((obj => obj.name != value));
// }

// deleteProduct('bread');
// console.log(newProducts);

///

// let egg = {
//     name: 'egg',
//     quantity: 80,
//     bought: 'yes',
//     price: 4,
//     sum: 40
// };

// function addProduct(value) {
//     let obj = products.find(e => e.name === value);
//     if (value === obj.name) {
//     obj.quantity += egg.quantity;
//     obj.sum = obj.price * obj.quantity;
//     }
// }

// addProduct('egg');
// console.log(products);

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми,
// (від більшого до меншого / від меншого до більшого,
// в залежності від параметра функції, який вона приймає)


// function sumProducts (array) {
// let counter = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i].quantity > 0) {
//     counter += array[i].quantity * array[i].price;
//   } 
// } return counter;
// }

// console.log(sumProducts(products));


// function sumNotBuyProducts (array) {
// let counter = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i].bought === 'no') {
//     counter += array[i].quantity * array[i].price;
//   } 
// } return counter;
// }

// console.log(sumNotBuyProducts(products));

// let min = 0;
// let max = 1;
// function productsList (array, b) {
//     if (b === min) {
//     let sortedOne = array.sort(function(a, b){return a.sum - b.sum})
//     return sortedOne;
//     }
//     if (b === max) {
//     let sortedTwo = array.sort(function(a, b){return b.sum - a.sum})
//     return sortedTwo;
//     }
// }

// console.log(productsList(products, min));

