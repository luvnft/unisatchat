function env_msg() {
    let usr_input = document.querySelector("#usr-input").value;

    let chat = document.querySelector("#chat-conteudo");

    let nova_msg = document.createElement("div");
    nova_msg.classList.add("msg-usr")
    
    let usuario = document.createElement("h4");
    usuario.textContent = "Você diz:";
    nova_msg.appendChild(usuario);

    let usr_msg = document.createElement("p");
    usr_msg.textContent = usr_input;
    nova_msg.appendChild(usr_msg);
    chat.appendChild(nova_msg);
    document.querySelector("#usr-input").value = "";
}