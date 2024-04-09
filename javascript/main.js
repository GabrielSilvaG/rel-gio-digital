function attDoTempo() {
    let data = new Date();    /*Pega a Data */
    let horas = data.getHours();    /*Pega as horas */
    let minutos = data.getMinutes();    /*Pega os minutos */
    let segundos = data.getSeconds();    /*Pega os segundos */
    let diaSemana = data.getDay(); /*Pega o dia da semana */  //0 - 6
    let diasSemana = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sabado'
    ]
    let dia = data.getDate();    /*Pega o dia do mês*/
    let mes = data.getMonth() + 1 ;    /*Pega o mês do ano. O +1 é para corrigi o mês*/
    let ano = data.getFullYear(); /*Pega o ano*/


    /*Depois da criação da função "addZero" solicito o retorno dela aqui, para que minha hora, minutos segundos, dias e meses fiquem corretos*/
    horas = addZero(horas);
    minutos = addZero(minutos);
    segundos = addZero(segundos);
    dia = addZero(dia);
    mes = addZero(mes);

    /*Aqui vai ser oque sera exibido na tela*/
    let horaCerta = `${horas}:${minutos}:${segundos}`;
    let diaDoMes = `${diasSemana[diaSemana]}, ${dia}/${mes}/${ano}`

    document.querySelector(".tempo").innerHTML = horaCerta;
    document.querySelector(".data").innerHTML = diaDoMes;

}

/*Essa função recebe um valor, tranaforma ela em string e verifica se possui 2 caragterers, se nao tiver ele vai colocar um número "0" na frente e retornar*/ 
function addZero (value) {
return String(value).padStart(2, "0");
}

/*Aqui diz que, a "horaCerta" vai ser att a cada 1 segundo*/
setInterval(attDoTempo, 1000);
