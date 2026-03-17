const inputValor = document.querySelector('#valorVenda');
const inputProduto = document.querySelector('#produto');
const inputData = document.querySelector('#dataVenda');
const botaoAdicionar = document.querySelector('#btnAdicionar');

const listaVendas = document.querySelector('#listaVendas');
const totalMes = document.querySelector('#totalMes');
const restante = document.querySelector('#restante');
const faturamentoAno = document.querySelector('#faturamentoAno');

let total = 0;
const limiteMei = 81000;

botaoAdicionar.addEventListener('click',function(){
    const valor = inputValor.value;
    const data =  inputData.value;
    const produto = inputProduto.value;

    const erroExistente = document.querySelector('.erro');

if(valor === '' || data === '' || produto === ''){
    if(erroExistente) return;


const li = document.createElement('li');
li.textContent = '⚠ Preencha todos os campos!';
li.classList.add('erro');
li.style.color = 'red';

listaVendas.appendChild(li);
return;
}

if(erroExistente){
    erroExistente.remove();

}

const li = document.createElement('li');
li.textContent = `${data} - ${produto} - R$ ${Number(valor).toFixed(2)}`; 
listaVendas.appendChild(li);


total += Number(valor);

totalMes.textContent = `R$ ${total.toFixed(2)}`;
restante.textContent = `R$ ${(limiteMei - total).toFixed(2)}`;
faturamentoAno.textContent = `R$ ${total.toFixed(2)}`;

inputValor.value = '';
inputData.value = '';
inputProduto.value = '';
inputValor.focus();

});

