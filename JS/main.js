
/*variables*/
const data =  [
  {name:"Bitcoin", price: 4500000, img: "/Images/Btc.jpg"},
  {name:"Ethereum", price: 300000, img: "/Images/Btc.jpg"},
  {name:"Cardano", price: 225, img: "/Images/Btc.jpg"},
  {name:"Binance Coin", price: 45000, img:"/Images/Bnb.jpg"},
];
let selectedId = null;

/*Class*/
class Crypto {
constructor(title, price, img) {
  this.title = title;
  this.price = price;
  this.img = img;
}
cryptoConverter (insertPesos, equalizer) {
  let convertCrypto = Number(insertPesos / equalizer);
  return convertCrypto;
}
}
/*functions*/

function reqCrypto() {
let titles = "Choose between ";
for (let i = 0; i < data.length; i++) {
  if(data.length === i+1){
     titles.slice(0, -1);
     titles += 'and '+data[i].name+'.';
  }else{
    titles += data[i].name+', ';
  }
}
let cryptoInserted = prompt(titles);
if(cryptoInserted){
  return cryptoInserted.toUpperCase();
}
}

function pesosInserted() {
let insertPesos = Number(prompt('How many pesos do you want to deposit?'));
return insertPesos;
}

function equalReqCrypto(cryptoInserted) {
for (let i = 0; i < data.length; i++) {
  let name = data[i].name.toUpperCase();
  if(name == cryptoInserted){
     selectedId = i;
      return data[i].price;
  }
}
}


function goToNewPage(){
  let url = document.getElementById('list').value;
    if(url != 'none') {
      window.location = url;
  }
}



/*Start*/
cryptoInserted = reqCrypto();
if(cryptoInserted){
insertPesos = pesosInserted();
if(insertPesos){
  equalizer = equalReqCrypto(cryptoInserted);
  if(equalizer){
    let crypto = new Crypto(data[selectedId].id,data[selectedId].name, data[selectedId].price, data[selectedId].img);
    convertCrypto = crypto.cryptoConverter(insertPesos,equalizer);
    function showMsg() {
    let showMsg_ = alert(`You can afford ${convertCrypto} ${cryptoInserted}`);
    return showMsg_;
    }
  }
}
}else{
alert('You canceled the transaction, until next time.');
}

showMsg_ = showMsg();

if (insertPesos > 1000000) {
  let millionaires = alert('You are going to be called to get a better atention as we notice to be informed of your high quantity of money.')
}


function compare(a,b) {
  if (a.price > b.price) {
    return -1
  }
  if (a.price < b.price) {
    return 1
  }
  return 0;
}

function GetSortOrder(price) {    
  return function(a, b) {    
      if (a[price] > b[price]) {    
          return 1;    
      } else if (a[price] < b[price]) {    
          return -1;    
      }    
      return 0;    
  }    
}    

localStorage.setItem("wishList", JSON.stringify(`${convertCrypto}`));


