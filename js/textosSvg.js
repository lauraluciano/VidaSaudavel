
    <div id="infoBox" class="info-box">
    Passe o mouse sobre um cômodo da casa.
  </div>
  
  const rooms = {
    sala: "Sala de estar: espaço para descanso e convivência.",
    cozinha: "Cozinha: área para preparar refeições.",
    quarto: "Quarto: ambiente para descanso e privacidade.",
    jardigem: "Banheiro: área de higiene pessoal.",
    salaL: "blalalala"
  };

  // Adiciona evento de hover para cada cômodo
  document.querySelectorAll("#cozinha").forEach(cozinha => {
    cozinha.addEventListener("mouseenter", () => {
      infoBox.textContent = rooms[cozinha.id];
      infoBox.classList.add("active");
    });
       });


     document.querySelectorAll("#sala").forEach(sala => {
    sala.addEventListener("mouseenter", () => {
      infoBox.textContent = rooms[sala.id];
      infoBox.classList.add("active");
    });
       });


     document.querySelectorAll("#salaL").forEach(salaL => {
    salaL.addEventListener("mouseenter", () => {
      infoBox.textContent = rooms[salaL.id];
      infoBox.classList.add("active");
    });
       });


    
     document.querySelectorAll("#musica").forEach(musica => {
    musica.addEventListener("mouseenter", () => {
      infoBox.textContent = rooms[quarto.id];
      infoBox.classList.add("active");
    });
       });

    
     document.querySelectorAll("#jardi").forEach(jardi => {
    jardi.addEventListener("mouseenter", () => {
      infoBox.textContent = rooms[jardinagem.id];
      infoBox.classList.add("active");
    });
       });


    cozinha.addEventListener("mouseleave", () => {
      infoBox.textContent = "Passe o mouse sobre um cômodo da casa.";
      infoBox.classList.remove("active");
    });
