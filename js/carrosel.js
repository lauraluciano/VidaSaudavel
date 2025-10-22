window.onload = function () {
  const carrosseis = document.querySelectorAll('.carrosel');
  
  carrosseis.forEach(carrossel => {
    const radios = carrossel.querySelectorAll('input[type="radio"]');
    let count = 0;
    
    setInterval(() => {
      radios[count].checked = true;
      count = (count + 1) % radios.length;
    }, 8000);
  });
};