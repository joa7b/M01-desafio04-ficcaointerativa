













//Jogo ainda em produção. A lógica das perguntas estão feitas, mas ainda não consegui introduzir um final coerente na história. Devo chamar essa primeira versão de "Versão Alfa", creio que o projeto mesmo com a história não finalizada atende todos os requisitos e usa todo o conteúdo passado pelos professores no módulo 1.


























const prompt = require('prompt-sync')();
console.clear()

console.log('CAT EYE\n======================');
prompt('Pressione ENTER para continuar.');

let nomeJogador;
let resposta;
const cat = {
    nome: nomeJogador,
    vida: 100,
    fome: 60,
    felicidade: 40,
    casa: 0,

    ficarComFome: function() {
        if (this.fome>=70) {
            this.fome += 5
            return 5;
        }else if (this.fome<70) {
            this.fome += 10
            return 10;
        }else if (this.fome<30) {
            this.fome += 15
            return 15;
        }else if (this.fome<10) {
            this.fome += 20
            return 20;
        }
    },

    perderFome: function() {
        let comer = [];
        if (this.fome>=70) {
            this.fome -= 20
            comer[0] = 20
        } else if (this.fome<70) {
            this.fome -= 15
            comer[0] = 15 
        } else if (this.fome<30) {
            this.fome -= 10
            comer[0] = 10
        } else if (this.fome<10) {
            this.fome -= 5
            comer[0] = 5
        }

        if (this.vida>=70 && this.vida<100) {
            this.vida += 5
            comer[1] = 5
        }else if (this.vida<70 && this.vida<100) {
            this.vida += 10
            comer[1] = 10;
        }else if (this.vida<30 && this.vida<100) {
            this.vida += 15
            comer[1] = 15;
        }else if (this.vida<10 && this.vida<100) {
            this.vida += 20
            comer[1] = 20;
        }

        if (this.vida>100) {
            this.vida = 100;
        }

        return comer
    },

    andarCasa: function() {
        if (this.casa>=70) {
            this.casa += 5
            return 5
        }else if (this.casa<70) {
            this.casa += 10
            return 10
        }else if (this.casa<30) {
            this.casa += 15
            return 15
        }else if (this.casa<10) {
            this.casa += 20
            return 20
        }
    },

    ficarFeliz: function() {
        this.felicidade += 10;
    },

    infeliz: function() {
        if (this.felicidade>=70) {
            return 10;
        }else if (this.felicidade<70) {
            return 7;
        }else if (this.felicidade<30) {
            return 5;
        }
    },

    perderVida: function() {
        if (this.vida>=70) {
            this.vida -= 20;
            return 20
        }else if (this.vida<70) {
            this.vida -= 15;
            return 15
        }else if (this.vida<30) {
            this.vida -= 10;
            return 10
        }else if (this.vida<10) {
            this.vida -= 5;
            return 5
        }
    }
}

const dia = {
    hoje: 1,
    hora: '08',
    minuto: '00',

    passarDia: function() {
        this.hoje++;
        this.hora = '08';
        this.minuto = '00';
    }
}

console.clear()
console.log('Bem-vindo(a) ao Olho do Gato\nVocê é um gato, e por algum motivo você está perdido na cidade, parece que você não lembra muito bem o que aconteceu antes de vir aqui, não é mesmo? Felizmente hoje no ano 2569 nossa ONG consegue verificar os status de todos os animais graças ao microchip inserido em seus corpos. Sou o Instrutor da ONG e vou te ajudar nessa jornada para achar seu lar.');
console.log()
console.log('Tudo o que você precisa fazer é manter o status de fome, vida e felicidade estáveis, mas sem esquecer de progredir com o objetivo que é encontrar seu lar. Lembre-se, em tudo existe um lado bom e outro ruim, cada escolha vai influenciar no resultado e o que acontece nem sempre é o esperado.');
console.log()
console.log('Afinal, como é seu nome? ')
nomeJogador = prompt('');
console.log('Você está pronto para continuar? Digite SIM ou NAO.');
resposta = prompt('').toLowerCase()

