//
// Scripts
//
window.addEventListener("DOMContentLoaded", (event) => {
	// Activate Bootstrap scrollspy on the main nav element
	const mainNav = document.body.querySelector("#mainNav");
	if (mainNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: "#mainNav",
			offset: 74
		});
	}
	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector(".navbar-toggler");
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll("#navbarResponsive .nav-link")
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener("click", () => {
			if (window.getComputedStyle(navbarToggler).display !== "none") {
				navbarToggler.click();
			}
		});
	});
});

/*variables*/

const data = [
	{ name: "Bitcoin", price: 4500000, img: "/Images/Btc.jpg", id: 1 },
	{ name: "Ethereum", price: 300000, img: "/Images/Eth.jpg", id: 2 },
	{ name: "Cardano", price: 225, img: "/Images/Ada.jpg", id: 3 },
	{ name: "Binance Coin", price: 45000, img: "/Images/Bnb.jpg", id: 4 }
];
let acumulator = ``;
let result = ``;

/*Class*/
class Crypto {
	constructor(name, price, img, id) {
		this.name = data.name;
		this.price = data.price_change_24h;
		this.img = data.img;
		this.id = id;
	}
}


//Show or hide cards generated with forEach
function mostrar(id) {
	$(".card").hide();
	$(".card[data-id="+id+"]").fadeIn();
}

//Converting value from crypto to pesos/usd
function calculo() {
	let pesosInserted = $("#pesosInserted").val();
	let chosenCrypto = $("#status").val();
    let cryptoName = $("#status option:selected").text();
	let cryptoPrice = $(".card[data-id="+chosenCrypto+"]").attr('data-price');
    let result = pesosInserted / cryptoPrice;
    console.log(result.toFixed(5));
	if(result){
    document.getElementById("convertedValue").innerHTML = 'You have to pay '+result.toFixed(5)+' '+cryptoName+' or '+pesosInserted+' pesos.';
	}
}

//Creating crypto cards
data.forEach((Crypto) => { 
    acumulator += `<div class="glowing-border"> <div class="card optionHide" data-id="${Crypto.id}" data-price="${Crypto.price}" style="width: 15rem; height: 25rem;"> <img src="${Crypto.img}" class="card-img-top"> <div class="card-body text-center pt-5"> <p>${Crypto.name}</p><button type="button" class="btn btn-success" onclick="showMsg()">Check value converted</button> </div> </div> </div>`
});


//Check the value converted with a button
function showMsg() {
    let pesosInserted = $("#pesosInserted").val();
	let chosenCrypto = $("#status").val();
    let cryptoName = $("#status option:selected").text();
	let cryptoPrice = $(".card[data-id="+chosenCrypto+"]").attr('data-price');
    let result = pesosInserted / cryptoPrice;
    alert('You can afford '+result.toFixed(5)+' '+cryptoName);
}


//Inject cards
document.getElementById("cryptoFlexy").innerHTML = acumulator;

//Add final result to cart
function addToCart(){
    let pesosInserted = $("#pesosInserted").val();
	let chosenCrypto = $("#status").val();
    let cryptoName = $("#status option:selected").text();
	let cryptoPrice = $(".card[data-id="+chosenCrypto+"]").attr('data-price');
    let result = pesosInserted / cryptoPrice;
    console.log(JSON.stringify(result));
}


//Save name to localstorage requested at the beggining
let savedName = localStorage.getItem('reqName');
if (savedName==null) {
  let reqName = prompt("Enter your name:");
  if(reqName){
    localStorage.setItem('reqName', reqName);
    document.getElementById('startBuying').innerHTML = ('Hello '+reqName+'!');
  }else{
    document.getElementById('startBuying').innerHTML = ('I need your name!');
  }
}else{
    document.getElementById('startBuying').innerHTML = ('Hello '+savedName+'!');
}








//Get api
const getServerStatus = () => {
	fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=100&page=1&sparkline=false")
	.then(response => response.json())
	.then(data => console.log(data));
};


//Animations
$('.fw-bolder').fadeOut(1000).fadeIn(5000).css('color', 'red');
$(".titulo").css('color', 'red')
            .slideUp(500)
            .delay(1000)
            .slideDown(500);













