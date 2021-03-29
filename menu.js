function Mensagem() {
  var Nome = window.document.getElementById("nome").value;
    alert("Pedido Enviado com Sucesso, " + Nome + ", Agradecemos a Preferencia.");
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

function ImagesC(){
  var Carne = getSelectedValue("tipoc")
  console.log(Carne)

  if(Carne === 35.9){
    document.getElementById("ctipo").src="resources/cupim.jpg";
    console.log("1 if")
  }
  else if(Carne === 29.99){
    document.getElementById("ctipo").src="resources/costela.jpg";
    console.log("2 if")
  }
  else if(Carne === 49.90){
    document.getElementById("ctipo").src="resources/picanha.jpg";
    console.log("3 if")
  }
}

function ImagesM(){
  var Massa = getSelectedValue("tipon")
  
  console.log(Carne)

  if(Massa === 35.9){
    document.getElementById("mtipo").src="resources/lasanha.jpg";
    console.log("1 if")
  }
  else if(Massa === 29.99){
    document.getElementById("mtipo").src="resources/macarrao.jpg";
    console.log("2 if")
  }
  else if(Massa === 49.90){
    document.getElementById("mtipo").src="resources/nhoque.jpg";
    console.log("3 if")
  }
}

function ImagesS(){
  var Salada = getSelectedValue("tipos")
  
  console.log(Salada)

  if(Salada === 35.9){
    document.getElementById("stipo").src="resources/saladaestranha.jpg";
    console.log("1 if")
  }
  else if(Salada === 29.99){
    document.getElementById("stipo").src="resources/salada-rabenete.jpeg";
    console.log("2 if")
  }
  else if(Salada  === 49.90){
    document.getElementById("stipo").src="resources/salada-caesar.jpeg";
    console.log("3 if")
  }
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
