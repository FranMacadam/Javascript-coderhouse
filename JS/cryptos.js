let data = localStorage.getItem("wishList");
if (data) {
    this.myWishList = JSON.parse(data);
}

const addToCart = document.getElementById("addToCart");

addToCart.onclick = function(){
    console.log(data);
}

const addToCart1 = document.getElementById("addToCart1");

addToCart1.onclick = function(){
    console.log(data);
}

const addToCart2 = document.getElementById("addToCart2");

addToCart2.onclick = function(){
    console.log(data);
}

const addToCart3 = document.getElementById("addToCart3");

addToCart3.onclick = function(){
    console.log(data);
}