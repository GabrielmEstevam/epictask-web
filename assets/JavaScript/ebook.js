    // Código para a Implementação da função visualizar Ebook

const ebookName = document.querySelector("#ebookName")
    const campoTipo = document.querySelector("#tipo")
    const campoLink = document.querySelector("#ebook")
    const campoImg = document.querySelector("#ebookImg")

    
    campoTipo.addEventListener("change",ebook)

function ebook() {
    if (campoTipo.value == 1) {
        ebookName.innerText = "E-book EA FC 24\n";
        campoLink.removeAttribute("href");
        campoLink.setAttribute("href", "./assets/pdf/EA FC 24 E-book.pdf");
        campoImg.removeAttribute("src");
        campoImg.setAttribute("src", "./assets/img/EA FC Capa.jpg");
    }
    else if (campoTipo.value == 2) {
        ebookName.innerText = "E-Book Mortal Kombat\n";
        campoLink.removeAttribute("href");
        campoLink.setAttribute("href", "./assets/pdf/Ebook-Mortal Kombat 1.pdf");
        campoImg.removeAttribute("src");
        campoImg.setAttribute("src", "./assets/img/MK 1 Capa.jpg");
    }
    else if (campoTipo.value == 3) {
        ebookName.innerText = "E-Book Payday 3\n";
        campoLink.removeAttribute("href");
        campoLink.setAttribute("href", "./assets/pdf/E-book Payday 3.pdf");
        campoImg.removeAttribute("src");
        campoImg.setAttribute("src", "./assets/img/Payday 3 Capa.jpg");
    }
    else if (campoTipo.value == 4) {
        ebookName.innerText = "E-Book Zelda\n";
        campoLink.removeAttribute("href");
        campoLink.setAttribute("href", "./assets/pdf/Zelda TOTK Ebook.pdf");
        campoImg.removeAttribute("src");
        campoImg.setAttribute("src", "./assets/img/Capa Zelda TOTK.jpg");
    }
    else {
        ebookName.innerText = "";
        campoImg.removeAttribute("src");
        campoLink.removeAttribute("href");
    }

    // Código para a avaliação do Usuário


    const ratings = document.querySelectorAll('.rating');
    const selectedRating = document.getElementById('selected-rating');
    
    ratings.forEach((rating) => {
        rating.addEventListener('click', () => {
           
            ratings.forEach((r) => r.classList.remove('selected'));
    
            rating.classList.add('selected');
    
            selectedRating.textContent = rating.textContent;
        });
    });



}
