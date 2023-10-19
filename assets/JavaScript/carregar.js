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
                <div class="col s12 m6">
                <div class="card  ${tarefa.concluida ? 'red accent-4' : 'blue-grey darken-4'}">
                 
                    <div class="card-content white-text">
                      <span class="card-title">${tarefa.titulo}</span>
                      <p>${tarefa.descricao}</p>
                      

                    </div>
                    
                    <div class="card-action">
                      <a href="#" class="btn red darken-1" onClick="apagar(${tarefa.id})">
                         <i class="material-icons">delete</i></a>
                      <a href="#" class="btn light blue" onClick="concluir(${tarefa.id})">
                        <i class="material-icons">done_all</i></a>
                    </div>
                  </div>
                </div>
    `
document.querySelector("#lista-tarefas").appendChild(card)
}