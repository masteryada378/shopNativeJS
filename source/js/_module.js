"use strict";
console.log('Hello friend');
let elements = {
    phoneBox: document.getElementById('items'),
    pagination: document.getElementById('pagination'),
    search: document.getElementById('search__input'),
    cartBtn: document.getElementById('header-cart'),
    cartClose: document.getElementById('cart__close'),
    cartWrapper: document.getElementById('cart__wrapper'),
    cartDashboard: document.getElementById('dashboard'),
    cartContent: document.getElementById('cart__content'),
    bodyElement: document.body
}
let cartElementString = '';
let cartTemplate = [];
let template = ['','','','','','']; // если так не делать будет undefinde
let phonesArr = [
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
let addIdNumber = (arrayData)=>{
    for (let i = 0; i <arrayData.length; i++){
        arrayData[i].idIndex = i;
    }
} 
addIdNumber(phonesArr);
let newPhones = [];
let renderItems = (arrayPhone) => {
    
    template = ['','','','','','']; // ??????? 2 дня потратил 

    let newIndex = -1;
    for (let i = 0; i < arrayPhone.length; i++) {
        if((i % 8) == 0) {
            newIndex += 1; 
        }
        createItem(arrayPhone[i], newIndex);
    }
    elements.phoneBox.innerHTML = template[0];
};
let createItem = (dataItem, index) => {    
    template[index] += `<div class="card" data-id=${dataItem.idIndex}> 
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
};
let makePaginator = (phonesListLenghtArg) => {
    for (let i = 0; i < phonesListLenghtArg; i++) {
        elements.pagination.innerHTML += `<button>${i+1}</button>`;
    }
    if(!!elements.pagination.children[0]){
        elements.pagination.children[0].classList.add('active');
    } else {
        console.log('errorList');
    }
};
let initList = (phonesDataArgs) => {
    let phonesListLenght = phonesDataArgs.length / 8;
    makePaginator(phonesListLenght);

    renderItems(phonesDataArgs);
};
let paginatorHandler = (event) => {
    if(event.target.tagName === 'BUTTON'){
        for(let i = 0; i < elements.pagination.childElementCount; i++) {
            elements.pagination.children[i].classList.remove('active');
        }
        event.target.classList.add('active');
        let newIndex = (event.target.innerHTML - 1)
        elements.phoneBox.innerHTML = template[newIndex];
    }
};
elements.pagination.addEventListener('click',paginatorHandler);
initList(phonesArr);
let searchHandler = (event)=> {

    newPhones = [];
    let searchSimvol = event.target.value.toLowerCase();
    let dataInputStr = ''; 

    for (let i=0; i < phonesArr.length; i++) {
        dataInputStr = phonesArr[i].name.toLowerCase();        
        if(dataInputStr.indexOf(searchSimvol) >= 0) {         
            newPhones.push(phonesArr[i]);
        }
    }
    elements.phoneBox.innerHTML = '';
    elements.pagination.innerHTML = '';
    initList(newPhones);
};
elements.search.addEventListener('input',searchHandler);
let cartOpen = ()=> {
    elements.bodyElement.classList.add('body-fixed');
    elements.cartWrapper.classList.add('active');
    elements.cartDashboard.classList.add('active');
};
let cartClose = ()=> {
    elements.bodyElement.classList.remove('body-fixed');
    elements.cartWrapper.classList.remove('active');
    elements.cartDashboard.classList.remove('active');
};

elements.cartBtn.addEventListener('click', cartOpen);
elements.cartClose.addEventListener('click', cartClose);
elements.cartDashboard.addEventListener('click', cartClose);

let pushCart = ()=>{
    cartElementString = '';
    for (let i = 0; i < cartTemplate.length; i++) {
        cartElementString += `<div class="cart-item" data-id=${cartTemplate[i].idIndex}> 
                                <div class="cart-item__img">
                                    <img src="/images/phones/${cartTemplate[i].photo}" alt="phone">
                                </div>
                                <span class="cart-item__title">
                                    ${cartTemplate[i].name}
                                </span>
                                <div class="cart-item__right">
                                    <span class="cart-item__price">
                                        ${cartTemplate[i].price}
                                    </span>
                                    <button class="cart-item__button">
                                        <svg class="cart-item__icon">
                                            <use xlink:href="images/sprite.svg#dustbin" alt="search"></use>
                                        </svg>
                                    </button>
                                </div>
                             </div>`;
    }
}

let cartHandler = (event)=>{
    let element = event.target.closest('.card__btn-box');
    let numberId = null;
    if(!!element) {
        numberId = element.closest('.card').dataset.id;
        for (let i = 0; i <phonesArr.length; i++) {
            if(phonesArr[i].idIndex === +numberId) {
                cartTemplate.push(phonesArr[i]);
            }
        }
        pushCart();
        elements.cartContent.innerHTML = cartElementString;
    }
}

elements.phoneBox.addEventListener('click', cartHandler);
