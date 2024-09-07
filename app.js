function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (campoPesquisa =="") {
        section.innerHTML = "Nada foi digitado"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags ="";
    
    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) { 
            // cria um novo elemento 
        resultados += `
        <div class="item-resultado">
            <h2> 
             ${dado.titulo}
            </h2>
            <p class="descricao-meta">${dado.descricao} </P>
            <a href=${dado.link} target="_blank" >Mais Informações</a> 
        </div>
        ` ;
        }

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }


    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados
}