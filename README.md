# Teste Seleção DESENVOLVEDOR JAVA

> Uma API que faz o cadastro de pessoas e uma front-end que consome esta API escrito usando Angular7

Uma API no padrão REST criada para cadastrar pessoa em um DB, essa API é consumida atraves de serviços via HTTP.

## Instalação

para o front-end

```sh

npm install

```

para api usar um servidor de aplicação java.

Para acessar o banco de dados basta checar o aquivo application.properties

e configurar suas entradas do seu banco com usuário e senha

## Exemplo de uso

O endpoint principal esta em 'http://localhost:8080/pessoas' onde os serviços podem ser acessados a partir dos

metodos GET, POST, PUT e DELETE para manipulação da API

## Configuração para Desenvolvimento

As dependecias da API são instaladas via maven a partir do POM.xml

As dependecias do frontend são instaladas via npm/yarn a partir do package.json

comandos de instalação frontend:

```sh
npm install
yarn install
```

para levantar o frontend basta apenas ter AngularCLI instalado

Documentação Angular [https://angular.io/guide/setup-local](https://angular.io/guide/setup-local) com o comando
```sh
ng serve --open
```

## Contato

Wendel Henrique S. Santos – [https://github.com/ricksantos88](https://github.com/ricksantos88) – henrique.santos1988@gmail.com
