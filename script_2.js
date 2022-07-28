const  form = document.querySelector('#form');

form.addEventListener('submit', () => {
  const elements = document.querySelectorAll('#form input, #form select, #form textarea');

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