"use strict"
console.log('Hello friend');

let elements = {
    phoneBox: document.getElementById('items')
}
let template = [''];

let phones = [
    {"name": "HUAWEI MATE S1", "price": "$280.00", "lowerPrice": "$320.00", "photo": "phone1.png"},
    {"name": "SONY XPERIA Z5", "price": "$550.00", "lowerPrice": "", "photo": "phone2.png"},
    {"name": "Xiaomi Mi 4i", "price": "$350.00", "lowerPrice": "", "photo": "phone3.png"},
    {"name": "HUAWEI MATE S4", "price": "$280.00", "lowerPrice": "", "photo": "phone4.png"},
    {"name": "Samsung Galaxy M12", "price": "$190.00", "lowerPrice": "$195.00", "photo": "1.jpg"},
    {"name": "Samsung Galaxy A51", "price": "$330.00", "lowerPrice": "", "photo": "2.jpg"},
    {"name": "Asus ZenFone 8", "price": "$900.00", "lowerPrice": "1140.00", "photo": "3.jpg"},
    {"name": "Nokia 5.4", "price": "$240.00", "lowerPrice": "", "photo": "4.jpg"},
  
    {"name": "Apple iPhone 12 Pro Max", "price": "$1760.00", "lowerPrice": "", "photo": "iphone1.jpg"},
    {"name": "Apple iPhone 12", "price": "$990.00", "lowerPrice": "1000.00", "photo": "iphone2.jpg"},
    {"name": "Apple iPhone SE", "price": "$560.00", "lowerPrice": "", "photo": "iphone3.jpg"},
    {"name": "Apple iPhone 12 Pro", "price": "$1920.00", "lowerPrice": "", "photo": "iphone4.jpg"},
    {"name": "Apple MacBook Air 13", "price": "$1500.00", "lowerPrice": "1560.00", "photo": "mac1.jpg"},
    {"name": "Apple MacBook Pro 13\" A2251 Retina", "price": "$3230.00", "lowerPrice": "", "photo": "mac2.jpg"},
    {"name": "Apple MacBook Pro 13\" M1", "price": "$1870.00", "lowerPrice": "", "photo": "mac3.jpg"},
    {"name": "Apple MacBook Pro 16\"", "price": "$4100.00", "lowerPrice": "", "photo": "mac4.jpg"},
  
    {"name": "Xiaomi Redmi Note 9", "price": "$1340.00", "lowerPrice": "$1370.00", "photo": "x1.jpg"},
    {"name": "Xiaomi Redmi Note 10 Pro", "price": "$220.00", "lowerPrice": "230.00", "photo": "x2.jpg"},
    {"name": "Xiaomi Redmi 9A", "price": "$100.00", "lowerPrice": "", "photo": "x3.jpg"},
    {"name": "Xiaomi Mi 11 Lite", "price": "$230.00", "lowerPrice": "", "photo": "x4.jpg"},
    {"name": "OPPO Reno5 Lite", "price": "$210.00", "lowerPrice": "", "photo": "o1.jpg"},
    {"name": "OPPO A15s", "price": "$120.00", "lowerPrice": "", "photo": "o2.jpg"},
    {"name": "OPPO A53", "price": "$110.00", "lowerPrice": "", "photo": "o3.jpg"},
    {"name": "OPPO A52", "price": "$190.00", "lowerPrice": "", "photo": "o4.jpg"},
  
    {"name": "Microsoft Surface Laptop 3 - 13.5\"", "price": "$1260.00", "lowerPrice": "", "photo": "note1.jpg"},
    {"name": "Microsoft Surface Book 3", "price": "$1150.00", "lowerPrice": "", "photo": "note2.jpg"},
    {"name": "Microsoft Surface Pro 7 Platinum", "price": "$987.00", "lowerPrice": "", "photo": "note3.jpg"},
    {"name": "Microsoft Surface Laptop GO", "price": "$1320.00", "lowerPrice": "", "photo": "note4.jpg"},
    {"name": "Xiaomi Mi RedmiBook 14\"", "price": "$1230.00", "lowerPrice": "", "photo": "note5.jpg"},
    {"name": "Xiaomi Mi Notebook Pro 15.6", "price": "$1110.00", "lowerPrice": "", "photo": "note6.jpg"},
    {"name": "Xiaomi Mi RedmiBook 16\"", "price": "$1140.00", "lowerPrice": "", "photo": "note7.jpg"},
    {"name": "Xiaomi Mi RedmiBook 13\"", "price": "$1340.00", "lowerPrice": "", "photo": "note8.jpg"}
]

let renderItems = (arrayPhone) => {

    let newIndex = -1;

    for (let i = 0; i < arrayPhone.length; i++) {
        
        if((i % 8) == 0) {
            newIndex += 1; 
        }

        createItem(arrayPhone[i], newIndex);
    }
    console.table(template);
    elements.phoneBox.innerHTML = template[0];
}

let createItem = (dataItem, index) => {

    console.log(index)

    template[index] += `<div class="card"> 
                            <div class="card__img">
                                <img src="/images/phones/${dataItem.photo}" alt="phone">
                            </div>
                            <span class="card__title">
                                ${dataItem.name}
                            </span>
                            <span class="card__price">
                                ${dataItem.price}
                                <span class="card__old-price">
                                    ${dataItem.lowerPrice}
                                </span>
                            </span>
                            <div class="card__btn-box">
                                <button class="card__button">
                                    <svg class="card__icon">
                                        <use xlink:href="images/sprite.svg#dustbin" alt="search"></use>
                                    </svg>
                                </button>
                                <button class="card__button">
                                    <svg class="card__icon">
                                        <use xlink:href="images/sprite.svg#basket" alt="search"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>`;
}

renderItems(phones);