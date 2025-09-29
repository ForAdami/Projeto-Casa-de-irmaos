// ========== EVENTOS ==========
const formEvento = document.getElementById("formEvento");
const listaEventos = document.getElementById("listaEventos");

formEvento.addEventListener("submit", (e) => {
  e.preventDefault();
  const titulo = document.getElementById("tituloEvento").value;
  const data = document.getElementById("dataEvento").value;
  const descricao = document.getElementById("descricaoEvento").value;

  const li = document.createElement("li");
  li.textContent = `${titulo} - ${data}: ${descricao}`;
  listaEventos.appendChild(li);

  formEvento.reset();
});

// ========== CAMPANHAS ==========
const formCampanha = document.getElementById("formCampanha");
const listaCampanhas = document.getElementById("listaCampanhas");
const pixModal = document.getElementById("pixModal");
const closeBtn = document.querySelector(".close");

formCampanha.addEventListener("submit", (e) => {
  e.preventDefault();
  const titulo = document.getElementById("tituloCampanha").value;
  const descricao = document.getElementById("descricaoCampanha").value;

  const li = document.createElement("li");
  li.innerHTML = `<strong>${titulo}</strong>: ${descricao} 
                  <button class="pixBtn">Doar via PIX</button>`;
  listaCampanhas.appendChild(li);

  formCampanha.reset();
});

// Abrir modal do PIX
listaCampanhas.addEventListener("click", (e) => {
  if (e.target.classList.contains("pixBtn")) {
    pixModal.style.display = "block";
  }
});

// Fechar modal
closeBtn.addEventListener("click", () => {
  pixModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === pixModal) {
    pixModal.style.display = "none";
  }
});

// ========== DOAÇÕES ==========
const formDoacao = document.getElementById("formDoacao");
const listaDoacoes = document.getElementById("listaDoacoes");

formDoacao.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nomeDoador").value;
  const valor = document.getElementById("valorDoacao").value;

  const li = document.createElement("li");
  li.textContent = `${nome} doou R$ ${valor}`;
  listaDoacoes.appendChild(li);

  formDoacao.reset();
});

// ========== MATRÍCULAS ==========
const formMatricula = document.getElementById("formMatricula");
const listaMatriculas = document.getElementById("listaMatriculas");

formMatricula.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nomeAluno").value;
  const idade = document.getElementById("idadeAluno").value;

  const li = document.createElement("li");
  li.textContent = `${nome}, ${idade} anos - Matrícula realizada`;
  listaMatriculas.appendChild(li);

  formMatricula.reset();
});
