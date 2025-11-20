 let btnModal = document.getElementById("btn-modalQuizz");
        let modal = document.getElementById("modal");

        btnModal.addEventListener("click",
            function () {
                console.log("Fuiiiiiiiiiiiiiiii");
                modal.style.display = "flex";
            });
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
