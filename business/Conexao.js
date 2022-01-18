//aqui será validado o token e pegar os dados de conexão

//aqui a funcao vai receber o token vindo do front-end
//vai acessar a tabela admdigital.token
//validar o toque
//preencher os dados do ctrl e retornar
function conexao_bd(authorization) {
    const token = authorization.substring(7);
    console.log(token)
    //local
    return {"host": "localhost", "port": 3306, "user": "root", "pass": "mysql", "db": 'sag'};

}

module.exports = {conexao_bd};
