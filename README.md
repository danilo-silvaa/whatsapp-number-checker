
# API de Verificação de Número no WhatsApp

Uma API simples para verificar a existência de um número de telefone no WhatsApp.

## Tecnologias Utilizadas

-   Nodejs
-   whatsapp-web.js
-   Express

## Contribuições

Contribuições são bem-vindas! Se você encontrar problemas ou tiver melhorias a sugerir, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Endpoints da API

- [Exibir o código QR do WhatsApp](#exibir-o-código-QR-do-WhatsApp)
- [Checar existência de número](#checar-existência-de-número)

## Exibir o código QR do WhatsApp

* **URL**

  `/qr`

* **Método**

  `GET`

* **Retornos**
  
  **Status Code:** 200
  
    ```html
    <img src="data:image/png;base64,..." />
    ```
	
  **Status Code:** 200
  
    ```
    O cliente WhatsApp já está logado. Não é necessário código QR.
    ```
    
  **Status Code:** 200
  
    ```
    QR code não disponível. Tente novamente mais tarde.
    ``` 

## Checar existência de número

* **URL**

  `/api/check`

* **Método**

  `GET`

* **Parâmetros**

    | Atributo   | Tipo do dado   | Descrição                                  | Obrigatório     |
    |------------|----------------|------------------------------------------- |-----------------|
    | number     | string         | Número de telefone a ser verificado		   | sim             |

* **Retornos**
  
  **Status Code:** 200
  
    ```json
	{
	  "exists": true
	}
    ```
	
  **Status Code:** 404
  
    ```json
	{
	  "exists": false
	}
    ```
    
  **Status Code:** 503
  
    ```json
	{
	  "error": "WhatsApp client is not ready. Please try again later."
	}
    ``` 
-----