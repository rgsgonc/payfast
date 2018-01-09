var memcached = require('memcached');

var cliente = new memcached('localhost:11211',{
    retries: 10, //numero de tentativa feita por request.
    retry: 10000, //tempo que vai esperar entre a falha de um servidor e uma tentativa de coloca-lo de novo em servico.
    remove: true
});

cliente.get('pagamento-5', function(erro, retorno){
    if(erro || !retorno){
        console.log('MISS - Chave nao encontrada no cache');
    }else{
        console.log('HIT - Chave encontrada no cache: ' + JSON.stringify(retorno));
    }
});