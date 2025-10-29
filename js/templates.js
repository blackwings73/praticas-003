const Templates = (function(){

  function home(){
    return `
      <section class="hero card" aria-labelledby="home-title">
        <div>
          <h2 id="home-title">Chainsaw Man — Portal de Fãs</h2>
          <p class="lead">Bem-vindo ao portal educativo criado para a atividade do curso. Este site é um projeto prático que demonstra SPA, templates JS e validação de formulários. As imagens representam personagens do mangá/anime Chainsaw Man.</p>
          <p class="meta">Paleta: verde-claro, rosa, vermelho, amarelo, preto — acessibilidade considerada.</p>
          <p><span class="badge">Mangá</span> <span class="badge" style="background:var(--accent-pink)">Anime</span></p>
        </div>
        <img class="hero-img img-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCgDSuSV6rzaBcQW_w5-qvNeftt8uHTMkug&s" alt="Denji — destaque">
      </section>

      <section class="card" aria-labelledby="about-title">
        <h3 id="about-title">Objetivo do projeto</h3>
        <p>Este repositório contém uma SPA em JavaScript puro com templates modulados, validação de formulários e estrutura organizada para entrega acadêmica.</p>
        <ul>
          <li>Demonstrar roteamento hash (#/) e templates JS.</li>
          <li>Formulário com verificação de consistência e acessibilidade.</li>
          <li>Layout responsivo e esquema de cores solicitado.</li>
        </ul>
      </section>
    `;
  }

  function personagens(){
    return `
      <section class="card" aria-labelledby="chars">
        <h2 id="chars">Personagens — descrições detalhadas</h2>
        <div class="grid">
          <article>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCgDSuSV6rzaBcQW_w5-qvNeftt8uHTMkug&s" alt="Denji" class="img-cover">
            <h3>Denji</h3>
            <p><strong>Resumo:</strong> Denji é o protagonista da obra. Jovem pobre que se torna caçador de demônios. Sua personalidade é direta, movida por desejos simples e uma busca por liberdade.</p>
          </article>

          <article>
            <img src="https://images5.alphacoders.com/132/1325249.jpeg" alt="Power" class="img-cover">
            <h3>Power</h3>
            <p><strong>Resumo:</strong> Uma personagem caótica, impulsiva e carismática, que compartilha laços conflituosos com humanos e apoia o elenco em arcos importantes.</p>
          </article>

          <article>
            <img src="https://images.wallpapersden.com/image/wxl-aki-hayakawa-hd-chainsaw-man-art_87606.jpg" alt="Aki Hayakawa" class="img-cover">
            <h3>Aki Hayakawa</h3>
            <p><strong>Resumo:</strong> Membro do esquadrão, sério e dedicado. Aki oferece contraponto moral e estratégias ao grupo.</p>
          </article>

          <article>
            <img src="https://wallpapers.com/images/hd/makima-chainsaw-man-lh1tnc0xrzlg6p29.jpg" alt="Makima" class="img-cover">
            <h3>Makima</h3>
            <p><strong>Resumo:</strong> Figura enigmática e manipuladora, peça central de conflitos de poder.</p>
          </article>

          <article>
            <img src="https://c4.wallpaperflare.com/wallpaper/840/727/631/chainsaw-man-power-chainsaw-man-kobeni-chainsaw-man-reze-chainsaw-man-nayuta-chainsaw-man-hd-wallpaper-preview.jpg" alt="Reze" class="img-cover">
            <h3>Reze</h3>
            <p><strong>Resumo:</strong> Personagem que apresenta desafios e reviravoltas na história.</p>
          </article>

          <article>
            <img src="https://static.wikia.nocookie.net/chainsaw-man/images/6/6a/Bat_Devil.png/revision/latest?cb=20190217201309" alt="Demonio Morcego" class="img-cover">
            <h3>Demonio Morcego</h3>
            <p><strong>Resumo:</strong> Um dos demônios exibidos na obra; representa ameaças sobrenaturais.</p>
          </article>

          <article>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaG0ypjuiXEZvhwhpRm34eKCWpiTkD5bgBA&s" alt="Demonio Tubarão" class="img-cover">
            <h3>Demonio Tubarão</h3>
            <p><strong>Resumo:</strong> Outro demônio que representa os tons grotescos e ameaças do universo.</p>
          </article>
        </div>
      </section>
    `;
  }

  function historia(){
    return `
      <section class="card" aria-labelledby="hist">
        <h2 id="hist">Sinopse e análise</h2>
        <p><strong>Sinopse:</strong> Chainsaw Man acompanha a vida de Denji, um jovem que enfrenta dificuldades e desafios em um mundo repleto de demônios. Para sobreviver, ele realiza diversas tarefas perigosas, mostrando coragem e determinação. A história mistura ação, aventura e elementos sobrenaturais, explorando relações entre pessoas e criaturas místicas.</p>
      </section>
    `;
  }

  function galeria(){
    return `
      <section class="card" aria-labelledby="gal">
        <h2 id="gal">Galeria — imagens do mangá/anime</h2>
        <div class="grid">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCgDSuSV6rzaBcQW_w5-qvNeftt8uHTMkug&s" alt="Denji" class="img-cover">
          <img src="https://images5.alphacoders.com/132/1325249.jpeg" alt="Power" class="img-cover">
          <img src="https://images.wallpapersden.com/image/wxl-aki-hayakawa-hd-chainsaw-man-art_87606.jpg" alt="Aki Hayakawa" class="img-cover">
          <img src="https://wallpapers.com/images/hd/makima-chainsaw-man-lh1tnc0xrzlg6p29.jpg" alt="Makima" class="img-cover">
        </div>
      </section>
    `;
  }

  function contato(){
    return `
      <section class="card" aria-labelledby="cont">
        <h2 id="cont">Contato / Inscrição de Fã-clube</h2>
        <p class="meta">Formulário com validação de consistência — exemplo para a disciplina.</p>
        <form id="contactForm" novalidate>
          <label for="name">Nome completo</label>
          <input id="name" name="name" type="text" required minlength="2">

          <label for="email">E-mail</label>
          <input id="email" name="email" type="email" required>

          <label for="role">Interesse</label>
          <select id="role" name="role" required>
            <option value="">Selecione</option>
            <option value="voluntario">Voluntário</option>
            <option value="colaborador">Colaborador</option>
            <option value="apenas-fan">Apenas fã</option>
          </select>

          <label for="message">Mensagem</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <div style="margin-top:0.5rem"><button type="submit" class="btn">Enviar inscrição</button></div>
          <small class="help">Regras: nome e mensagem não podem ser idênticos; e-mail válido obrigatório.</small>
        </form>
      </section>
    `;
  }

  return { home, personagens, historia, galeria, contato };
})();
