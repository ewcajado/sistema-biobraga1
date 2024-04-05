// Referência ao nó do banco de dados
const database = firebase.database();

// Função para lidar com o envio do formulário
document.getElementById('productionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    // Obter os valores dos campos do formulário
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const design = document.getElementById('design').value;
    const format = document.getElementById('format').value;
    const quantity = document.getElementById('quantity').value;
    const operator = document.getElementById('operator').value;

    // Enviar os dados para o Firebase Realtime Database
    database.ref('producao').push({
        day: day,
        time: time,
        design: design,
        format: format,
        quantity: quantity,
        operator: operator
    }).then(function() {
        console.log('Dados enviados com sucesso para o Firebase Realtime Database!');
    }).catch(function(error) {
        console.error('Erro ao enviar dados para o Firebase Realtime Database:', error);
    });

    // Limpar o formulário após o envio
    document.getElementById('productionForm').reset();
});
