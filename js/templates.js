// templates.js — templates detalhados (placeholders para imagens locais em /images)
const Templates = (function(){

  function home(){
    return `
      <section class="hero card" aria-labelledby="home-title">
        <div>
          <h2 id="home-title">Chainsaw Man — Portal de Fãs</h2>
          <p class="lead">Bem-vindo ao portal educativo criado para a atividade do curso. Este site é um projeto prático que demonstra SPA, templates JS e validação de formulários. As imagens são placeholders e devem ser substituídas por arquivos com permissão antes do deploy público.</p>
          <p class="meta">Paleta: verde-claro, rosa, vermelho, amarelo, preto — acessibilidade considerada.</p>
          <p><span class="badge">Mangá</span> <span class="badge" style="background:var(--accent-pink)">Anime</span></p>
        </div>
        <img class="hero-img img-cover" src=https://uploads.jovemnerd.com.br/wp-content/uploads/2024/11/denji_chainsaw_man__wx5cqbjv7-scaled.jpeg alt="Imagem destaque — placeholder">
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
            <img src="images/placeholder-denji.svg" alt="Denji — placeholder" class="img-cover">
            <h3>Denji</h3>
            <p><strong>Resumo:</strong> Denji é o protagonista da obra. Jovem pobre que se torna caçador de demônios após fundir-se com Pochita, o demônio motosserra. Sua personalidade é direta, movida por desejos simples e uma busca por liberdade.</p>
            <p><strong>Contexto narrativo:</strong> A jornada de Denji mistura violência gráfica e humor ácido, com temas sobre humanidade, desejo e exploração social.</p>
          </article>

          <article>
            <img src="images/placeholder-pochita.svg" alt="Pochita — placeholder" class="img-cover">
            <h3>Pochita</h3>
            <p><strong>Resumo:</strong> Demônio motosserra que se torna companheiro de Denji. Representa laços afetivos e sacrifício.</p>
            <p><strong>Importância:</strong> A relação entre Denji e Pochita é central para a motivação do protagonista.</p>
          </article>

          <article>
            <img src="images/placeholder-power.svg" alt="Power — placeholder" class="img-cover">
            <h3>Power</h3>
            <p><strong>Resumo:</strong> Uma personagem caótica, impulsiva e carismática. Power é um demônio que compartilha laços conflituosos com humanos e apoia o elenco em arcos importantes.</p>
            <p><strong>Dinâmica:</strong> Fornece alívio cômico, conflitos emocionais e elementos de ação.</p>
          </article>

          <article>
            <img src="images/placeholder-aki.svg" alt="Aki Hayakawa — placeholder" class="img-cover">
            <h3>Aki Hayakawa</h3>
            <p><strong>Resumo:</strong> Membro do esquadrão, sério e dedicado. Aki oferece contraponto moral e estratégias ao grupo.</p>
            <p><strong>Arco:</strong> Seu desenvolvimento explora temas de dever, perda e redenção.</p>
          </article>

          <article>
            <img src="images/placeholder-makima.svg" alt="Makima — placeholder" class="img-cover">
            <h3>Makima</h3>
            <p><strong>Resumo:</strong> Figura enigmática e manipuladora. Makima exerce forte controle sobre outros personagens, sendo peça central de conflitos de poder.</p>
            <p><strong>Temas:</strong> Autoridade, manipulação psicológica e moral ambígua.</p>
          </article>

          <article>
            <img src="images/placeholder-reze.svg" alt="Reze — placeholder" class="img-cover">
            <h3>Reze</h3>
            <p><strong>Resumo:</strong> Personagem com papel significativo em arcos específicos, cuja relação com o protagonista traz consequências dramáticas.</p>
            <p><strong>Impacto:</strong> Arcos com Reze exploram confiança e traição.</p>
          </article>

          <article>
            <img src="images/placeholder-bat.svg" alt="Bat Devil — placeholder" class="img-cover">
            <h3>Demonio Morcego</h3>
            <p><strong>Resumo:</strong> Um dos demônios exibidos na obra; serve para ilustrar a variedade de criaturas no universo.</p>
          </article>

          <article>
            <img src="images/placeholder-shark.svg" alt="Shark Devil — placeholder" class="img-cover">
            <h3>Demonio Tubarão</h3>
            <p><strong>Resumo:</strong> Outro demônio que representa as ameaças e os tons grotescos da obra.</p>
          </article>
        </div>
      </section>
    `;
  }

  function historia(){
    return `
      <section class="card" aria-labelledby="hist">
        <h2 id="hist">Sinopse e análise</h2>
        <p><strong>Sinopse:</strong>Chainsaw Man acompanha a vida de Denji, um jovem que enfrenta dificuldades e desafios em um mundo repleto de demônios. Para sobreviver, ele realiza diversas tarefas perigosas, mostrando coragem e determinação. A história mistura ação, aventura e elementos sobrenaturais, explorando relações entre pessoas e criaturas místicas. Com uma narrativa intensa e dinâmica, o mangá equilibra momentos de suspense, humor e emoção. Ao longo da trama, o leitor é apresentado a diferentes personagens, cada um com sua própria personalidade e objetivos. A obra destaca a luta pela sobrevivência e o desejo de alcançar sonhos simples. A estética combina cenas de ação detalhadas com momentos mais leves e cômicos. O universo do mangá é vibrante, criativo e cheio de surpresas.
</p>
        <h3>Análise temática</h3>
        <ul>
          <li><strong>Violência e sátira:</strong> A série usa violência explícita para subverter expectativas narrativas.</li>
          <li><strong>Personagens ambíguos:</strong> Personagens como Makima trazem complexidade moral.</li>
          <li><strong>Estética:</strong> Mistura de horror, comédia e drama.</li>
        </ul>
      </section>
    `;
  }

  function galeria(){
    return `
      <section class="card" aria-labelledby="gal">
        <h2 id="gal">Galeria — substitua as imagens por arquivos licenciados</h2>
        <p class="help">Os arquivos em /images atualmente são placeholders SVG. Baixe as imagens reais (com permissão) e substitua os arquivos mantendo os nomes sugeridos.</p>
        <div class="grid">
          <img src="images/placeholder-denji.svg" alt="Denji placeholder" class="img-cover">
          <img src="images/placeholder-power.svg" alt="Power placeholder" class="img-cover">
          <img src="images/placeholder-aki.svg" alt="Aki placeholder" class="img-cover">
          <img src="images/placeholder-makima.svg" alt="Makima placeholder" class="img-cover">
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
