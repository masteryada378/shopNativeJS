"use strict";

console.log('Hello friend');
var elements = {
  phoneBox: document.getElementById('items'),
  pagination: document.getElementById('pagination'),
  search: document.getElementById('search__input'),
  cartBtn: document.getElementById('header-cart'),
  cartClose: document.getElementById('cart__close'),
  cartWrapper: document.getElementById('cart__wrapper'),
  cartDashboard: document.getElementById('dashboard'),
  cartContent: document.getElementById('cart__content'),
  bodyElement: document.body
};
var cartElementString = '';
var cartTemplate = [];
var template = ['', '', '', '', '', '']; // если так не делать будет undefinde

var phonesArr = [{
  "name": "HUAWEI MATE S1",
  "price": "$280.00",
  "lowerPrice": "$320.00",
  "photo": "phone1.png"
}, {
  "name": "SONY XPERIA Z5",
  "price": "$550.00",
  "lowerPrice": "",
  "photo": "phone2.png"
}, {
  "name": "Xiaomi Mi 4i",
  "price": "$350.00",
  "lowerPrice": "",
  "photo": "phone3.png"
}, {
  "name": "HUAWEI MATE S4",
  "price": "$280.00",
  "lowerPrice": "",
  "photo": "phone4.png"
}, {
  "name": "Samsung Galaxy M12",
  "price": "$190.00",
  "lowerPrice": "$195.00",
  "photo": "1.jpg"
}, {
  "name": "Samsung Galaxy A51",
  "price": "$330.00",
  "lowerPrice": "",
  "photo": "2.jpg"
}, {
  "name": "Asus ZenFone 8",
  "price": "$900.00",
  "lowerPrice": "1140.00",
  "photo": "3.jpg"
}, {
  "name": "Nokia 5.4",
  "price": "$240.00",
  "lowerPrice": "",
  "photo": "4.jpg"
}, {
  "name": "Apple iPhone 12 Pro Max",
  "price": "$1760.00",
  "lowerPrice": "",
  "photo": "iphone1.jpg"
}, {
  "name": "Apple iPhone 12",
  "price": "$990.00",
  "lowerPrice": "1000.00",
  "photo": "iphone2.jpg"
}, {
  "name": "Apple iPhone SE",
  "price": "$560.00",
  "lowerPrice": "",
  "photo": "iphone3.jpg"
}, {
  "name": "Apple iPhone 12 Pro",
  "price": "$1920.00",
  "lowerPrice": "",
  "photo": "iphone4.jpg"
}, {
  "name": "Apple MacBook Air 13",
  "price": "$1500.00",
  "lowerPrice": "1560.00",
  "photo": "mac1.jpg"
}, {
  "name": "Apple MacBook Pro 13\" A2251 Retina",
  "price": "$3230.00",
  "lowerPrice": "",
  "photo": "mac2.jpg"
}, {
  "name": "Apple MacBook Pro 13\" M1",
  "price": "$1870.00",
  "lowerPrice": "",
  "photo": "mac3.jpg"
}, {
  "name": "Apple MacBook Pro 16\"",
  "price": "$4100.00",
  "lowerPrice": "",
  "photo": "mac4.jpg"
}, {
  "name": "Xiaomi Redmi Note 9",
  "price": "$1340.00",
  "lowerPrice": "$1370.00",
  "photo": "x1.jpg"
}, {
  "name": "Xiaomi Redmi Note 10 Pro",
  "price": "$220.00",
  "lowerPrice": "230.00",
  "photo": "x2.jpg"
}, {
  "name": "Xiaomi Redmi 9A",
  "price": "$100.00",
  "lowerPrice": "",
  "photo": "x3.jpg"
}, {
  "name": "Xiaomi Mi 11 Lite",
  "price": "$230.00",
  "lowerPrice": "",
  "photo": "x4.jpg"
}, {
  "name": "OPPO Reno5 Lite",
  "price": "$210.00",
  "lowerPrice": "",
  "photo": "o1.jpg"
}, {
  "name": "OPPO A15s",
  "price": "$120.00",
  "lowerPrice": "",
  "photo": "o2.jpg"
}, {
  "name": "OPPO A53",
  "price": "$110.00",
  "lowerPrice": "",
  "photo": "o3.jpg"
}, {
  "name": "OPPO A52",
  "price": "$190.00",
  "lowerPrice": "",
  "photo": "o4.jpg"
}, {
  "name": "Microsoft Surface Laptop 3 - 13.5\"",
  "price": "$1260.00",
  "lowerPrice": "",
  "photo": "note1.jpg"
}, {
  "name": "Microsoft Surface Book 3",
  "price": "$1150.00",
  "lowerPrice": "",
  "photo": "note2.jpg"
}, {
  "name": "Microsoft Surface Pro 7 Platinum",
  "price": "$987.00",
  "lowerPrice": "",
  "photo": "note3.jpg"
}, {
  "name": "Microsoft Surface Laptop GO",
  "price": "$1320.00",
  "lowerPrice": "",
  "photo": "note4.jpg"
}, {
  "name": "Xiaomi Mi RedmiBook 14\"",
  "price": "$1230.00",
  "lowerPrice": "",
  "photo": "note5.jpg"
}, {
  "name": "Xiaomi Mi Notebook Pro 15.6",
  "price": "$1110.00",
  "lowerPrice": "",
  "photo": "note6.jpg"
}, {
  "name": "Xiaomi Mi RedmiBook 16\"",
  "price": "$1140.00",
  "lowerPrice": "",
  "photo": "note7.jpg"
}, {
  "name": "Xiaomi Mi RedmiBook 13\"",
  "price": "$1340.00",
  "lowerPrice": "",
  "photo": "note8.jpg"
}];

