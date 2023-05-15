

const buscador = (cep) => {

    if(cep == ''){

        return 'Cep inválido'

    } 
       else {


            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((data) => {
              return console.log(`Estado: ${data.uf} \nCidade: ${data.localidade} \nBairro: ${data.bairro} \nEndereço: ${data.logradouro} \nDDD: ${data.ddd}`)
            })

        


    }
}

module.exports = {buscador}