while (resposta != 'sim' && resposta != 'nao') {
    console.log('RESPOSTA INVÁLIDA!\nVocê está pronto para continuar? Digite SIM ou NAO.')
    resposta = prompt('').toLowerCase()
}

while (resposta == 'nao' || resposta == 'não') {
    console.clear()
    console.log('INSTRUÇÕES DO JOGO:\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales euismod rutrum. Donec luctus congue urna sagittis lobortis. Fusce lobortis, neque et euismod pharetra, nulla turpis convallis nisl, tincidunt tempus tortor neque ut tellus. Donec nulla eros, iaculis vitae tincidunt a, commodo vel tellus. Vivamus sit amet varius urna. Ut in orci blandit velit dictum vestibulum. Cras egestas eros ac massa posuere gravida. Pellentesque dapibus, dui sagittis venenatis mattis, lacus libero hendrerit orci, a tristique erat nunc et enim. Praesent auctor fringilla neque sit amet tristique. Sed at erat in urna fringilla fermentum. Vestibulum dignissim vulputate suscipit. Phasellus in sagittis ex, a dapibus felis.') //REGRAS DO JOGO
    console.log()
    console.log('Você está pronto para continuar? Digite SIM ou NAO.');
    resposta = prompt('').toLowerCase()

    while (resposta != 'sim' && resposta != 'nao') {
        console.log('RESPOSTA INVÁLIDA!\nVocê está pronto para continuar? Digite SIM ou NAO.')
        resposta = prompt('').toLowerCase()
    }
}

while (resposta == 'sim') {
    console.clear()
    tabuleiro()

    console.log()
    console.log(`Dia: ${dia.hoje}`);

    perguntas(dia.hoje);
    console.clear()
    tabuleiro()
    dia.passarDia()
}


