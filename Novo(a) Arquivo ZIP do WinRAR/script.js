
// CAPTURANDO O FORMULÁRIO

const formulario = document.getElementById("formulario");


// ADICIONANDO O EVENTO DE ENVIO

formulario.addEventListener("submit", function(event) {

    // IMPEDINDO O ENVIO AUTOMÁTICO

    event.preventDefault();


    // CAPTURANDO OS CAMPOS

    let nome = document.getElementById("nome").value.trim();

    let email = document.getElementById("email").value.trim();


    // VALIDANDO OS CAMPOS

    if (nome === "" || email === "") {

        alert("Por favor, preencha todos os campos!");

    }

    else if (!email.includes("@") || !email.includes(".")) {

        alert("Por favor, digite um e-mail válido!");

    }

    else {

        alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

        formulario.reset();

    }

});
