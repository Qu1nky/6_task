function createLink(category) {
    return function(productCode) {
        return `http://myshop.ru/${category}/${productCode}`;
    };
}

// Создаем функции для каждой категории
const createPCLink = createLink('PC');
const createNotebooksLink = createLink('Notebooks');
const createMonitorLink = createLink('Monitors');

// Примеры использования
console.log(createPCLink(1001));        // http://myshop.ru/PC/1001
console.log(createNotebooksLink(4004));  // http://myshop.ru/Notebooks/4004
console.log(createMonitorLink(345));      // http://myshop.ru/Monitors/345


function printOrderDetails() {
    let orders=[
        {
            fio:"Ivan",
            tovar:"phone",
            price:10000,
            quantity:2
        },
        {
            fio:"Peter",
            tovar:"usb",
            price:2300,
            quantity:5
        },
        {
            fio:"Mary",
            tovar:"connector",
            price:100,
            quantity:100
        },
       ]
       let next = 'y';
       while(next.toLowerCase() == 'y'){
            let discount = prompt("Введите скидку в процентах:");
            if(discount<=100 && discount>=0){
                 orders.forEach(order=>{console.log(`Покупатель ${order.fio} приобрел товар: ${order.tovar} на сумму ${(order.price*order.quantity)-(order.price*order.quantity)*discount/100}, скидка составила ${discount}%`)});
            }
            else alert("Скидка должна быть в диапазоне от 0 до 100!")
            next = prompt("Хотите продолжить? (y/n)");
       }
}

printOrderDetails();
