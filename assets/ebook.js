const ebookName = document.querySelector("#ebookName")
    const campoTipo = document.querySelector("#tipo")
    const campoLink = document.querySelector("#ebook")
    const campoImg = document.querySelector("#ebookImg")

    
    campoTipo.addEventListener("change",ebook)

function ebook() {
    if (campoTipo.value == 1) {
        ebookName.innerText = "E-book EA FC 24";
        campoLink.removeAttribute("href");
        campoLink.setAttribute("href", "assets/pdf/Zelda TOTK Ebook.pdf");
        campoImg.removeAttribute("src");
        campoImg.setAttribute("src", ".assets/img/CAPA.jpg");
    }
    else if (campoTipo.value == 2) {
        ebookName.innerText = "E-Book Mortal Kombat";
        campoLink.removeAttribute("href");
        campoLink.setAttribute("href", "./assets/pdf/Ebook-Mortal Kombat 1.pdf");
        campoImg.removeAttribute("src");
        campoImg.setAttribute("src", "./assets/img/mk1.png");
    }
    else if (campoTipo.value == 3) {
        ebookName.innerText = "E-Book Payday 3";
        campoLink.removeAttribute("href");
        campoLink.setAttribute("href", "./assets/pdf/E-book Payday 3.pdf");
        campoImg.removeAttribute("src");
        campoImg.setAttribute("src", "./assets/img/Payday3.png");
    }
    else if (campoTipo.value == 4) {
        ebookName.innerText = "E-Book Zelda";
        campoLink.removeAttribute("href");
        campoLink.setAttribute("href", "./assets/pdf/EA FC 24 E-book.pdf");
        campoImg.removeAttribute("src");
        campoImg.setAttribute("src", "./assets/img/ea24 (1).jpg");
    }
    else {
        ebookName.innerText = "";
        campoImg.removeAttribute("src");
        campoLink.removeAttribute("href");
    }


}
