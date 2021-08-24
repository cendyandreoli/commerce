[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)
[![npm version](https://badge.fury.io/js/node.svg)](https://badge.fury.io/js/node)

# And-commerce

Projeto para estudo e evolução utilizando as melhores práticas de aprendizagem, com Javascript e Nodejs

## Prerequisitos

Este projeto requer NodeJS (versão 12 ou posterior) e NPM.
[Node] (http://nodejs.org/) e [NPM] (https://npmjs.org/) são realmente fáceis de instalar.
Para garantir que você os tenha disponíveis em sua máquina,
tente executar o seguinte comando em seu terminal.

```sh
$ npm -v && node -v
5.6.0
v8.16.0
```

## Guia rápido

- [And-commerce](#and-commerce)
  - [Prerequisitos](#prerequisitos)
  - [Guia rápido](#guia-rápido)
  - [Começando](#começando)
  - [Instalação](#instalação)
    - [Configurando o ambiente](#configurando-o-ambiente)
    - [Rodando a aplicação](#rodando-a-aplicação)
    - [Rodando os testes](#rodando-os-testes)
    - [Gerando uma versão de build](#gerando-uma-versão-de-build)
    - [Servindo a versão de distribuição](#servindo-a-versão-de-distribuição)
  - [Contruibuindo](#contruibuindo)
  - [Creditos](#creditos)
  - [Versionamento](#versionamento)
  - [Authores](#authores)
  - [Licença](#licença)

## Começando

Essas instruções fornecerão uma cópia do projeto instalado e funcionando em sua 
máquina local para fins de desenvolvimento e teste. 
Consulte implantação para obter notas sobre como implantar o projeto em um sistema ativo.

## Instalação

**ANTES DE INSTALAR:** leia os [prerequisitos](#prerequisitos)

Comece clonando esse projeto na sua máquina local.

```sh
$ git clone https://github.com/cendyandreoli/commerce
$ cd commerce
```

Para instalar as dependências, rode:

```sh
$ npm install
```

Ou caso prefira usar o Yarn:

```sh
$ yarn add
```

### Configurando o ambiente

Para configurar o ambiente é necessário renomear o arquivo `.env.example` para `.env`

Em seguida adicione suas configurações

*Nota* o arquivo `.env` está no gitignore e nunca será enviado ao repositório, existindo
apenas no seu ambiente de desenvolvimento

### Rodando a aplicação

verifique se o ambiente está configurado em [Configurando a aplicação](#gerando-uma-versão-de-build)

```sh
$ npm start
```

Ou caso queira usar o nodemon para live reload instale:

```sh
$ npm i -g nodemon
```

em seguida:

```sh
$ nodemon index.js
```

### Rodando os testes

```sh
$ npm test
```

### Gerando uma versão de build

```sh
$ npm run build
```

Esta tarefa criará uma versão de distribuição do projeto
dentro de sua pasta local `dist /`

### Servindo a versão de distribuição

```sh
$ npm run serve:dist
```

Isso usará `lite-server` para servir sua versão de distribuição já gerada do projeto.

*Nota* esses requisistos
[Gerando uma versão de build](#gerando-uma-versão-de-build) primeiro.


## Contruibuindo

Leia [CONTRIBUTING.md] (CONTRIBUTING.md) para obter detalhes sobre nosso código de conduta e o processo de envio de solicitações pull para nós.

1.  Faça um fork no projeto!
2.  Crie sua feature branch: `git checkout -b nome-da-sua-branch`
3.  Adicione suas modificações: `git add .`
4.  Commit suas modificações: `git commit -am 'Texto do commit'`
5.  Envie sua branch: `git push --set-upstream origin nome-da-sua-branch`
6.  Envie sua pull request e preencha o template :sunglasses:

## Creditos

[Cendy Andreoli](https://github.com/cendyandreoli)
[Jessica Andreoli](https://github.com/jessicaandreoli)

## Versionamento

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, consulte as [tags on this repository](https://github.com/your/project/tags).

## Authores

* **Cendy Andreoli** - *Initial work* - [Cendy Andreoli](https://github.com/cendyandreoli)

Veja a lista de [contribuidores](https://github.com/cendyandreoli/commerce/network/dependencies) que participaram do projeto.

## Licença

[MIT License](https://andreasonny.mit-license.org/2019) © Cendy Andreoli