# Dependencias
 ``` npm install express --save ```

 ``` npm install consign --save ```

 ``` npm install body-parser --save ```

 ``` npm install --save mysql ```

 ``` npm install express-validator --save ```

 ``` npm install --save restify-clients ```

``` npm install --save nodemon```

# Postman

* Para realizar um POST de pagamento as configuração abaixo devem ser inseridas no POSTMAN.

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