var addIdNumberAndFlag = function addIdNumberAndFlag(arrayData) {
  for (var i = 0; i < arrayData.length; i++) {
    arrayData[i].idIndex = i;
    arrayData[i].inCart = false;
  }
};

addIdNumberAndFlag(phonesArr);
var newPhones = [];

var renderItems = function renderItems(arrayPhone) {
  template = ['', '', '', '', '', '']; // ??????? 2 дня потратил 

  var newIndex = -1;

  for (var i = 0; i < arrayPhone.length; i++) {
    if (i % 8 == 0) {
      newIndex += 1;
    }

    createItem(arrayPhone[i], newIndex);
  }

  elements.phoneBox.innerHTML = template[0];
};

var createItem = function createItem(dataItem, index) {
  var inCart = '';

  if (dataItem.inCart) {
    inCart = 'in-cart';
  }

  template[index] += "<div class=\"card\" data-id=".concat(dataItem.idIndex, "> \n                            <div class=\"card__img\">\n                                <img src=\"images/phones/").concat(dataItem.photo, "\" alt=\"phone\">\n                            </div>\n                            <span class=\"card__title\">\n                                ").concat(dataItem.name, "\n                            </span>\n                            <span class=\"card__price\">\n                                ").concat(dataItem.price, "\n                                <span class=\"card__old-price\">\n                                    ").concat(dataItem.lowerPrice, "\n                                </span>\n                            </span>\n                            <div class=\"card__btn-box\">\n                                <button class=\"card__button card__button--basket  ").concat(inCart, "\">\n                                    <svg class=\"card__icon\">\n                                        <use xlink:href=\"images/sprite.svg#dustbin\" alt=\"search\"></use>\n                                    </svg>\n                                </button>\n                                <button class=\"card__button card__button--cart ").concat(inCart, "\">\n                                    <svg class=\"card__icon\">\n                                        <use xlink:href=\"images/sprite.svg#basket\" alt=\"search\"></use>\n                                    </svg>\n                                </button>\n                            </div>\n                        </div>");
};

var makePaginator = function makePaginator(phonesListLenghtArg) {
  for (var i = 0; i < phonesListLenghtArg; i++) {
    elements.pagination.innerHTML += "<button>".concat(i + 1, "</button>");
  }

  if (!!elements.pagination.children[0]) {
    elements.pagination.children[0].classList.add('active');
  } else {
    console.log('errorList');
  }
};

var initList = function initList(phonesDataArgs) {
  var phonesListLenght = phonesDataArgs.length / 8;
  makePaginator(phonesListLenght);
  renderItems(phonesDataArgs);
};

