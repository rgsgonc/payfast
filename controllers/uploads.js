var fs = require('fs');

module.exports = function (app){
    
    app.post("/imagem/upload", function(req, res){
        console.log('recebendo a imagem via rota');

        var filename = req.headers.filename;
        req.pipe(fs.createWriteStream('files/' + filename))
        .on('finish', function(err){
            console.log('arquivo escrito com sucesso');
            res.status(201).send('OK TUDO CERTO COM UPLOAD DA IMAGEM');
        })

    });
}