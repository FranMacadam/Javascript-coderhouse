/*!
* Start Bootstrap - Scrolling Nav v5.0.3 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



/*variables*/
const data =  [
    {name:"Bitcoin", price: 4500000, img: "Images/Btc.jpg", id: 1},
    {name:"Ethereum", price: 300000, img: "Images/Eth.jpg", id: 2},
    {name:"Cardano", price: 225, img: "Images/Ada.jpg", id: 3},
    {name:"Binance Coin", price: 45000, img:"Images/Bnb.jpg", id: 4},
  ];
  let selectedId = null;
  
  
  
  
  
  /*Class*/
  class Crypto {
  constructor(title, price, img, id) {
    this.title = title;
    this.price = price;
    this.img = img;
    this.id = id;
  }
  cryptoConverter (insertPesos, equalizer) {
    let convertCrypto = Number(insertPesos / equalizer);
    return convertCrypto;
  }
  }
  

  let acumulator = ``;
  data.forEach((Crypto) => {
    acumulator += `<div class="glowing-border">
    <div class="card bg-dark optionHide" data-id="${Crypto.id}" style="width: 15rem; height: 25rem;">
        <img src="${Crypto.img}" class="card-img-top">
        <div class="card-body text-center pt-5">
            <p>${Crypto.name}</p><button type="button" class="btn btn-success" id="addToCart">Add to cart</button>
        </div>
    </div>
  </div>`
  });
  
  document.getElementById('cryptoFlexy').innerHTML = acumulator;



function mostrar(id) {
    $(".card").hide();
    $(".card[data-id='"+id+"']").show();
}

