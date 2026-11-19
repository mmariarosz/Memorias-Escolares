// ======================================================
// PORTFÓLIO DE REDAÇÕES
// ======================================================
//
// VOCÊ TEM 17 REDAÇÕES.
//
// Depois de corrigir cada uma, coloque:
// 1. O título em "title"
// 2. O tema em "theme"
// 3. O texto completo em "text"
//
// NÃO PRECISA ALTERAR O RESTANTE DO CÓDIGO.
// ======================================================


const essays = [

    {
        number: "01",

        title: "Título da redação 01",

        theme: "Tema da redação 01",

        text: `
COLOQUE AQUI A REDAÇÃO 01.

Depois que você corrigir sua redação,
apague este texto e cole a versão final aqui.
        `
    },


    {
        number: "02",

        title: "Título da redação 02",

        theme: "Tema da redação 02",

        text: `
COLOQUE AQUI A REDAÇÃO 02.
        `
    },


    {
        number: "03",

        title: "Título da redação 03",

        theme: "Tema da redação 03",

        text: `
COLOQUE AQUI A REDAÇÃO 03.
        `
    },


    {
        number: "04",

        title: "Título da redação 04",

        theme: "Tema da redação 04",

        text: `
COLOQUE AQUI A REDAÇÃO 04.
        `
    },


    {
        number: "05",

        title: "Título da redação 05",

        theme: "Tema da redação 05",

        text: `
COLOQUE AQUI A REDAÇÃO 05.
        `
    },


    {
        number: "06",

        title: "Título da redação 06",

        theme: "Tema da redação 06",

        text: `
COLOQUE AQUI A REDAÇÃO 06.
        `
    },


    {
        number: "07",

        title: "Título da redação 07",

        theme: "Tema da redação 07",

        text: `
COLOQUE AQUI A REDAÇÃO 07.
        `
    },


    {
        number: "08",

        title: "Título da redação 08",

        theme: "Tema da redação 08",

        text: `
COLOQUE AQUI A REDAÇÃO 08.
        `
    },


    {
        number: "09",

        title: "Título da redação 09",

        theme: "Tema da redação 09",

        text: `
COLOQUE AQUI A REDAÇÃO 09.
        `
    },


    {
        number: "10",

        title: "Título da redação 10",

        theme: "Tema da redação 10",

        text: `
COLOQUE AQUI A REDAÇÃO 10.
        `
    },


    {
        number: "11",

        title: "Título da redação 11",

        theme: "Tema da redação 11",

        text: `
COLOQUE AQUI A REDAÇÃO 11.
        `
    },


    {
        number: "12",

        title: "Título da redação 12",

        theme: "Tema da redação 12",

        text: `
COLOQUE AQUI A REDAÇÃO 12.
        `
    },


    {
        number: "13",

        title: "Título da redação 13",

        theme: "Tema da redação 13",

        text: `
COLOQUE AQUI A REDAÇÃO 13.
        `
    },


    {
        number: "14",

        title: "Título da redação 14",

        theme: "Tema da redação 14",

        text: `
COLOQUE AQUI A REDAÇÃO 14.
        `
    },


    {
        number: "15",

        title: "Título da redação 15",

        theme: "Tema da redação 15",

        text: `
COLOQUE AQUI A REDAÇÃO 15.
        `
    },


    {
        number: "16",

        title: "Título da redação 16",

        theme: "Tema da redação 16",

        text: `
COLOQUE AQUI A REDAÇÃO 16.
        `
    },


    {
        number: "17",

        title: "Título da redação 17",

        theme: "Tema da redação 17",

        text: `
COLOQUE AQUI A REDAÇÃO 17.
        `
    }

];



// ======================================================
// ELEMENTOS DO SITE
// ======================================================

const essayGrid =
    document.getElementById("essayGrid");

const modal =
    document.getElementById("essayModal");

const modalNumber =
    document.getElementById("modalNumber");

const modalTitle =
    document.getElementById("modalTitle");

const modalTheme =
    document.getElementById("modalTheme");

const modalText =
    document.getElementById("modalText");

const modalClose =
    document.getElementById("modalClose");



// ======================================================
// CRIAR OS CARDS DAS 17 REDAÇÕES
// ======================================================

function renderEssays() {

    essayGrid.innerHTML = "";

    essays.forEach((essay, index) => {

        const card =
            document.createElement("article");

        card.classList.add("essay-card");

        card.setAttribute("tabindex", "0");

        card.innerHTML = `

            <div>

                <div class="essay-number">
                    ${essay.number}
                </div>

                <h3>
                    ${essay.title}
                </h3>

                <p>
                    ${essay.theme}
                </p>

            </div>

        `;


        // Abrir redação ao clicar

        card.addEventListener(
            "click",
            () => openEssay(index)
        );


        // Abrir usando Enter

        card.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openEssay(index);

                }

            }
        );


        essayGrid.appendChild(card);

    });

}



// ======================================================
// ABRIR REDAÇÃO
// ======================================================

function openEssay(index) {

    const essay = essays[index];


    modalNumber.textContent =
        `REDAÇÃO ${essay.number}`;


    modalTitle.textContent =
        essay.title;


    modalTheme.textContent =
        essay.theme;


    modalText.textContent =
        essay.text;


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";
}



// ======================================================
// FECHAR REDAÇÃO
// ======================================================

function closeEssay() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";
}



// ======================================================
// BOTÃO FECHAR
// ======================================================

modalClose.addEventListener(
    "click",
    closeEssay
);



// ======================================================
// CLICAR FORA DA REDAÇÃO
// ======================================================

document
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closeEssay
    );



// ======================================================
// TECLA ESC
// ======================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeEssay();

        }

    }
);



// ======================================================
// MENU MOBILE
// ======================================================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "mobile-open"
        );

    }
);



// ======================================================
// FECHAR MENU AO CLICAR EM UM LINK
// ======================================================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "mobile-open"
                );

            }
        );

    });



// ======================================================
// INICIAR OS CARDS
// ======================================================

renderEssays();