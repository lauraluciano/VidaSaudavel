
let respostas = {};
let perguntaAtual = 1;

function responder(numeroPergunta, valor) {
    respostas[numeroPergunta] = valor;
    document.getElementById("pergunta" + numeroPergunta).classList.add("hidden");
    const proxima = document.getElementById("pergunta" + (numeroPergunta + 1));

    if (proxima) {
        proxima.classList.remove("hidden");
    } else {

        finalizar();
    }
}
function converterHoras(cod) {
    if (cod === 1) return 3;
    if (cod === 2) return 6;
    return 12;
}



function finalizar() {
    const pergunta1 = respostas[1];
    const pergunta2 = respostas[2];
    const pergunta3 = respostas[3];
    const pergunta4 = respostas[4];
    const pergunta5 = respostas[5];

    if (!pergunta1 || !pergunta2 || !pergunta3 || !pergunta4 || !pergunta5) {
        alert(`Responda todas as perguntas!`)
        return
    }
    const horasTrabalho = converterHoras(pergunta1);
    const horasCelular = converterHoras(pergunta2);
    /*GRAFICO*/
    const usoMedio = 9;
    const horasLivres = 24 - (horasTrabalho + 8);
    const grafico = document.querySelector('.grafico');
    const circuloAdequado = document.querySelector('.usoMedio')
   
    const proporção = usoMedio / horasCelular;
    const tamanhoBase = 200;
    const tamanhoMedia = Math.min(tamanhoBase, 360);
    const tamanhoAdequado = Math.min(tamanhoMedia * proporção, 360);
    grafico.style.width = `${tamanhoMedia}px`;
    grafico.style.height = `${tamanhoMedia}px`;
    circuloAdequado.style.width = `${tamanhoAdequado}px`;
    circuloAdequado.style.height = `${tamanhoAdequado}px`;
    
    if ( horasCelular>usoMedio) {
          document.getElementById("textoGrafico").classList.remove("hidden");
        const horaAcima =  horasCelular-usoMedio
        document.querySelector("#textoGrafico .horasTexto").innerHTML = horaAcima
    }
    else{
            document.getElementById("textoGrafico2").classList.remove("hidden");
             const horaAcima =  usoMedio - horasCelular;
        document.querySelector("#textoGrafico2 .horasTexto").innerHTML = horaAcima
    }
    //FIM GRAFICO

    let videoContainer = document.getElementById("videoContainer");
    let videoTexto = document.getElementById("videoTexto");
    let tituloRecomendado = "";
    let recomendacao = "";
    let listaHobbie = "";


    if (pergunta5 == 1) {
        if (pergunta3 == 1 && (pergunta4 == 1 || pergunta4 == 2)) {
            tituloRecomendado = "Pintura"
            listaHobbie = "pintar"
            recomendacao = `Procure começar com materiais simples, você pode ir até uma loja de departamento e comprar um kit simples de pintura, com tintas e pincéis de tamanhos variados. Junto, você pode optar por comprar telas, cadernos de desenho ou até livros de pintura. Alguns livros vêm com desenhos prontos para só pintar, outros vem com desenhos para você finalizar e pintar. As opções são diversas! Comece devagar, não gaste muito dinheiro no início e vá descobrindo qual o seu ritmo, suas preferências, para depois investir em materiais bons.Além disso, no Youtube existem tutoriais para diversos tipos de pintura, você começar tentando por`
            videoTexto = `Além disso, no Youtube existem tutoriais para diversos tipos de pintura, você começar tentando por:`
            videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/-itZ9a97pzY?si=QmMoWIhdmdHU7gkF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/cfapAB9ofss?si=b67n-_XiEOIxG4fh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
        }
        else if (pergunta3 == 2 && (pergunta4 == 1 || pergunta4 == 2)) {
            tituloRecomendado = "ARTESANATO!"
              listaHobbie = " fazer artesanato "
            recomendacao = ` Procure iniciar com materiais simples e acessíveis. Você pode ir até uma papelaria, loja de departamento e comprar um itens básicos para artesanato como cola, tesoura, barbante, tintas, pincéis, EVA, ou até massinhas de modelar. Escolha alguns materiais que combinem com aquilo que você tem curiosidade de criar. Além disso, cadernos de anotações ou blocos de ideias podem ajudar a planejar seus primeiros projetos. Comece com itens pequenos, como chaveiros, porta-copos, marcadores de página ou pequenos enfeites. Vá com calma, evite gastar muito no início e descubra seu ritmo, seus gostos e o tipo de artesanato que mais combina com você antes de investir em materiais mais elaborados. Além disso, no YouTube existem tutoriais para diversos tipos de artesanato. Você pode começar tentando por:, crochê básico, customização de objetos, reciclagem criativa… Aqui vão algumas sugestões:`
            videoTexto = `Além disso, no YouTube existem tutoriais para diversos tipos de artesanato. Você pode começar tentando por:, crochê básico, customização de objetos, reciclagem criativa… Aqui vão algumas sugestões:`
            videoContainer.innerHTML = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/1jw9MG6GV6A" title="COMO FAZER BORDADO ✨PASSO A PASSO bem explicado &amp; quais MATERIAIS usar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/qNvzVy_8kHY" title="Make a Spider Keychain with Hair Rubber 🕷️Super Easy DIY / Spider Doll" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
        }
        else if (pergunta3 == 1 && (pergunta4 == 4 || pergunta4 == 3)) {
            tituloRecomendado = "DIY!"
             listaHobbie = "praticar diy(do it yourself)"
            recomendacao = ` Procure começar identificando o que você gostaria de fazer, se há alguma figura, referência específica, e depois, descobrir quais materiais são necessários para fazer o artesanato. Se você tem pouca experiência, recomendamos pegar referências mais simples, que usam papel, papelão, cola, tinta e cartolina colorida, dentre outros materiais mais fáceis de manusear, e também evitar figuras mais complexas. Você também pode optar por tutoriais nas redes, que são o que não faltam! Depois que você começar a se sentir confortável, você identifica as suas preferências; crochê, tricô, presentes feitos a mão, decorações para a casa… \nDepois disso é só relaxar e pensar um tempo longe das telas!\nSem ideia do que fazer? Recomendamos os seguinte tutoriais:`

        }
        else if (pergunta3 == 2 && (pergunta4 == 4 || pergunta4 == 3)) {
            tituloRecomendado = "MÚSICA!"
            recomendacao = `Procure iniciar com um instrumento simples e acessível. Você pode ir até uma loja de música ou até mesmo pesquisar online por instrumentos para iniciantes, como ukulele, teclado pequeno, violão básico ou flauta doce. Escolha algo que desperte sua curiosidade e que você ache agradável de ouvir, um caderno de anotações também pode ajudar a registrar acordes, exercícios e músicas que você quer aprender. Comece com exercícios leves, treine alguns minutos por dia e não se preocupe em dominar tudo de imediato. Vá devagar, sem gastar muito no começo, até descobrir qual instrumento combina mais com seu ritmo e estilo.\nAlém disso, no YouTube existem tutoriais para diversos instrumentos. Você pode começar tentando por: acordes básicos no violão, primeiras melodias no teclado, ritmos simples no ukulele ou exercícios de respiração e notas na flauta. Existem também aplicativos gratuitos que ajudam no treino de afinação, ritmo e leitura musical.`
            videoTexto = `Além disso, no YouTube existem tutoriais para diversos instrumentos. Você pode começar tentando por: acordes básicos no violão, primeiras melodias no teclado, ritmos simples no ukulele ou exercícios de respiração e notas na flauta. Existem também aplicativos gratuitos que ajudam no treino de afinação, ritmo e leitura musical.`
            videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/yOr42co9UjA?si=2mnD-F7Idwc3uSnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/D2ULaxhImRU?si=PS9bdGuiGLik4mpD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
        }

    }

    else if (pergunta5 == 2) {
         listaHobbie = " praticar leitura"
        if (pergunta3 == 1 && (pergunta4 == 1 || pergunta4 == 2)) {
            tituloRecomendado = "LER!"
            
            recomendacao = `
                        Comece devagar, sem pressão para ler grandes textos complexos.Escolha livros que despertem sua curiosidade e seus interesses.Pode ser uma história leve, contos curtos, crônicas ou até quadrinhos.O importante é que a leitura seja prazerosa, e não uma obrigação.Crie um cantinho confortável, com boa iluminação e sem muitas distrações, para tornar o momento de ler relaxante.Não é preciso investir muito no início: bibliotecas, sebos e e - books gratuitos oferecem uma infinidade de opções. 
                        Além disso, ler à noite pode ser uma ótima forma de desacelerar a mente antes de dormir.Aqui vai uma sugestão de rotina simples, que não exige muito foco: 

                        ROTINA DE LEITURA NOTURNA(15–30 minutos) 
                        Escolha o livro: Prefira algo leve ou com capítulos curtos.


                        Prepare o ambiente: Iluminação aconchegante, uma bebida quente se quiser e um cantinho confortável.


                        Defina um horário fixo: Por exemplo, depois do jantar ou antes de apagar as luzes. 


                        Comece devagar: Leia apenas um capítulo ou 10–15 páginas por noite.Não se preocupe em terminar rápido. 


                        Registre pequenas anotações: Se quiser, marque trechos que gostou ou palavras novas, sem pressão. `

        }
        else if (pergunta3 == 2 && (pergunta4 == 1 || pergunta4 == 2)) {
            tituloRecomendado = "LER!"
             
            recomendacao = `  
                        Comece devagar, sem pressão para ler grandes textos complexos.Escolha livros que despertem sua curiosidade e seus interesses.Pode ser uma história leve, contos curtos, crônicas ou até quadrinhos.O importante é que a leitura seja prazerosa, e não uma obrigação.Crie um cantinho confortável, com boa iluminação e sem muitas distrações, para tornar o momento de ler relaxante.Não é preciso investir muito no início: bibliotecas, sebos e e - books gratuitos oferecem uma infinidade de opções.\n
                        Além disso, ler à noite pode ser uma ótima forma de desacelerar a mente antes de dormir.\n 
                        Aqui vai uma sugestão de rotina noturna que exige mais foco: \n
                        ROTINA DE LEITURA NOTURNA COM FOCO(30–60 minutos) 

                        Escolha o livro certo: Opte por algo mais denso ou que exija atenção para acompanhar a história ou os conceitos. 

                        Prepare o ambiente: Espaço silencioso, boa iluminação, cadeira confortável e nada de celular por perto. 

                        Defina um horário fixo: Por exemplo, logo após o jantar ou antes de se preparar para dormir. 

                        Estabeleça metas de leitura: Decida quantas páginas ou capítulos quer ler por noite, sem pressa, mas com consistência. 

                        Faça anotações: Marque trechos importantes, escreva pensamentos ou perguntas sobre o que leu.Isso aumenta a compreensão e memória. 

                        Intervalos curtos se necessário: Se perceber cansaço mental, faça uma pausa de 2 a 3 minutos antes de continuar. `

        }
        else if (pergunta3 == 1 && (pergunta4 == 4 || pergunta4 == 3)) {
            tituloRecomendado = "LER!"
            recomendacao = `  
                        Comece devagar, sem pressão para ler grandes textos complexos.Escolha livros que despertem sua curiosidade e seus interesses.Pode ser uma história leve, contos curtos, crônicas ou até quadrinhos.O importante é que a leitura seja prazerosa, e não uma obrigação.Crie um cantinho confortável, com boa iluminação e sem muitas distrações, para tornar o momento de ler relaxante.Não é preciso investir muito no início: bibliotecas, sebos e e - books gratuitos oferecem uma infinidade de opções. 
                        Além disso, ler à noite pode ser uma ótima forma de desacelerar a mente antes de dormir.
                        vai uma sugestão de rotina de leitura durante o dia que não exige muito foco:

                        ROTINA DE LEITURA DIÁRIA LEVE(15–20 minutos) 
                        Escolha o livro certo: Prefira leituras leves, com capítulos curtos ou histórias independentes. 


                        Encontre um momento tranquilo: Pode ser durante o intervalo do trabalho, na hora do café ou depois do almoço. 


                        Defina um tempo curto: 15 a 20 minutos já são suficientes para criar o hábito. 


                        Leia de forma descontraída: Não se preocupe em memorizar tudo ou terminar rapidamente; aproveite a história ou as ideias. 


                        Use marcadores: Se quiser, marque páginas ou trechos que achar interessantes, sem compromisso de estudar. 


                        Combine com um ambiente agradável: Música leve ou um lugar silencioso ajudam a tornar a leitura prazerosa. 


                        Transforme em hábito: Faça desse momento diário uma pausa relaxante, quase como um “respiro” durante o dia.`

        }
        else if (pergunta3 == 2 && (pergunta4 == 4 || pergunta4 == 3)) {
            tituloRecomendado = "LER!"
            recomendacao = `  
                        Comece devagar, sem pressão para ler grandes textos complexos.Escolha livros que despertem sua curiosidade e seus interesses.Pode ser uma história leve, contos curtos, crônicas ou até quadrinhos.O importante é que a leitura seja prazerosa, e não uma obrigação.Crie um cantinho confortável, com boa iluminação e sem muitas distrações, para tornar o momento de ler relaxante.Não é preciso investir muito no início: bibliotecas, sebos e e - books gratuitos oferecem uma infinidade de opções. 
                        Além disso, ler à noite pode ser uma ótima forma de desacelerar a mente antes de dormir. 
                        Aqui vai uma sugestão de rotina de leitura diurna que exige mais foco: 

                        ROTINA DE LEITURA DIÁRIA COM FOCO(30–45 minutos) 
                        Escolha o livro certo: Opte por algo mais complexo ou que exija atenção aos detalhes, como romances densos, ensaios ou livros de ciência e história. 


                        Prepare o ambiente: Espaço silencioso, cadeira confortável, iluminação adequada e nada de celular ou distrações por perto. 


                        Defina um horário fixo: Pode ser no intervalo da manhã, durante a pausa do trabalho ou logo após o almoço, quando você ainda tem energia mental. 


                        Estabeleça metas: Defina quantas páginas ou capítulos pretende ler, mantendo um ritmo consistente. 


                        Faça anotações: Escreva ideias, palavras novas ou resuma trechos importantes para fixar melhor o conteúdo. 


                        Releia trechos se necessário: Isso ajuda a compreender melhor passagens complexas ou conceitos importantes. 


                        Pausas estratégicas: Se perceber cansaço, faça uma pausa rápida de 2–3 minutos e retome a leitura para manter o foco.`

        }
    }
    else if (pergunta5 == 3) {
        if (pergunta3 == 1 && (pergunta4 == 1 || pergunta4 == 2)) {
            tituloRecomendado = "EXERCÍCIOS FÍSICOS!"
             listaHobbie = "praticar exercícios físicos"
            recomendacao = ` 
                            Procure iniciar com atividades simples e que não exijam equipamentos caros.Você pode começar caminhando pelo seu bairro, fazendo alongamentos em casa ou seguindo treinos básicos apenas com o peso do corpo.Se quiser investir um pouco, itens como colchonete, corda de pular ou halteres leves já ajudam bastante.O mais importante é escolher exercícios que você ache confortáveis e adequados ao seu ritmo.Vá devagar, sem exagerar, e vá ajustando o tempo e a intensidade conforme seu corpo se acostumar. 
                            Além disso, no YouTube existem tutoriais para diversos tipos de atividades físicas. 
                            Você pode começar tentando por: treinos de alongamento, exercícios funcionais, ou séries rápidas de cardio.Também existem aplicativos gratuitos que ajudam a acompanhar seu progresso e sugerem treinos simples para cada dia. `
            videoTexto = `Além disso, no YouTube existem tutoriais para diversos tipos de atividades físicas. Você pode começar tentando por: treinos de alongamento, exercícios funcionais, ou séries rápidas de cardio. Também existem aplicativos gratuitos que ajudam a acompanhar seu progresso e sugerem treinos simples para cada dia.`
            videoContainer.innerHTML = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/wELAKN2QsOU?si=1mDZapZIKLTmbtoy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/m1QV6EAyuaw?si=jyvv9VP8lQ2Bdmef" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
        }
        else if (pergunta3 == 2 && (pergunta4 == 1 || pergunta4 == 2)) {
            tituloRecomendado = "DANÇA!"
             listaHobbie = "dançar"
            recomendacao = ` \n
                            Procure iniciar com estilos simples e que combinem com o seu gosto musical.Você pode experimentar dançar em casa mesmo, escolhendo músicas que você goste.Se quiser investir um pouco, procure roupas leves e um tênis adequado, não precisa ser caro no início, apenas algo que permita movimentos livres.Também vale reservar um pequeno espaço em casa para praticar, onde você consiga se movimentar sem esbarrar em nada.Comece com passos básicos, sem pressa, e vá reconhecendo seu próprio ritmo e estilo, depois teste passos diferentes, para obter confiança e coordenação motora. 
                            Além disso, no YouTube existem tutoriais para diversos estilos de dança. 
                            Você pode começar tentando por: fitdance, hip hop, k - pop, dança contemporânea ou até aulas de alongamento corporal voltadas para bailarinos.Existem também playlists prontas com coreografias bem simples para iniciantes.`
            videoTexto = `Além disso, no YouTube existem tutoriais para diversos estilos de dança. Você pode começar tentando por: fitdance, hip hop, k-pop, dança contemporânea ou até aulas de alongamento corporal voltadas para bailarinos. Existem também playlists prontas com coreografias bem simples para iniciantes.`
            videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/BxOBhZBLOio?si=Q-kJzSi0o3xZ7wPf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cwsq6C3AR7I?si=NuugBYZl41GdB3yy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
        }
        else if (pergunta3 == 1 && (pergunta4 == 4 || pergunta4 == 3)) {
            tituloRecomendado = "CAMINHADA OU CORRIDA!"
             listaHobbie = "fazer caminhada ou corrida"
            recomendacao = `Procure iniciar com algo simples: uma boa caminhada. Você não precisa de equipamentos caros, um tênis confortável, roupas leves e uma garrafinha de água já são suficientes para dar os primeiros passos. Escolha um horário agradável, como início da manhã ou fim da tarde, e trace rotas curtas no seu bairro ou em parques próximos. Comece devagar, alternando entre caminhar e, se quiser, pequenos trotes. Com o tempo, você pode aumentar a distância e o ritmo, sempre respeitando os limites do seu corpo. Não se preocupe em fazer tudo perfeito logo no início; o mais importante é criar uma rotina que seja prazerosa e sustentável. 
                            Além disso, existem inúmeros vídeos no YouTube com dicas para iniciantes. 
                            Você pode começar tentando por: caminhadas guiadas, treinos de corrida leve, exercícios de aquecimento e alongamento. Existem também aplicativos gratuitos que ajudam a monitorar distância, tempo e ritmo.`
            videoTexto = `Além disso, existem inúmeros vídeos no YouTube com dicas para iniciantes. Você pode começar tentando por: caminhadas guiadas, treinos de corrida leve, exercícios de aquecimento e alongamento. Existem também aplicativos gratuitos que ajudam a monitorar distância, tempo e ritmo.`
            videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/rRK6yk6vO5A?si=u1IC8Yo-qN2-zlIt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/5FJoqhlszTI?si=HAMhnQJb7UjwNSFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
        }

        else if (pergunta3 == 2 && (pergunta4 == 4 || pergunta4 == 3)) {
            tituloRecomendado = "YOGA!"
             listaHobbie = "praticar yoga"
            recomendacao = `Procure iniciar com uma prática simples e acessível.Você não precisa de muitos equipamentos, um tapete confortável(ou até uma toalha mais grossa no início) já é suficiente para começar.Escolha um cantinho tranquilo da sua casa, onde você consiga se alongar e respirar sem interrupções.Comece com posturas básicas, focando mais na respiração do que na perfeição dos movimentos.Vá no seu ritmo, sem forçar além do que o corpo permite, e observe como você se sente a cada prática.Não é preciso investir muito no começo; com o tempo, se você gostar, pode buscar um tapete de melhor qualidade ou acessórios como blocos e cintos.\nAlém disso, no YouTube existem tutoriais para diversos níveis de yoga.Você pode começar tentando por: yoga para iniciantes, alongamentos matinais, yoga restaurativa ou sequências simples de mobilidade.Há também aulas guiadas que duram de 5 a 20 minutos — perfeitas para quem está começando.`
            videoTexto = `Além disso, no YouTube existem tutoriais para diversos níveis de yoga. Você pode começar tentando por: yoga para iniciantes, alongamentos matinais, yoga restaurativa ou sequências simples de mobilidade. Há também aulas guiadas que duram de 5 a 20 minutos — perfeitas para quem está começando.`
            videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/OuCvUDVoX3M?si=UOTRk9pnii4tFBpa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/rcaSC0-d6YE?si=6RJHlqbwi2W-yCHv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
        }
    }



    else if (pergunta5 == 4) {
        listaHobbie = "cozinhar"
        if (pergunta3 == 1 && (pergunta4 == 1 || pergunta4 == 2)) {
            tituloRecomendado = "COZINHAR!"

            recomendacao = ` 
                            Procure iniciar com receitas simples e ingredientes fáceis de encontrar.Você não precisa de utensílios sofisticados, uma panela, uma frigideira, uma faca básica e uma tábua já resolvem muita coisa.Vá com calma, sem gastar muito no início, e descubra o que você mais se diverte fazendo: doces, salgados, lanches rápidos… tudo vale! Cozinhar pode ser terapêutico, criativo e surpreendentemente relaxante. 
                            Além disso, no YouTube existem tutoriais para todos os níveis.Você pode começar tentando por receitas rápidas, preparos com poucos ingredientes, ou vídeos de “passo a passo” bem detalhados.E, para dar o primeiro passo na prática, você pode tentar a  seguinte receita:
                            Massa ao Alho e Azeite\n
                            Ingredientes(para 1 a 2 porções):\n 
                            150 g de macarrão(espaguete ou o que você tiver) 
                            2 dentes de alho picados


                            2 colheres de sopa de azeite


                            Sal a gosto


                             Pimenta -do -reino(opcional)

                            Salsinha picada(opcional)
                            Queijo ralado(opcional)
                            Modo de preparo:\n





                            Coloque água para ferver em uma panela com uma pitada de sal. 


                            Quando ferver, acrescente o macarrão e cozinhe conforme o tempo indicado na embalagem.


                            Enquanto isso, aqueça o azeite em uma frigideira e coloque o alho para dourar levemente(cuidado para não queimar!). 


                            Escorra o macarrão e misture - o diretamente na frigideira com o azeite e o alho. 
                            Tempere com pimenta -do -reino, salsinha e queijo ralado, se quiser. 
                            Misture bem e sirva quentinho.`
        }
        else if (pergunta3 == 2 && (pergunta4 == 1 || pergunta4 == 2)) {
            tituloRecomendado = "COZINHAR!"
            recomendacao = `  
                            Procure iniciar com receitas simples e ingredientes fáceis de encontrar.Você não precisa de utensílios sofisticados, uma panela, uma frigideira, uma faca básica e uma tábua já resolvem muita coisa.Vá com calma, sem gastar muito no início, e descubra o que você mais se diverte fazendo: doces, salgados, lanches rápidos… tudo vale! Cozinhar pode ser terapêutico, criativo e surpreendentemente relaxante. 
                            Além disso, no YouTube existem tutoriais para todos os níveis. 
                            Você pode começar tentando por receitas rápidas, preparos com poucos ingredientes, ou vídeos de “passo a passo” bem detalhados.E, para dar o primeiro passo na prática, você pode tentar a  seguinte receita: 
                            Frango Cremoso ao Molho de Mostarda com Arroz Temperado
                            Ingredientes(2 porções):
                            Para o frango: 
                            2 filés de peito de frango


                            Sal e pimenta -do -reino a gosto


                            1 colher de sopa de manteiga


                            1 colher de sopa de azeite


                            1 / 2 cebola picada


                            2 dentes de alho picados


                            1 colher de sopa de mostarda


                            1 / 2 xícara de creme de leite


                            1 / 4 xícara de água


                            Salsinha picada(opcional) 


                            Para o arroz temperado: 
                            1 xícara de arroz


                            2 xícaras de água


                            1 / 2 cebola picada


                            1 dente de alho picado


                            1 colher de sopa de óleo ou azeite


                            Sal a gosto



                            Modo de preparo:\n
                            Arroz temperado:\n 
                            Aqueça uma panela com o óleo e refogue a cebola até ficar transparente. 


                            Acrescente o alho e mexa rapidamente para não queimar. 


                            Adicione o arroz, misture bem e refogue por 1 minuto. 


                            Coloque a água, ajuste o sal e deixe cozinhar em fogo baixo até secar.Reserve. 



                            Frango ao molho de mostarda: 
                            Tempere os filés de frango com sal e pimenta. 


                            Aqueça uma frigideira com a manteiga e o azeite.Doure os filés dos dois lados e retire - os da panela(deixe a frigideira com os resíduos, pois eles dão sabor ao molho). 


                            Na mesma frigideira, refogue a cebola até murchar.Acrescente o alho e mexa rapidamente. 


                            Adicione a água, a mostarda e mexa bem para dissolver os sabores do fundo da panela. 


                            Abaixe o fogo e coloque o creme de leite, misturando até formar um molho cremoso. 


                            Devolva os filés para a frigideira e deixe cozinhar por mais 2–3 minutos, envolvendo - os bem no molho. 


                            Finalize com salsinha, se quiser.`
        }
        else if (pergunta3 == 1 && (pergunta4 == 4 || pergunta4 == 3)) {
            tituloRecomendado = "COZINHAR!"
            recomendacao = ` 
                            Procure iniciar com receitas simples e ingredientes fáceis de encontrar.Você não precisa de utensílios sofisticados, uma panela, uma frigideira, uma faca básica e uma tábua já resolvem muita coisa.Vá com calma, sem gastar muito no início, e descubra o que você mais se diverte fazendo: doces, salgados, lanches rápidos… tudo vale! Cozinhar pode ser terapêutico, criativo e surpreendentemente relaxante. 
                            Além disso, no YouTube existem tutoriais para todos os níveis. Você pode começar tentando por receitas rápidas, preparos com poucos ingredientes, ou vídeos de “passo a passo” bem detalhados.E, para dar o primeiro passo na prática, você pode tentar a  seguinte receita: 
                            Lasanha de Berinjela com Molho de Tomate Caseiro
                            Ingredientes(2 a 3 porções): 
                            Para a lasanha: 
                            2 berinjelas médias


                            Sal a gosto


                            Azeite para grelhar


                            200 g de queijo muçarela


                            50 g de queijo parmesão ralado


                            Para o molho de tomate caseiro: 
                            1 colher de sopa de azeite


                            1 / 2 cebola picada


                            2 dentes de alho picados


                            4 tomates maduros picados(ou 1 lata de tomate pelado) 


                            Sal e pimenta -do -reino a gosto


                            1 colher de sopa de açúcar(opcional, para corrigir acidez) 


                            Manjericão fresco ou orégano(opcional) 



                            Modo de preparo: 
                            Preparando as berinjelas: 
                            Fatie as berinjelas no sentido do comprimento, em fatias médias. 


                            Polvilhe sal e deixe descansar por 10 minutos para retirar o amargor. 


                            Enxugue com papel - toalha e pincele azeite dos dois lados. 


                            Grelhe as fatias em uma frigideira ou grill até dourarem levemente.Reserve. 



                            Molho de tomate caseiro: 
                            Aqueça o azeite e refogue a cebola até ficar transparente. 


                            Acrescente o alho e mexa rapidamente. 


                            Adicione os tomates picados(ou o tomate pelado), misture e deixe cozinhar até desmanchar.\n
                            Tempere com sal, pimenta e o açúcar, se necessário.\n
                            Quando o molho estiver encorpado, finalize com manjericão ou orégano.\n
                            Montagem:Em um refratário, coloque uma camada de molho.
                            Adicione uma camada de berinjela grelhada. 
                            Cubra com queijo muçarela. 
                            Repita as camadas até acabar os ingredientes. 
                            Finalize com queijo parmesão ralado por cima. 
                            Leve ao forno preaquecido a 200 °C por cerca de 20 a 25 minutos, até gratinar.`
        }
        else if (pergunta3 == 2 && (pergunta4 == 4 || pergunta4 == 3)) {
            tituloRecomendado = "COZINHAR!"
            recomendacao = ` 
                            Procure iniciar com receitas simples e ingredientes fáceis de encontrar.Você não precisa de utensílios sofisticados, uma panela, uma frigideira, uma faca básica e uma tábua já resolvem muita coisa.Vá com calma, sem gastar muito no início, e descubra o que você mais se diverte fazendo: doces, salgados, lanches rápidos… tudo vale! Cozinhar pode ser terapêutico, criativo e surpreendentemente relaxante. 
                            Além disso, no YouTube existem tutoriais para todos os níveis.Você pode começar tentando por receitas rápidas, preparos com poucos ingredientes, ou vídeos de “passo a passo” bem detalhados.E, para dar o primeiro passo na prática, você pode tentar a  seguinte receita: 

                            Torta de Limão com Merengue Italiano
                            Ingredientes(serve de 6 a 8 porções): 
                            Massa: 
                            200 g de bolacha maisena


                            100 g de manteiga derretida


                            Creme de limão(curd): 
                            1 lata de leite condensado


                            1 lata de creme de leite


                            Suco de 3 a 4 limões


                            Raspas de limão(opcional) 


                            Merengue italiano(a parte mais difícil): 
                            2 claras


                            1 xícara de açúcar


                            1 / 3 de xícara de água



                            Modo de preparo: 
                            1. Massa
                            Triture as bolachas até virar uma farofa fina. 


                            Misture a manteiga derretida até formar uma massa úmida. 


                            Aperte essa mistura no fundo e nas laterais de uma forma de fundo removível. 


                            Asse por 10 minutos a 180 °C e deixe esfriar. 



                            2. Creme de limão
                            Misture o leite condensado com o creme de leite. 


                            Acrescente o suco dos limões aos poucos, mexendo sempre. 


                            O creme vai engrossar naturalmente pela ação do ácido. 


                            Coloque sobre a massa já assada e leve à geladeira enquanto prepara o merengue. 



                            3. Merengue italiano(a etapa mais técnica!) 
                            Coloque o açúcar e a água em uma panela e não mexa. 


                            Deixe ferver até atingir ponto de fio grosso(cerca de 118 °C — se não tiver termômetro, observe que a calda fica mais espessa, formando um fio contínuo ao levantar a colher). 


                            Enquanto a calda cozinha, bata as claras até ficarem firmes. 


                            Com a batedeira ligada, despeje a calda quente em fio sobre as claras, lentamente. 


                            Continue batendo por 5 a 7 minutos, até o merengue ficar brilhante e consistente. 



                            4. Montagem
                            Espalhe o merengue sobre o creme de limão. 


                            Use uma colher para formar picos decorativos. 


                            Se quiser, toste o merengue com maçarico culinário para um visual profissional. 


                            Leve à geladeira por pelo menos 3 horas.`
        }
    }
    else if (pergunta5 == 5) {
         listaHobbie = "praticar jardinagem"
        if (pergunta3 == 1 && (pergunta4 == 1 || pergunta4 == 2)) {
            tituloRecomendado = "JARDINAGEM!"
            recomendacao = ` 
                                Comece devagar, escolhendo plantas que não exijam muitos cuidados e que sejam resistentes.Você não precisa de um grande jardim: vasos, jardineiras ou até pequenos espaços na varanda ou janela já são suficientes.Tenha ferramentas básicas, como pazinha, regador e luvas, e vá aprendendo sobre rega, luminosidade e adubação aos poucos.O importante é transformar o hobby em um momento relaxante, onde você se conecta com a natureza e observa o crescimento das plantas. 
                                Além disso, a jardinagem pode ser feita em diferentes horários do dia, inclusive à noite, se você já tiver luz adequada e uma rotina tranquila.Aqui vai uma sugestão de planta fácil de cuidar para iniciantes e para ser monitorada à noite: 
                                Espada - de - São - Jorge
                                Cuidados noturnos simples: 
                                Confira a terra: se estiver seca, regue levemente(uma vez por semana geralmente é suficiente). 


                                Limpe as folhas com um pano úmido para remover poeira. 


                                Observe o crescimento e quaisquer sinais de folhas amareladas ou ressecadas. 


                                Gire o vaso ocasionalmente para que todas as folhas recebam luz, mesmo que seja indireta.`

        }
        else if (pergunta3 == 2 && (pergunta4 == 1 || pergunta4 == 2)) {
            tituloRecomendado = "JARDINAGEM!"
            recomendacao = ` 
                                Se você já experimentou plantas mais fáceis e quer se desafiar, pode começar a cuidar de espécies que exigem mais atenção, rega controlada, luz adequada e observação frequente.Plantas mais delicadas ajudam a desenvolver paciência, percepção e conhecimento sobre diferentes necessidades de cultivo.Para esse tipo de hobby, tenha ferramentas básicas, um diário de cuidados e um espaço onde você consiga monitorar a planta diariamente.Com prática, o desafio se torna prazeroso e muito recompensador. 
                                Aqui vai uma sugestão de planta que exige mais atenção, perfeita para quem quer um hobby de jardinagem mais envolvente: 
                                Orquídea
                                Cuidados diários e noturnos: 
                                Rega: Verifique a umidade do substrato; regue quando estiver seco, evitando encharcar. 


                                Luz: Coloque em local com luz indireta intensa; à noite, apenas garanta que o ambiente não esteja frio demais. 


                                Ventilação: Não deixe em locais sem circulação de ar. 


                                Monitoramento: Observe folhas e raízes para identificar sinais de pragas ou doenças.


                                Fertilização: Use fertilizante específico para orquídeas a cada 2–3 semanas, conforme instruções`

        }
        else if (pergunta3 == 1 && (pergunta4 == 4 || pergunta4 == 3)) {
            tituloRecomendado = "JARDINAGEM!"
            recomendacao = ` 
                                Comece devagar, escolhendo plantas resistentes e que não exigem cuidados complicados.Você não precisa de um grande jardim: vasos, jardineiras ou até cantos ensolarados de sua varanda ou janela já são suficientes.Tenha ferramentas básicas, como pazinha, regador e luvas, e vá aprendendo sobre rega, luz e adubação aos poucos.O importante é transformar a jardinagem em um momento relaxante, onde você observa o crescimento das plantas e se conecta com a natureza. 
                                Além disso, cuidar das plantas durante o dia facilita observar a luz que elas recebem e monitorar suas necessidades.Aqui vai uma sugestão de planta fácil de cuidar para iniciantes, ideal para atenção durante o dia: 
                                Suculentas
                                Cuidados diários simples: 
                                Observe a luz: coloque as suculentas em local com luz indireta durante o dia; elas crescem melhor com algumas horas de sol. 


                                Rega leve: regue somente quando o solo estiver completamente seco(uma vez a cada 5–7 dias é suficiente). 


                                Limpeza: retire folhas secas ou danificadas para manter a planta saudável. 


                                Rotação: gire os vasos ocasionalmente para que todos os lados recebam luz do sol.`

        }
        else if (pergunta3 == 2 && (pergunta4 == 4 || pergunta4 == 3)) {
            tituloRecomendado = "JARDINAGEM!"
            recomendacao = ` 
                                Se você já se sente confortável cuidando de plantas mais simples e quer um desafio maior, pode apostar em espécies que exigem atenção constante, luz adequada e cuidados específicos.Plantas mais delicadas ajudam a desenvolver paciência e observação, tornando a jardinagem um hobby mais envolvente.Para isso, é importante ter ferramentas básicas, um local adequado e estar disposto a monitorar a planta diariamente. 
                                Aqui vai uma sugestão de planta que exige mais atenção e cuidados durante o dia: 
                                Figueira - de - Bengala
                                Cuidados diários simples: "
                                Luz: Coloque a planta próximo a janelas que recebam luz indireta durante o dia. 


                                Rega: Observe o solo diariamente; regue quando a superfície estiver seca, evitando encharcamento. 


                                Limpeza das folhas: Passe um pano úmido para retirar poeira e permitir melhor fotossíntese. 


                                Monitoramento: Fique atento a sinais de folhas amareladas, murchas ou com manchas — indicativos de necessidade de ajuste na rega ou iluminação. 


                                Rotação do vaso: Gire a planta ocasionalmente para que todas as folhas recebam luz uniformemente. `

        }

    }
    document.getElementById("tituloRecomendado").innerText = tituloRecomendado;
    document.getElementById("recomendacao").innerText = recomendacao;
     document.getElementById("graficoHoras").classList.add("mostrar")
    document.getElementById("containerGrafico").style.display = "block"
    document.getElementById("respostaP").classList.remove("hidden");
    document.getElementById("respostaP2").classList.remove("hidden");
    document.getElementById("respostaP2").style.display = "inline-block";
    videoContainer.classList.remove("hidden");
    console.log(`eba`)
    document.getElementById("modal-content").style.background=`url("imagens/resposta.png") center/cover no-repeat`;
    document.querySelector(".grafico")
        .setAttribute("data-info", "Seu consumo de tela: " + horasCelular + " horas");
    document.querySelector("#graficoHoras p span").innerHTML = horasCelular + " horas";
      document.querySelector(".hobbie div p ").classList.remove("hidden")
    document.querySelector(".hobbie div p span").innerHTML = listaHobbie
      document.getElementById("tituloRecomendado").style.display = "block"
       document.getElementById("textoRecomendado").style.display = "block"
}

