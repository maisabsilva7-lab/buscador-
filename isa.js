 async function buscar(){

        const resposta = await fetch(`https://viacep.com.br/ws/${55014658}/json/`)

        let endereco = await resposta.json()

        console.log(endereco)
}

function enviar () {
        alert("Envie a mensagem")
}