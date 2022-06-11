const shopCart = document.querySelector('#carttt');
const shopCartt = document.querySelector('#Ccarttt');

let itemNo = localStorage.getItem('cartNumbers');

if(isNaN(parseInt(itemNo))){
  itemNo = 0;
  localStorage.setItem('cartNumbers', 0);
}

shopCart.textContent = itemNo;
shopCartt.textContent = itemNo;

let carts = document.querySelectorAll('.add-cart');
let products = [

    {
        name: 'sari',
        price: 280,
        inCart: 0
    },
    {
        name: 'sari',
        price: 28,
        inCart: 0
    },
    {
        name: 'sari',
        price: 280,
        inCart: 0
    },
    {
        name: 'sari',
        price: 28,
        inCart: 0
    }
];


for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        setCartNumbers();
    })
}

function setCartNumbers() {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    let newProductNumber = productNumbers + 1;

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', newProductNumber);
        shopCart.textContent = newProductNumber;
        shopCartt.textContent = newProductNumber;
    }

    else {
        localStorage.setItem('cartNumbers', 1);
        shopCart.textContent = 1;
        shopCartt.textContent = 1;
    }

}



