const form = document.getElementById('formulario');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';
    const corpoTabela = document.getElementById('tbody');
    corpoTabela.innerHTML += linha;
    inputNome.value = '';
    inputTelefone.value = '';
});


