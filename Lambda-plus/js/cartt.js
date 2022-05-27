let carts = document.querySelectorAll('.add-cart');
// let po = document.getElementsByClassName('test');
let products = [
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 15,
        inCart: 0
    },
    
    {
        name: 'Grey huddie',
        tag: 'greyhuddie',
        price: 25,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Black Huddie',
        tag: 'blackhuddie',
        price: 55,
        inCart: 0
    }

];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        // console.log("hello");
        cartNumbers();
    })
    
}

// function onLoadCartNumber() {
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if(productNumbers){
//         document.querySelector('.cart span').textContent = productNumbers;
//     }
// }

function  cartNumbers() {
   
    let productNumbers = localStorage.getItem('cartNumbers');
    // let nam = document.getElementById('reja');
    // let namm = nam.value;

    // document.getElementById('fuck').innerHTML = productNumbers + 1;
    
    productNumbers = parseInt(productNumbers);

    if ( productNumbers ) {

        
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.carttt span').textContent = productNumbers + 1;
    }


    else {
        localStorage.setItem('cartNumbers', 1);
       document.querySelector('.carttt span').textContent = 1;

    
    }

// nam.innerText = cartNumbers;
// console.log(nam);
    

    
}

// onLoadCartNumber();