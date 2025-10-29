// app.js — roteador SPA simples e integração com Templates
(function(){
  const routes = {
    '/': Templates.home,
    '/personagens': Templates.personagens,
    '/historia': Templates.historia,
    '/galeria': Templates.galeria,
    '/contato': Templates.contato
  };

  function render(path){
    const main = document.getElementById('app');
    const template = routes[path] || Templates.home;
    main.innerHTML = '<div class="fade-enter">'+template()+'</div>';
    requestAnimationFrame(()=>{
      const el = main.querySelector('.fade-enter');
      el.classList.add('fade-enter-active');
    });
    document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active', a.getAttribute('data-route')===path));
    main.focus();
  }

  function onHashChange(){ render(location.hash.replace('#','') || '/'); }
  window.addEventListener('hashchange', onHashChange);
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('year').textContent = new Date().getFullYear();
    onHashChange();
    document.body.addEventListener('click', function(e){
      const a = e.target.closest('a');
      if(a && a.getAttribute('href') && a.getAttribute('href').startsWith('#/')){
        e.preventDefault();
        location.hash = a.getAttribute('href');
      }
    });
  });
})();