function Calculadora(){
    this.display =  document.querySelector('.display');
    this.contador = 0;

    console.log(this.display.innerText);

    this.inicia = () =>{
        this.cliqueBotoes();
        this.cliqueTeclado();
    };

    this.cancelaEnter = (elemento) =>{
        elemento.addEventListener('keypress', evento => {
            evento.preventDefault();
        });
    };

    this.realizaConta = () =>{
        let conta = this.display.innerText;

        try{
            conta = eval(conta);

            if(!conta){
                document.querySelector('.alerta').style.display = 'flex';
                return;
            }
            if(Number.isInteger(conta)){
                this.display.innerText = conta;
            }else{
                this.display.innerText = conta.toFixed(2);
            }
            
        }catch(erro){
            document.querySelector('.alerta').style.display = 'flex';
            setTimeout(function(){
                document.querySelector('.alerta').style.display = 'none';
            },3000);
            return;
        }
    };

    this.clearDisplay = () =>{
        this.display.innerText = '';
    };

    this.apagaUm = () =>{
        this.display.innerText = this.display.innerText.slice(0, -1);
    };

    this.btnParaDisplay = (valor) =>{
        if(this.contador === 0){
            this.display.innerText += valor;  
        }else{
            this.display.innerText = valor;
        }            
    };

    this.cliqueTeclado = () =>{
        document.addEventListener('keyup', evento =>{
            if(evento.keyCode === 96 || evento.keyCode === 48){
                this.btnParaDisplay('0');
                this.contador = 0;
            }
            if(evento.keyCode === 97 || evento.keyCode === 49){
                this.btnParaDisplay('1');
                this.contador = 0;
            }
            if(evento.keyCode === 98 || evento.keyCode === 50){
                this.btnParaDisplay('2');
                this.contador = 0;
            }
            if(evento.keyCode === 99 || evento.keyCode === 51){
                this.btnParaDisplay('3');
                this.contador = 0;
            }
            if(evento.keyCode === 100 || evento.keyCode === 52){
                this.btnParaDisplay('4');
                this.contador = 0;
            }
            if(evento.keyCode === 101 || evento.keyCode === 53){
                this.btnParaDisplay('5');
                this.contador = 0;
            }
            if(evento.keyCode === 102 || evento.keyCode === 54){
                this.btnParaDisplay('6');
                this.contador = 0;
            }
            if(evento.keyCode === 103 || evento.keyCode === 55){
                this.btnParaDisplay('7');
                this.contador = 0;
            }
            if(evento.keyCode === 104 || evento.keyCode === 56){
                this.btnParaDisplay('8');
                this.contador = 0;
            }
            if(evento.keyCode === 105 || evento.keyCode === 57){
                this.btnParaDisplay('9');
                this.contador = 0;
            }
            if(evento.keyCode === 106){
                this.contador = 0;
                this.btnParaDisplay('*');
            }
            if(evento.keyCode === 107){
                this.contador = 0;
                this.btnParaDisplay('+');
            }
            if(evento.keyCode === 109){
                this.contador = 0;
                this.btnParaDisplay('-');
            }
            if(evento.keyCode === 111 || evento.keyCode === 193){
                this.contador = 0;
                this.btnParaDisplay('/');
            }
            if(evento.keyCode === 194){
                this.btnParaDisplay('.');
                this.contador = 0;
            }
            if(evento.keyCode === 46) this.clearDisplay();
            if(evento.keyCode === 8) this.apagaUm();
            if(evento.keyCode === 13){
                this.realizaConta();
                this.contador = 1;
            }
        })
    };

    this.cliqueBotoes = () =>{
        document.addEventListener('click', evento =>{
            const elemento = evento.target;

            if(elemento.classList.contains('btn-ar')){
                this.contador = 0;
            }

            if(elemento.classList.contains('btn-num')){
                this.btnParaDisplay(elemento.innerText);
                this.cancelaEnter(elemento);
                this.contador = 0;
            }
            if(elemento.classList.contains('btn-clear')){
                this.clearDisplay();
            }
            if(elemento.classList.contains('btn-del')){
                this.apagaUm();
            }
            if(elemento.classList.contains('btn-eq')){
                this.realizaConta();
                this.contador = 1;
            }
        });
    };

}

const calculadora = new Calculadora();
calculadora.inicia();