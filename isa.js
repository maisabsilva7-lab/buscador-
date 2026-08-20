const inputendereço = document.getElementById("endereço")

const r = document.getElementById("bairro")

                                    

async function buscar() {

    alert("Minha buscar funcional! Oba!")
    const response = await fetch (`https://viacep.com.br/ws/${55018370}/json/`)
    let endereço = await response.json()

    console.log(endereço) 

    bairro.value = endereço.bairro

}