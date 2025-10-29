// templates.js — templates com imagens hotlinked (URLs fornecidas pelo usuário)
const Templates = (function(){
  function home(){
    return `
      <section class="hero card" aria-labelledby="home-title">
        <div>
          <h2 id="home-title">Chainsaw Man — O mundo e personagens</h2>
          <p class="lead">Portal de fãs criado como exercício: SPA com templates JS, validação de formulário e navegação sem recarga.</p>
          <p><span class="badge">Mangá</span> <span class="badge" style="background:var(--accent-pink)">Action</span></p>
        </div>
        <img class="hero-img img-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCgDSuSV6rzaBcQW_w5-qvNeftt8uHTMkug&s" alt="Denji — imagem a partir de URL fornecida">
      </section>
      <section class="card" aria-labelledby="news-title">
        <h3 id="news-title">Seções</h3>
        <div class="grid">
          <div><h4>Personagens</h4><p>Conheça os personagens principais como Denji, Pochita e Makima.</p></div>
          <div><h4>História</h4><p>Sinopse e curiosidades do mangá.</p></div>
          <div><h4>Galeria</h4><p>Imagens e capas (hotlinks às URLs fornecidas).</p></div>
        </div>
      </section>
    `;
  }

  function personagens(){
    return `
      <section class="card" aria-labelledby="chars">
        <h2 id="chars">Personagens principais</h2>
        <div class="grid">
          <article>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCgDSuSV6rzaBcQW_w5-qvNeftt8uHTMkug&s" alt="Denji" class="img-cover">
            <h3>Denji</h3><p>Protagonista, jovem caçador de demônios com a habilidade Chainsaw.</p>
          </article>
          <article>
            <img src="https://images5.alphacoders.com/132/1325249.jpeg" alt="Power" class="img-cover">
            <h3>Power</h3><p>Outra personagem central, personalidade explosiva.</p>
          </article>
          <article>
            <img src="https://images.wallpapersden.com/image/wxl-aki-hayakawa-hd-chainsaw-man-art_87606.jpg" alt="Aki Hayakawa" class="img-cover">
            <h3>Aki Hayakawa</h3><p>Membro do esquadrão, determinado e sério.</p>
          </article>
          <article>
            <img src="https://wallpapers.com/images/hd/makima-chainsaw-man-lh1tnc0xrzlg6p29.jpg" alt="Makima" class="img-cover">
            <h3>Makima</h3><p>Personagem enigmática com grande influência na trama.</p>
          </article>
          <article>
            <img src="https://c4.wallpaperflare.com/wallpaper/840/727/631/chainsaw-man-power-chainsaw-man-kobeni-chainsaw-man-reze-chainsaw-man-nayuta-chainsaw-man-hd-wallpaper-preview.jpg" alt="Reze" class="img-cover">
            <h3>Reze</h3><p>Personagem importante em arcos específicos da história.</p>
          </article>
          <article>
            <img src="https://static.wikia.nocookie.net/chainsaw-man/images/6/6a/Bat_Devil.png/revision/latest?cb=20190217201309" alt="Demonio Morcego" class="img-cover">
            <h3>Demonio Morcego</h3><p>Demônio com temática de morcego presente na obra.</p>
          </article>
          <article>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaG0ypjuiXEZvhwhpRm34eKCWpiTkD5bgBA&s" alt="Demonio Tubarão" class="img-cover">
            <h3>Demonio Tubarão</h3><p>Demônio tubarão, representado em cenas marcantes.</p>
          </article>
        </div>
      </section>
    `;
  }

  function historia(){
    return `
      <section class="card" aria-labelledby="hist">
        <h2 id="hist">Sinopse e curiosidades</h2>
        <p>Chainsaw Man, escrito por Tatsuki Fujimoto, mistura fantasia sombria, humor e crítica social.</p>
        <h3>Curiosidades</h3>
        <ul>
          <li>Publicação e popularidade global</li>
          <li>Estilo de narrativa não convencional</li>
        </ul>
      </section>
    `;
  }

  function galeria(){
    return `
      <section class="card" aria-labelledby="gal">
        <h2 id="gal">Galeria</h2>
        <div class="grid">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCgDSuSV6rzaBcQW_w5-qvNeftt8uHTMkug&s" alt="Capa Denji" class="img-cover">
          <img src="https://images5.alphacoders.com/132/1325249.jpeg" alt="Power" class="img-cover">
          <img src="https://images.wallpapersden.com/image/wxl-aki-hayakawa-hd-chainsaw-man-art_87606.jpg" alt="Aki" class="img-cover">
          <img src="https://wallpapers.com/images/hd/makima-chainsaw-man-lh1tnc0xrzlg6p29.jpg" alt="Makima" class="img-cover">
          <img src="https://c4.wallpaperflare.com/wallpaper/840/727/631/chainsaw-man-power-chainsaw-man-kobeni-chainsaw-man-reze-chainsaw-man-nayuta-chainsaw-man-hd-wallpaper-preview.jpg" alt="Reze" class="img-cover">
          <img src="https://static.wikia.nocookie.net/chainsaw-man/images/6/6a/Bat_Devil.png/revision/latest?cb=20190217201309" alt="Bat Devil" class="img-cover">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaG0ypjuiXEZvhwhpRm34eKCWpiTkD5bgBA&s" alt="Shark Devil" class="img-cover">
        </div>
        <p class="help">As imagens são hotlinks diretos às URLs que você forneceu. Verifique permissão/uso e considere baixar e hospedar arquivos com licença antes de publicar.</p>
      </section>
    `;
  }

  function contato(){
    return `
      <section class="card" aria-labelledby="cont">
        <h2 id="cont">Contato</h2>
        <form id="contactForm" novalidate>
          <label for="name">Nome</label>
          <input id="name" name="name" type="text" required minlength="2">

          <label for="email">E-mail</label>
          <input id="email" name="email" type="email" required>

          <label for="message">Mensagem</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" class="btn">Enviar</button>
          <small id="formHelp" class="help">Seu contato não será publicado (simulação).</small>
        </form>
      </section>
    `;
  }

  return { home, personagens, historia, galeria, contato };
})();
