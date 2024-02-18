
/* TODO1 */
function testarJQuery1(){
    $( document ).ready(function() {
        $("#rotulo1").html("123");
        console.log( "TODO1" );
    });
}

/* TODO2 */ 
function testarJQuery2(){
    $( document ).ready(function() {
        $(".estiloAvaliacao").css("color","#0000ff");
        console.log( "TODO2" );
    });
}

/* TODO3 */ 
function testarJQuery3(){
    $( document ).ready(function() {
        //$("h1").css("color","#0000ff");
        $("label").css("color","#ff00ff");
        console.log( "TODO3" );
    });
}

/* TODO4 */ 
function testarJQuery4(){
    $( document ).ready(function() {
        $("[id]").css("color","#00ffff"); /* Altera todos que tem o atributo 'id' */
        console.log( "TODO4" );
    });
}


/* -- */
function exibir(x){ 
    console.log(x);
}

function somar(x,y){ return x+y; }

function listarVetores(){

    let vetor = [ 'PIX', 'Boleto', 'Cartão' ];

    /* Retorna o indice a partir do conteúdo */
    console.log('Posicao do PIX: ' + vetor.indexOf('PIX'));

    /* Vetores podem conter tipos diferentes, inclusive funcoes, e tambem conteúdo vazio (posicoes 5 em diante) */
    let vetor2 = [ 'PIX', 123, true, 1.23, somar, , , ];

    vetor2.forEach( exibir ); /* Faz a chamada da funcao 'exibir' para cada elemento que eh diferente de vazio (undefined) */

    /* Eh possivel invocar a funcao a partir da posicao em que ela se encontra no vetor*/
    console.log(vetor2[4](1,2)); //retorna '3'

} 


function avaliarCompra() {
    let rotuloAvaliacao = document.getElementById('rotuloAvaliacao');

    let x = parseInt(document.getElementById('notas').value);

    rotuloAvaliacao.innerHTML = 'Avaliação da compra: ';
    switch (x) {
        case 0: {
            rotuloAvaliacao.innerHTML += 'Ruim';
            rotuloAvaliacao.style.color = "#ff0000";
            break;
        }
        case 5: {
            rotuloAvaliacao.innerHTML += 'Razoável';
            rotuloAvaliacao.style.color = "#00ff00";
            break;
        }
        default: {
            rotuloAvaliacao.innerHTML += 'Ótimo';
            rotuloAvaliacao.style.color = "#0000ff";
            break;
        }
    }

}

/* TODO2 */
function avaliarSigla() {
    let rotuloSigla = document.getElementById('rotuloSigla');

    let x = document.getElementById('siglas').value;

    rotuloSigla.innerHTML = 'Avaliação da sigla: ';
    switch (x) {
        case 'HTML': {
            rotuloSigla.innerHTML += 'Hypertext Markup Language';
            rotuloSigla.style.color = "#ff0000";
            break;
        }
        case 'CSS': {
            rotuloSigla.innerHTML += 'Cascading Style Sheet';
            rotuloSigla.style.color = "#00ff00";
            break;
        }
        default: {
            rotuloSigla.innerHTML += 'eXtended Markup Language';
            rotuloSigla.style.color = "#0000ff";
            break;
        }
    }

}










var compra = false;
function comprar() {

    let imagem = document.getElementById('carrinho');

    compra = !compra; //Inverte o valor atual que está em memória

    if (compra) {
        imagem.src = 'img/vendas2.png';
    } else {
        imagem.src = 'img/vendas.png';
    }

}