var paginatorHandler = function paginatorHandler(event) {
  if (event.target.tagName === 'BUTTON') {
    for (var i = 0; i < elements.pagination.childElementCount; i++) {
      elements.pagination.children[i].classList.remove('active');
    }

    event.target.classList.add('active');
    var newIndex = event.target.innerHTML - 1;
    elements.phoneBox.innerHTML = template[newIndex];
  }
};

initList(phonesArr);

var searchHandler = function searchHandler(event) {
  newPhones = [];
  var searchSimvol = event.target.value.toLowerCase();
  var dataInputStr = '';

  for (var i = 0; i < phonesArr.length; i++) {
    dataInputStr = phonesArr[i].name.toLowerCase();

    if (dataInputStr.indexOf(searchSimvol) >= 0) {
      newPhones.push(phonesArr[i]);
    }
  }

  elements.phoneBox.innerHTML = '';
  elements.pagination.innerHTML = '';
  initList(newPhones);
};

var cartOpen = function cartOpen() {
  elements.bodyElement.classList.add('body-fixed');
  elements.cartWrapper.classList.add('active');
  elements.cartDashboard.classList.add('active');
};

var cartClose = function cartClose() {
  elements.bodyElement.classList.remove('body-fixed');
  elements.cartWrapper.classList.remove('active');
  elements.cartDashboard.classList.remove('active');
};

var pushCart = function pushCart() {
  cartElementString = '';

  for (var i = 0; i < cartTemplate.length; i++) {
    cartElementString += "<div class=\"cart-item\" data-id=".concat(cartTemplate[i].idIndex, "> \n                                <div class=\"cart-item__img\">\n                                    <img src=\"images/phones/").concat(cartTemplate[i].photo, "\" alt=\"phone\">\n                                </div>\n                                <span class=\"cart-item__title\">\n                                    ").concat(cartTemplate[i].name, "\n                                </span>\n                                <div class=\"cart-item__right\">\n                                    <span class=\"cart-item__price\">\n                                        ").concat(cartTemplate[i].price, "\n                                    </span>\n                                    <button class=\"cart-item__button\">\n                                        <svg class=\"cart-item__icon\">\n                                            <use xlink:href=\"images/sprite.svg#dustbin\" alt=\"search\"></use>\n                                        </svg>\n                                    </button>\n                                </div>\n                             </div>");
  }
};

var cartHandler = function cartHandler(event) {
  var element = event.target.closest('.card__btn-box');
  var numberId = null;
  var flagInCart = true;

  if (!!element) {
    numberId = element.closest('.card').dataset.id;

    for (var i = 0; i < phonesArr.length; i++) {
      if (phonesArr[i].idIndex === +numberId) {
        for (var _i = 0; _i < cartTemplate.length; _i++) {
          if (cartTemplate[_i].idIndex === +numberId) {
            flagInCart = false;
          }
        }

        if (flagInCart) {
          phonesArr[i].inCart = true;
          cartTemplate.push(phonesArr[i]);
        }
      }
    }

    pushCart();
    elements.cartContent.innerHTML = cartElementString;
    elements.phoneBox.innerHTML = '';
    elements.pagination.innerHTML = '';
    initList(phonesArr);
  }
};

var deleteFromCart = function deleteFromCart(id) {// console.log(phonesArr[id]);
  // phonesArr[id].inCart = false;
  // console.log(cartTemplate)
  // setTimeout(()=>{
  //     console.log('clean');
  //     // cartTemplate = cartTemplate.slice(id, 1);
  //     delete cartTemplate[id];
  //     console.log(cartTemplate)
  // },2000);
};

var deleteItemFromCartHandler = function deleteItemFromCartHandler(event) {
  var idItem = null;
  var element = event.target.closest('.cart-item__button');

  if (element) {
    idItem = element.closest('.cart-item').dataset.id;
    deleteFromCart(idItem);
  }
};

var initEventListener = function initEventListener() {
  elements.pagination.addEventListener('click', paginatorHandler);
  elements.search.addEventListener('input', searchHandler);
  elements.cartBtn.addEventListener('click', cartOpen);
  elements.cartClose.addEventListener('click', cartClose);
  elements.cartDashboard.addEventListener('click', cartClose);
  elements.phoneBox.addEventListener('click', cartHandler);
  elements.cartContent.addEventListener('click', deleteItemFromCartHandler);
};

initEventListener();
//# sourceMappingURL=script.js.map
