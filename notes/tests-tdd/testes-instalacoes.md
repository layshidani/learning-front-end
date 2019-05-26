# Testes: instalações de mocha, chai e nyc

Requisitos: **Node** e **npm** instalados.
Navegue com o terminal até a pasta principal do projeto para executar as instalações locais e/ou rodar os pacotes.

As instalações serão feitas através do **npm**.

Lembrando que:

Em todas as instalações a seguir, você poderá optar por instalar globalmente e local (com --save ou --save-dev) ou só local (--save ou --save-dev):
*salvar global (pc)/local(no próprio projeto)*

* `--save-dev`: é usado para salvar o pacote para fins de desenvolvimento. Exemplo: testes unitários,minificação.
* `--save`: é usado para salvar o pacote necessário para o aplicativo ser executado.

Instalação:
* global: `npm install global <nome-do-pacote>`
  (ou utilizando flags: `npm i -g <nome-do-pacote>`)
* local (desenvolvimento): `npm install <nome-do-pacote> --save-dev`
  (ou utilizando flags: `npm i -D <nome-do-pacote>`)
* local (para execução): `npm install <nome-do-pacote> --save`
  (ou utilizando flags: `npm i -S <nome-do-pacote>`)

***No caso de incluir `--save-dev` ou `--save`, as regras dos pacotes já serão automaticamente adicionadas no arquivo package.json em devDependencies (--save-dev) e Dependencies (--save).***

# Links úteis

* [documentação npm](https://docs.npmjs.com/)
* [artigo sobre --save e --save-dev](https://blog.da2k.com.br/2015/03/03/gerenciando-corretamente-dependencias-em-nodejs-save-ou-save-dev-1/)

**Nas nossas instalações abaixo, vamos instalar como dependência de desenvolvimento, uma vez que utilizaremos os testes geralmente, só na fase de desenvolvimento**

## Verificar se pacote está instalado ou versão instalada
Para verificar se um pacote está instalado ou a versão do mesmo:

`npm -v nome-do-pacote`

## Instalar mocha
[mocha](https://www.npmjs.com/package/mocha)

instalar local:

`npm i -D mocha`

## Instalar chai
> Chai is an assertion library, similar to Node's built-in assert. It makes testing much easier by giving you lots of assertions you can run against your code. [Chai](https://www.chaijs.com/)

instalar local:

`npm i -D chai`

## Instalar nyc (Istanbul)
O nyc vai mostrar a percentagem do seu código que está sendo coberta pelos testes que você desenvolveu.

[nyc](https://www.npmjs.com/package/nyc)

instalar local:

`npm i -D nyc`

## Alias para rodar os testes
Basta incluir o comando em **scripts** em seu arquivo package.json:
```
"scripts": {
    "alias": instrução,
},
```

Inclua este trecho *("test": "nyc mocha")* no seu package.json:

exemplo:
```
"scripts": {
    "test": "nyc mocha",
},
```

# Preparar arquivos para os testes
* Criar pasta **tests** com os arquivos de testes
* Os arquivos de teste deverão ter a extensão `.spec.js` exemplo: `index.spec.js`
* **exportar** as funções necessárias do seu __arquivo principal__
* **importar** essas funções no seu __arquivo de testes__

Para mais detalhes sobre como importar ou exportar acesse esse [link](https://github.com/layshidani/learning-front-end/tree/master/notes/import-export/).



