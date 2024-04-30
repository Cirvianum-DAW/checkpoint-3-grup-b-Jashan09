const products = [
  { category: "Electrònica", price: 499.99, name: "Telèfon Intel·ligent" },
  { category: "Electrònica", price: 799.99, name: "Portàtil" },
  { category: "Electrònica", price: 299.99, name: "Auriculars sense fils" },
  { category: "Electrònica", price: 199.99, name: "Televisor Intel·ligent" },
  { category: "Electrònica", price: 149.99, name: "Relotge Intel·ligent" },
  { category: "Llar", price: 249.99, name: "Rentadora" },
  { category: "Llar", price: 149.99, name: "Assecadora" },
  { category: "Llar", price: 99.99, name: "Cafetera" },
  { category: "Llar", price: 79.99, name: "Torradora" },
  { category: "Llar", price: 199.99, name: "Aspiradora" },
];

const productInput = document.querySelector('select[name="product"]');

const quantityInput = document.querySelector('input[name="quantity"]');

const priceInput = document.querySelector('input[name="price"]');

products.forEach(p => {
  let meuOption = document.createElement("option");
  meuOption.value= p.name;
  meuOption.textContent = p.name;
  productInput.appendChild(meuOption);
});

productInput.addEventListener("change", (event) => {

  quantityInput.value = 1;
  let preuUnitari;

  products.forEach(productInfo => {
    if(event.target.value == productInfo.name){
      preuUnitari = productInfo.price;
    }
  });

  priceInput.value = preuUnitari;

});


let myUl = document.createElement("ul");

let thisForm = document.querySelector("form");
thisForm.appendChild(myUl);

document
  .querySelector('button')
  .addEventListener('click', function (event) {

    let newLi = document.createElement("li");

    let totalPreu = priceInput.value * quantityInput.value;

    let fraseFinal = `${productInput.value} | 
    quantitat:${quantityInput.value} | Total: ${totalPreu}`;

    newLi.textContent = fraseFinal;

    myUl.appendChild(newLi);

});

//HE FET SERVIR D'ESDEVENIMENTS -> SUBMIT, CLICK i CHANGE