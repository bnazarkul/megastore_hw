const  form = document.querySelector('#form');

form.addEventListener('submit', () => {
  const elements = document.querySelectorAll('#form input, #form select');

  for(let i = 0; i < elements.length; i++){
    if(elements[i].hasAttribute('data-required')) {
      if (elements[i].value === '') {
        elements[i].classList.add('empty-field');
        const textError = document.querySelector ('#pElement');
        textError.innerText = 'Заполните поле';
        textError.className = 'textError';
        elements[i].after(textError);
        return textError;


      }
    }
  }



})


/*
nameField.addEventListener('focus', () => {
    nameField.classList.add('box-shadow');
})

nameField.addEventListener('blur', () =>{
    nameField.classList.remove('box-shadow');
})
*/
