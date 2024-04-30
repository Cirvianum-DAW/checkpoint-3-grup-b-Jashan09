// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

document
  .querySelector('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nameInput = document.querySelector('input[name="name"]');
    const surnameInput = document.querySelector('input[name="surname"]');
    const emailInput = document.querySelector('input[name="email"]');
    const ageInput = document.querySelector('input[name="age"]');
    const genderInput = document.querySelector('select[name="gender"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    const quantityInput = document.querySelector('input[name="quantity"]');


    if(nameInput.value.length >= 3 && nameInput.value.length <= 50){
    }else{
      displayError(nameInput, "Nom ha de ser més gran i menys petit de 50 caracters.")
    }
   
    if(surnameInput.value.length >= 3 && surnameInput.value.length <= 50){
    }else{
      displayError(surnameInput, "Cognom ha de ser més gran i menys petit de 50 caracters.")
    }

    const regexForNameAndSurname = /[0-9]/;
    if (regexForNameAndSurname.test(nameInput.value)) {
      displayError(nameInput, "El nom no pot tenir números")
    }
  
    if (regexForNameAndSurname.test(surnameInput.value)) {
      displayError(surnameInput, "El cognom no pot tenir números")
    }

    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      displayError(emailInput, "Format d'email no vàlid")
    }

    if(ageInput.value >= 18){
    }else{
      alert("Has de ser major d'edat");
    }

    if(messageInput.value.length >= 10 && messageInput.value.length <= 200){
    }else{
      displayError(messageInput, "El text ha de tenir com a mínim 10 caràcters i com a màxim 200.")
    }

    if(genderInput.value == ""){
      displayError(genderInput, "I el teu génere?")
    }

    if(quantityInput.value >= 1 && quantityInput.value <= 10 ){
    }else{
      alert("La quantitat ha de ser un nombre enter entre 1 i 10.");
    }


  });


// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

function validateName() {
  removeExistingError(nameInput);
  // Validació del nom...

  // Si no és vàlid...
  displayError(nameInput, "El nom no és vàlid");
}

// addEventListeners...
