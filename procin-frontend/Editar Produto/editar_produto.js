function click_confirmar_informacoes(event) {
    const nome = document.getElementById("nome_produto").value;
    const descricao = document.getElementById("descricao_produto").value;
    const categoria = document.getElementById("categoria_produto").value;
    const variacao = document.getElementById("variacao_produto").value;
    const preco = document.getElementById("preco_produto").value;
    const estoque = document.getElementById("estoque_produto").value;
    const peso = document.getElementById("peso_produto").value;
    const tamanho = document.getElementById("tamanho_produto").value;

    if (!nome || !descricao || !categoria || !variacao || !preco || !estoque || !peso || !tamanho) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return; 
    }

    const fundo = document.querySelector(".fundo_container_foto");
    fundo.style.display = "flex";

    // Evita o refresh da página
    event.preventDefault();
}


function click_confirmar_foto(){

    const foto = document.getElementById("imagem_produto").value;

    if (!foto) {
        alert("Selecione uma foto do produto!");
    }

    const fundo = document.querySelector(".fundo_container_foto");

    fundo.style.display = "none"
}