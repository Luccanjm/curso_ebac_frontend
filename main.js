$('form button').click(function(e) {
    e.preventDefault();
    const tarefa = $('#nova-tarefa').val().trim();

    if(tarefa !== ""){
        $("#lista-tarefas").append(`<li>${tarefa}</li>`);
        $("#nova-tarefa").val("");
    }
});

$("#lista-tarefas").on("click", "li", function(){
    $(this).toggleClass("line-through");
})