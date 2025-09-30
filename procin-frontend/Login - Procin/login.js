function toggle_password() {      // FUNÇÃO QUE MOSTRA A SENHA OU NÃO
    const input = document.getElementById("senha_usuario");
    const icon = document.querySelector(".icon-eye");

    if (input.type === "password") {
        input.type = "text"; 
    } else {
        input.type = "password"; 
        icon.style.opacity = "1";
    }
}

function click_entrar(){
    const email = document.getElementById("email_usuario").value;
    const senha = document.getElementById("senha_usuario").value;

    const json = {email, senha};

    const informacoes_login = JSON.stringify(json)

    // PARTE DO BACK-END A PARTIR DAQUI

}