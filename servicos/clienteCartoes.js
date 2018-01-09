var restify = require('restify');
var clientes = require('restify-clients');

//Criando o construtor.
function CartoesClient(){
    this._cliente = clientes.createJsonClient({
        url: 'http://localhost:3001'
    });
}

CartoesClient.prototype.autoriza = function(cartao, callback){
    this._cliente.post('/cartoes/autoriza', cartao, callback);
}

module.exports = function(){
    return CartoesClient;
}