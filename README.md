# Dependencias
 ``` npm install express --save ```

 ``` npm install consign --save ```

 ``` npm install body-parser --save ```

 ``` npm install --save mysql ```

 ``` npm install express-validator --save ```

 ``` npm install --save restify-clients ```

``` npm install --save nodemon```

``` npm install --save soap ```

# Postman

Obs: Para funcionar as duas aplicações devem estar de pé (payfast e cardfast)

* Para realizar um POST de pagamento <em> (FORMA DE PAGAMENTO: payfast)</em> as configuração abaixo devem ser inseridas no POSTMAN.

```
Method: POST
URL: http://localhost:3000/pagamentos/pagamento
Headers: Content-Type:application/json
Body:
{
    "forma_de_pagamento": "payfast",
    "valor": "10.87",
    "moeda": "BRL",
    "descricao": "descrição do pagamento"
}
```

* Para realizar um POST de pagamento <em> (FORMA DE PAGAMENTO: cartao)</em> as configuração abaixo devem ser inseridas no POSTMAN.

```
Method: POST
URL: http://localhost:3000/pagamentos/pagamento
Headers: Content-Type:application/json
Body:
{
  "pagamento": {
    "forma_de_pagamento": "cartao",
    "valor": "10.87",
    "moeda": "BRL",
    "descricao": "descrição do pagamento"
  },
  "cartao": {
    "numero": 1111111111111111,
    "bandeira": "visa",
    "ano_de_expiracao": 2016,
    "mes_de_expiracao": 12,
    "cvv": 123
  }
}
```

* Para realizar um POST de calculo de prazo dos correios as configuração abaixo devem ser inseridas no POSTMAN.

```
Method: POST
URL: http://localhost:3000/correios/calculo-prazo
Headers: Content-Type:application/json
Body:
{
    "nCdServico": "40010",
	"sCepOrigem": "88117402",
	"sCepDestino": "88161590"
}
```

* Para realizar um POST de envio de imagem as configuração abaixo devem ser inseridas no POSTMAN.

```
Method: POST
URL: http://localhost:3000/upload/imagem
Headers: Content-Type:application/octet-stream
         filename:imagem.jpg (mesmo nome do arquivo que vou enviar)
Body: binary
```

# Base de Dados
```
CREATE DATABASE IF NOT EXIST payfast;

USE payfast;

CREATE TABLE `pagamentos` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
  `forma_de_pagamento` varchar(255) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `moeda` varchar(3) NOT NULL,
  `status` varchar(255) NOT NULL,
  `data` DATE,
  `descricao` text,
   PRIMARY KEY (id)
  );
```