function perguntas(p) {
    switch(p) {
        case 1:

            console.log(`Horas: ${dia.hora}:${dia.minuto}`)
            console.log()
            console.log('Você estava andando tranquilamente na rua, quando observa um cachorro latindo e correndo em sua direção.')
            console.log('"Podemos tentar evitar fazer escolhas através de não fazermos nada, mas mesmo isso é uma decisão." - Gary Collins')
            console.log('[1]Correr [2]Continuar em frente');
            let perguntaUm = prompt();
            let resp1 = [];

            while (perguntaUm != 1 && perguntaUm != 2) {
                console.log('RESPOSTA INVÁLIDA!')
                console.log('[1]Correr [2]Continuar em frente');
                perguntaUm = prompt('');
            }

            if (perguntaUm == 1) {
                resp1[0] = cat.ficarComFome()
                resp1[1] = cat.infeliz()
                dia.hora = 9;
                dia.minuto = 45;
                console.log(`Você escolheu correr. +${resp1[0]} fome, -${resp1[1]} felicidade.`)
                prompt('')
            }else {
                resp1[0] = cat.andarCasa()
                resp1[1] = cat.perderVida()
                dia.hora = 9;
                dia.minuto = 45;
                console.log(`Você escolheu continuar em frente. +${resp1[0]} caminho de casa, -${resp1[1]} vida.`)
                prompt('')
            }

            console.clear()
            tabuleiro()
            console.log()

            console.log('Você concluiu o tutorial, nota-se que suas escolhas modificaram seu status.')
            prompt()

            console.log('Depois de escapar do cachorro, você continuou para a cidade. Olhou em uma vitrine onde tinha um manequim de uma menina e escutou a seguinte voz:\n- Você precisa me encontrar, nada disso é o que parece.')
            console.log('Em seguida, uma pessoa chega e te coloca em uma caixa de gato.')
            prompt()

            console.clear()
            dia.hora = '10'
            dia.minuto = '45'
            tabuleiro()
            console.log()
            console.log(`Dia: ${dia.hoje}`);
            console.log(`Horas: ${dia.hora}:${dia.minuto}`)
            console.log()

            console.log('Você se encontra em um lugar estranho com paredes e chão de metal, parece ter passado algum tempo e seu objetivo a partir de agora é sair dessa caixa.\nO lugar que você está é uma clínica de reabilitação para fumantes de cigarro, e logo percebe que está inserido em uma brincadeira que parece não ter muita graça. Graças aos equipamentos que nossa ONG recebeu do governo conseguimos traduzir a conversa entre o paciente e o doutor para o seu entendimento felino.')
            prompt()
            console.log('- "Estou aqui para mudar a vida do senhor, Dick Morrison." Disse o Doutor.\n- "Espero que para melhor." Disse Dick Morrison.')
            prompt()
            console.log('- "Hahahaha, você é uma pessoa engraçada, Sr. Morrison, o procedimento da Nescau™ é infalível contra fumantes." Disse o Doutor.\n- "Tudo bem, e qual é esse procedimento?" Disse Dick Morrison\n[ABRE-SE AS CORTINAS NO FUNDO DO CONSULTÓRIO]\n- "Está vendo essa gatinho preso nessa caixa de metal?" Disse o Doutor\n- "Estou sim, mas como isso vai me ajudar a parar de fumar?" Disse Dick Morrison.')
            prompt()
            console.log('- "Quer ver? Acenda um cigarro." Disse o Doutor\n- "Tudo bem." Disse Dick Morrison\n[ACENDENDO O CIGARRO]')
            prompt()
            console.clear()

            dia.hora = '10'
            dia.minuto = '45'
            tabuleiro()
            console.log()
            console.log(`Dia: ${dia.hoje}`);
            console.log(`Horas: ${dia.hora}:${dia.minuto}`)
            console.log()
            console.log('[BARULHO DE CHOQUE]\n[GATO MIANDO]\n[BARULHO DE CHOQUE]\n[GATO MIANDO]')
            prompt()
            console.log('Dick Morrison depois de apagar seu cigarro exclama com o doutor:\n- "Você está louco? Não pode ferir um gatinho toda vez que eu fumar um cigarro."\n- "Posso sim, tenho licença do governo para fazer esse tipo de terapia. E graças ao microchip que todas as pessoas possuem no cérebro conseguimos detectar se você está fumando em qualquer momento do seu dia." Disse o Doutor.')

            console.log()
            console.log('Agora você está preso na caixa de metal de uma clínica para fumantes, você precisa sair dai o mais rápido possível. Cada cigarro que Dick Morrison fumar aparentemente você vai tomar um shock, se você vai sobreviver ou não, tudo vai depender de quanto o Sr.Morrison gosta de gatinhos fofinhos.')
            prompt()
            break;
        
        case 2:
            console.clear()
            tabuleiro()
            console.log()
            console.log(`Dia: ${dia.hoje}`);
            console.log(`Horas: ${dia.hora}:${dia.minuto}`)
            console.log()

            console.log('Você precisa fugir desse lugar:\n"Em certos momentos, os homens são donos dos seus próprios destinos." - William Shakespeare.\n[1]Tentar sair por cima [2]Esperar [3]Tentar sair por baixo')
            let perguntaDois = +prompt()
            let resp2 = [];

            while (perguntaDois != 1 && perguntaDois != 2 && perguntaDois != 3) {
                console.log('RESPOSTA INVÁLIDA!')
                console.log('[1]Tentar sair por cima [2]Esperar [3]Tentar sair por baixo');
                perguntaDois = +prompt();
            }

            while (perguntaDois == 1 || perguntaDois == 3) {
                switch(perguntaDois) {
                    case 1:
                        resp2[0] = cat.perderVida()
                        console.log(`Dick Morrison fumou um cigarro, você tomou choque e perdeu ${resp2[0]} de vida.`)
                        console.log()
                        console.log('Não há nada aqui, em momentos da vida você não tem poder sob alguns acontecimentos, pensou que aqui seria diferente?')
                        console.log()
                        console.log('[1]Tentar sair por cima [2]Esperar [3]Tentar sair por baixo');
                        perguntaDois = +prompt();
                        break;

                    case 3:
                        resp2[0] = cat.perderVida()
                        console.log(`Dick Morrison fumou um cigarro, você tomou choque e perdeu ${resp2[0]} de vida.`)
                        console.log()
                        console.log('Não há nada aqui, parece que você ainda não pegou o jeito...')
                        console.log()
                        console.log('[1]Tentar sair por cima [2]Esperar [3]Tentar sair por baixo');
                        perguntaDois = +prompt();
                        break;
                }
            }

                if (perguntaDois == 2) {
                    console.log('Bom...Uma hora ele vai ter que te alimentar, é do interesse dele te manter vivo, talvez seja uma boa hora para escapar.')
                    prompt()
                    console.log('[DOUTOR ENTRA NA SALA]\n- "Não se preocupe gatinho, O Sr.Morrison é uma boa pessoa, ele vai seguir as regras do tratamento e vai ficar tudo bem" Disse o Doutor.\n- "Você deve estar com fome, vou pegar algo para você comer".')
                    prompt()
                    console.clear()
                    tabuleiro()
                    console.log()
                    dia.hora = 09;
                    dia.minuto = 15;
                    console.log(`Dia: ${dia.hoje}`);
                    console.log(`Horas: ${dia.hora}:${dia.minuto}`)
                    console.log()
                    console.log('Enquanto você aguardava sua comida chegar para tentar uma deixa para escapar, surgiu o seguinte questionamento na sua cabeça felina:\nÉ justo machucar um gato em benefício de um ser humano?\n[1]SIM [2]NÃO [3]TALVEZ')
                    let perguntaTres = +prompt()

                    while (perguntaTres != 1 && perguntaTres != 2 && perguntaTres != 3) {
                        console.log()
                        console.log('RESPOSTA INVÁLIDA!')
                        console.log('É justo machucar um gato em benefício de um ser humano?\n[1]SIM [2]NÃO [3]TALVEZ')
                        perguntaTres = +prompt()
                    }

                    if (perguntaTres == 1) {
                        console.log()
                        console.log('Aenean ut sapien et urna convallis consequat at at eros. Suspendisse interdum porttitor mi eu suscipit. Pellentesque feugiat mi dapibus, condimentum nibh non, sodales diam.\n[1]Comer [2]Não comer')
                        let perguntaQuatro = +prompt()
                        let resp4 = [];

                        while (perguntaQuatro != 1 && perguntaQuatro != 2) {
                            console.log()
                            console.log('RESPOSTA INVÁLIDA!\n[1]Comer [2]Não comer')
                            perguntaQuatro = +prompt()
                        }

                        if (perguntaQuatro == 1) {
                            resp4[0] = cat.perderFome()
                            console.log(resp4)
                            prompt()
                            console.log(`Você se alimentou. +${resp4[0][1]} Vida, -${resp4[0][1]} Fome.`)
                        } else {
                            //não comer
                        }
                    } else if (perguntaTres == 2) {
                        console.log()
                        console.log('Aliquam ornare semper vestibulum. Ut sed sem lorem. Pellentesque ornare libero arcu, vitae tincidunt eros interdum sed. Pellentesque ullamcorper lacus eu orci interdum hendrerit. Nam quis aliquet odio. Duis in gravida ex. Nullam vitae tempus nisl, vitae blandit mauris. Pellentesque euismod porttitor nulla, a viverra diam efficitur at. Donec non faucibus arcu, in bibendum arcu. Aenean ut sapien et urna convallis consequat at at eros. Suspendisse interdum porttitor mi eu suscipit. Pellentesque feugiat mi dapibus, condimentum nibh non, sodales diam. ')
                        console.log()
                        console.log('Não é justo que um animal sofra as consequências por um ser humano, você precisa acabar com isso. A ONG está roubando dinheiro da população para financiar experimentos em seres, além de interferir na liberdade individual de cada ser.')
                        console.log()
                        console.log('')
                    } else {

                    }
                }
                break;
    }
}

function tabuleiro() {

    const tabu = new catPerfil(cat.vida,cat.fome,cat.felicidade, cat.casa);
    
    function catPerfil(vida,fome,fel,cdc) {
        this.Vida = vida;
        this.Fome = fome;
        this.Felicidade = fel;
        this.caminhoCasa = cdc;
    }

    console.table(tabu);
}






