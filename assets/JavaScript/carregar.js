window.addEventListener("load", atualizar)

function atualizar(){
  document.querySelector("#lista-tarefas").innerHTML = ""
  let tarefas = JSON.parse (localStorage.getItem("tarefas")) || []
  tarefas.forEach(tarefa => criarCard(tarefa))

}

function criarCard (tarefa) {
    const card = document.createElement("div")
    card.classList.add("col","s12","m6","l4")

    card.innerHTML = `
  
                  <div class="card  ${tarefa.concluida ? 'teal darken-3' : 'red lighten-1'}">
  
                    <div class="card-content white-text">
                      <span class="card-title">${tarefa.titulo}</span>
                      <p>${tarefa.descricao}</p>
                      <span data-badge-caption="Pontos ${tarefa.pontos}" class="badge blue white-text left-align"></span>
                      

                    </div>
                    
                    <div class="card-action">
                    
                      <a href="#" class="btn red darken-1" onClick="apagar(${tarefa.id})">
                         <i class="material-icons">delete</i></a>
                      <a href="#" class="btn light blue" onClick="concluir(${tarefa.id})">
                        <i class="material-icons">done_all</i></a>
                    </div>

                  </div>
    `
document.querySelector("#lista-tarefas").appendChild(card)

calcularEstatisticas()
}
