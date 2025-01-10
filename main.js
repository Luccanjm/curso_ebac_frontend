function validarFormulario(event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Obtém os valores dos campos A e B
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    // Obtém o elemento da mensagem
    var mensagemDiv = document.getElementById('mensagem');

    // Verifica se o número B é maior que o número A
    if (campoB > campoA) {
        // Exibe uma mensagem positiva
        mensagemDiv.innerHTML = "Formulário válido! O número B é maior que o número A.";
        mensagemDiv.className = "mensagem-sucesso";
    } else {
        // Exibe uma mensagem negativa
        mensagemDiv.innerHTML = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagemDiv.className = "mensagem-erro";
    }
}