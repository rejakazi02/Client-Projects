
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

    
        cartNumbers();
        

        
    })

    
}

function onCartNumbers() {

    let productNumbers = localStorage.getItem('cartNumbers');

    if( productNumbers ) {
       
      let pp =  document.querySelector('.Cart').textContent = productNumbers;
   
    // return pp;
    }
}

function cartNumbers() {

    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
      let ppp =  document.querySelector('.Cart').textContent = productNumbers + 1;
   
    return ppp;
    }

    else {
         localStorage.setItem('cartNumbers', 1);
            document.querySelector('.Cart').textContent = 1;

 
        }

  

}



    let p = document.getElementById('carttt');

    p.textContent = cartNumbers();
    



    onCartNumbers();