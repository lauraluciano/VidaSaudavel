 const infoBox = document.getElementById("infoBox");

  const rooms = {
    yoga: " No caso da yoga, use um tapete ou espaço livre e siga vídeos ou aplicativos que ensinem posições iniciais. Para meditação, comece com 5 a 10 minutos diários, focando na respiração e no momento presente. Esses hábitos ajudam a reduzir o estresse, melhorar a concentração e proporcionar bem-estar físico e mental.",

    cozinha: "Cozinhar em casa pode ser prazeroso e terapêutico. Comece escolhendo receitas simples e rápidas, utilizando ingredientes que você já conhece. Invista em utensílios básicos como panelas, facas afiadas e uma tábua de corte. Aprenda técnicas fundamentais, como cortar, refogar e assar, e depois vá experimentando novas receitas aos poucos. Documentar suas criações ou cozinhar para amigos e familiares pode aumentar a motivação e transformar a prática em uma experiência criativa e social.",

    musica: "Praticar arte em casa exige apenas materiais básicos e vontade de experimentar. Para pintura, comece com lápis, aquarela ou tinta acrílica em papéis ou telas pequenas. Para escultura, massinha de modelar ou argila são ótimas para iniciantes. O importante é se permitir errar e explorar diferentes estilos, cores e formas. Procure tutoriais online ou livros de arte para aprender técnicas. Para música, escolha um instrumento simples, como teclado ou violão, e pratique um pouco todos os dias.",

    jardinagem: "Começar a praticar jardinagem em casa pode ser simples e gratificante. Comece pequeno, escolhendo algumas plantas fáceis de cuidar, como ervas (manjericão, hortelã, salsinha) ou suculentas. Procure vasos adequados, substrato de qualidade e luz natural suficiente. Pesquise sobre a frequência de rega e adubação de cada planta. Um bom hábito é criar um pequeno cantinho verde perto de uma janela ou varanda. A jardinagem ajuda a reduzir o estresse e também ensina paciência e observação da natureza.",

    leitura: "Para iniciar o hábito da leitura, comece escolhendo livros que realmente despertem seu interesse, seja ficção, biografias ou autoajuda. Crie um espaço confortável, com boa iluminação e poucos ruídos, e estabeleça um horário diário para ler, mesmo que seja apenas 10 ou 15 minutos. Experimente diferentes formatos, como livros físicos, e-books ou audiolivros. Participar de clubes de leitura online ou discutir livros nas redes sociais pode tornar a prática mais motivadora e divertida."
  };

  // Adiciona evento de hover para cada cômodo
  document.querySelectorAll("#jardinagem").forEach(jardinagem => {
    jardinagem.addEventListener("mouseenter", () => {
      infoBox.textContent = rooms[jardinagem.id];
      infoBox.classList.add("active");
    });
      jardinagem.addEventListener("mouseleave", () => {
      infoBox.textContent = "Passe o mouse sobre um cômodo da casa.";
      infoBox.classList.remove("active");
    });

       });



document.querySelectorAll("#yoga").forEach(yoga => {
    yoga.addEventListener("mouseenter", () => {
      infoBox.textContent = rooms[yoga.id];
      infoBox.classList.add("active");
    });
       yoga.addEventListener("mouseleave", () => {
      infoBox.textContent = "Passe o mouse sobre um cômodo da casa.";
      infoBox.classList.remove("active");
    })
       });

 


document.querySelectorAll("#leitura").forEach(leitura => {
    leitura.addEventListener("mouseenter", () => {
      infoBox.textContent = rooms[leitura.id];
      infoBox.classList.add("active");
    });
        leitura.addEventListener("mouseleave", () => {
      infoBox.textContent = "Passe o mouse sobre um cômodo da casa.";
      infoBox.classList.remove("active");
    });
       });





    document.querySelectorAll("#musica").forEach(musica => {
    musica.addEventListener("mouseenter", () => {
      infoBox.textContent = rooms[musica.id];
      infoBox.classList.add("active");
    });
        musica.addEventListener("mouseleave", () => {
      infoBox.textContent = "Passe o mouse sobre um cômodo da casa.";
      infoBox.classList.remove("active");
    });

       });



       document.querySelectorAll("#cozinha").forEach(cozinha => {
    cozinha.addEventListener("mouseenter", () => {
      infoBox.textContent = rooms[cozinha.id];
      infoBox.classList.add("active");
    });
        cozinha.addEventListener("mouseleave", () => {
      infoBox.textContent = "Passe o mouse sobre um cômodo da casa.";
      infoBox.classList.remove("active");
    });

       });

