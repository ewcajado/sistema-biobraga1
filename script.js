// Dados pré-configurados de desenhos e formatos
const desenhosPreConfigurados = ['Projeto A', 'Projeto B', 'Projeto C'];
const formatosPreConfigurados = ['Formato A4', 'Formato A3', 'Formato A5'];

// Função para preencher as opções de desenhos e formatos nos campos do formulário
function preencherOpcoes() {
    const selectDesign = document.getElementById('design');
    const selectFormat = document.getElementById('format');

    // Preencher opções de desenhos
    desenhosPreConfigurados.forEach(desenho => {
        const option = document.createElement('option');
        option.textContent = desenho;
        selectDesign.appendChild(option);
    });

    // Preencher opções de formatos
    formatosPreConfigurados.forEach(formato => {
        const option = document.createElement('option');
        option.textContent = formato;
        selectFormat.appendChild(option);
    });
}

// Preencher os campos com dados do banco de dados local (armazenamento local)
function preencherCampos() {
    // Obter os dados do banco de dados local (se existirem)
    const dadosArmazenados = JSON.parse(localStorage.getItem('dadosProducao'));

    // Se houver dados armazenados, preencher os campos do formulário
    if (dadosArmazenados) {
        document.getElementById('day').value = dadosArmazenados.day || '';
        document.getElementById('time').value = dadosArmazenados.time || '';
        document.getElementById('quantity').value = dadosArmazenados.quantity || '';
        document.getElementById('operator').value = dadosArmazenados.operator || '';
    }
}

// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Obter os valores dos campos do formulário
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const design = document.getElementById('design').value;
    const format = document.getElementById('format').value;
    const quantity = document.getElementById('quantity').value;
    const operator = document.getElementById('operator').value;

    // Criar objeto com os dados do formulário
    const formData = {
        day: day,
        time: time,
        design: design,
        format: format,
        quantity: quantity,
        operator: operator
    };

    // Aqui você pode enviar os dados para onde desejar (por exemplo, para um servidor)
    console.log(formData);

    // Armazenar os dados no banco de dados local (armazenamento local)
    localStorage.setItem('dadosProducao', JSON.stringify(formData));

    // Limpar o formulário após o envio
    document.getElementById('productionForm').reset();
}

// Preencher opções de desenhos e formatos ao carregar a página
preencherOpcoes();
preencherCampos();

// Adicionar evento de envio ao formulário
document.getElementById('productionForm').addEventListener('submit', handleSubmit);

