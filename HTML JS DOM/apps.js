
console.log(document.head);

console.log(document.images[0].src);

console.log(document.getElementById("formID1").classList);
console.log(document.getElementById("formID1").className);

//id ile elemana ulasma
header1 = document.getElementById("header1");
//elemanın ozelligini degistirme
header1.style.backgroundColor = 'red';
header1.style.color = 'white';
header1.style.padding = "1em";
//elemanın icerigini degistirme
header1.textContent = "new Header";
//text olarak
header1.innerText = "the newest Header";
//html olarak
header1.innerHTML = ' <img src="https://source.unsplash.com/user/c_v_r/50x50" alt="image">'


//ilk h1'leri sec
console.log(document.querySelector('h1'));
console.log(document.querySelector('#formID'));
console.log(document.querySelector('.formClass'));

//ilk list-itemi sec
listItem1 = document.querySelector(".list-item");
listItem1.style.backgroundColor = 'blue';

//tum list-item leri sec
listItems = document.getElementsByClassName("list-item");
console.log(listItems);



listItemsInUl = document.querySelector("ul").getElementsByClassName("list-item");
console.log(listItems);

let listItemArray = Array.from(listItemsInUl);
listItemArray.forEach(
    item => {
        item.style.color = "red";
    }
);

//tum h1 ler secmek
console.log(document.getElementsByTagName("h1"));
console.log(document.querySelectorAll("h1"));

//parent dondurme
console.log(document.getElementById("myInput").parentElement);

//sonraki elemana ulasma
console.log(document.querySelector("li").nextElementSibling);


//ELEMAN EKLEME

//li turunde eleman olustur
const newElement = document.createElement("li");

//classını olusturma
newElement.className = "list-item";

//icerigini olusturma
newElement.textContent = "Selamin aleykum 1";

//eklenicek listeyi bulup ekleme
document.getElementById("list").appendChild(newElement);


//ELEMAN REPLACE

const newItem = document.createElement("h6");
newItem.textContent = "New Header";

const oldItem = document.getElementById("header1");

document.body.replaceChild(newItem,oldItem);

//ELEMAN SILME
document.querySelector("li").remove();
document.querySelector("ul").removeChild(document.querySelector("li").nextElementSibling);