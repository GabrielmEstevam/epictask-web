function concluir(id){
    //buscar do localstorage
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []


    //buscar a tatrefa com o id
    let tarefa = tarefas.find(t => t.id === id)

    tarefa.concluida = true


    //salvar no localstorage
    localStorage.setItem("tarefas",JSON.stringify(tarefas))

    atualizar()

}