function callApi(apiNumber, token) {
    // URL base da API
    const baseUrl = 'https://api.roberty.app/prod/1/customer/robot/webhookCall';
    
    // Corpo da requisição
    const data = {
        token: token // Usa o token passado como parâmetro
    };

    // Chamada da API usando fetch
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na chamada da API: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Resposta da API', apiNumber, ':', data);
        alert('Chamada API ' + apiNumber + ' realizada com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro na chamada da API ' + apiNumber);
    });
}
