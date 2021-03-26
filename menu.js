function Mensagem() {
  var Nome = window.document.getElementById("nome").value;
    alert("Pedido Enviado com Sucesso, " + Nome + ", Agradecemos a Preferencia.");
}

function Images(){
  var Carne = getSelectedValue("tipoc")
  if(Carne == 35.9){
    document.getElementsByName("ctipo").src="resources/cupim.jpg";
  }
  if(Carne == 29.99){
    document.getElementsByName("ctipo").src="resources/costela.jpg";
  }
  else{
    document.getElementsByName("ctipo").src="resources/picanha.jpg";
  }
}

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return Number(select.options[select.selectedIndex].value);
}
function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}
function getCheckedRadio(id) {
  return document.getElementById(id).checked;
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const qtdCarne = getInputNumberValue("qtdCarne");
  const qtdNhoque = getInputNumberValue("qtdNhoque");
  const qtdSalada = getInputNumberValue("qtdSalada");

  const carne = getCheckedRadio("Carne");
  const nhoque = getCheckedRadio("Massa");
  const salada = getCheckedRadio("Salada");

  const tipoCarne = getSelectedValue("tipoc");
  const tipoNhoque = getSelectedValue("tipon");
  const tipoSalada = getSelectedValue("tipos");

  const couvert = getCheckedRadio("Couvert");
  const embalagem = getCheckedRadio("Embalagem");
  let valorTotal;
  console.log(
    qtdCarne,
    qtdNhoque,
    qtdSalada,
    carne,
    nhoque,
    salada,
    tipoCarne,
    tipoNhoque,
    tipoSalada,
    couvert,
    embalagem
  );

  if (carne) {
    valorTotal =
      qtdCarne * tipoCarne + (couvert ? 10 : 0) + (embalagem ? 10 : 0);
  }
  if (nhoque) {
    valorTotal =
      qtdNhoque * tipoNhoque + (couvert ? 10 : 0) + (embalagem ? 10 : 0);
  }
  if (salada) {
    valorTotal =
      qtdSalada * tipoSalada + (couvert ? 10 : 0) + (embalagem ? 10 : 0);
  }
  const final = document.getElementById("valor");
  final.innerHTML = `${valorTotal.toFixed(2)}`;
});
