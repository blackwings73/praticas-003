// validate.js — validação de formulário e regras de consistência
(function(){
  function setUpFormValidation(){
    document.addEventListener('submit', function(ev){
      const form = ev.target;
      if(form && form.id === 'contactForm'){
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const msg = form.querySelector('#message');
        if(!form.checkValidity()){
          ev.preventDefault();
          form.reportValidity();
          return false;
        }
        // regra adicional de consistência: nome e mensagem não podem ser iguais
        if(name.value.trim().toLowerCase() === msg.value.trim().toLowerCase()){
          ev.preventDefault();
          name.classList.add('error');
          msg.classList.add('error');
          let em = form.querySelector('.error-msg');
          if(!em){
            em = document.createElement('small');
            em.className = 'error-msg';
            em.textContent = 'Nome e mensagem não podem ser idênticos.';
            form.appendChild(em);
          }
          return false;
        }
        ev.preventDefault();
        alert('Inscrição recebida (simulação). Obrigado!');
        form.reset();
      }
    }, true);

    document.addEventListener('input', function(ev){
      const t = ev.target;
      if(t && (t.matches('input') || t.matches('textarea') || t.matches('select'))){
        t.classList.remove('error');
        const em = t.form?.querySelector('.error-msg');
        if(em) em.remove();
      }
    });
  }

  if(typeof window !== 'undefined') setUpFormValidation();
})();