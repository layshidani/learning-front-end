# Ferramentas de Teste: mocha, chai e nyc
Confira neste [link](https://github.com/hlays/learning-front-end/tree/master/notes/testes-tdd/testes-instalacoes.md/) como instalar os pacotes necessários e preparar os arquivos.

* Mocha: estrutura de testes
* Chai: biblioteca de assertações
* Nyc: cobertura dos testes

## Table of Contents
* [Mocha](#mocha)
* [Nyc - Istanbul](#nyc-(istanbul)---teste-de-cobertura-do-código)
  * [Resultado dos testes de cobertura](#resultado-dos-testes-de-cobertura)
* [Chai](#chai)
  * [Assertion Styles](#assertion-styles)
    * [should style](#should-style)
    * [expect style](#expect-style)
    * [assert style](#assert-style)
  * [Criando testes](#criando-testes)
    * [Describe](#describe)
    * [Context](#context)
    * [It](#it)
  * [Snipet de teste](#snipet-de-teste)

# Mocha
> O Mocha é uma estrutura de teste JavaScript rica em recursos em execução no Node.js e no navegador, tornando os testes assíncronos simples e divertidos. [<Mocha\>](https://mochajs.org/)

[Getting Started](https://mochajs.org/#getting-started)

# Nyc (Istanbul) - teste de cobertura do código 
> Istambul instrumenta seu código ES5 e ES2015 + JavaScript com contadores de linha, para que você possa acompanhar o desempenho de seus testes de unidade na sua base de código.
>
> O cliente de linha de comando ***nyc*** para Istambul funciona bem com a maioria das estruturas de teste JavaScript [<Istanbul\>](https://github.com/istanbuljs/nyc)

## Resultado dos testes de cobertura

> * **Stmts (statements)**: Cada declaração do programa foi executada?
> * **Branch**: Cada ramificação (também chamada de DD-path) de cada estrutura de controle (como em if e case statements) foi executada? Por exemplo, dada uma instrução if, os dois ramos true e false foram executados? Outra maneira de dizer isso é que todas as arestas do programa foram executadas?
> * **Funcs (Functions)**: Cada função (ou sub-rotina) do programa foi chamada?
> * **Lines**: cada linha executável no arquivo de origem foi executada?
>
> Também fornece alguns códigos de cores: 
> * Rosa: declarações não cobertas.
> * Laranja: funções não cobertas.
> * Amarelo: ramos não cobertos.
> 
> [<stackoverflow\>](https://stackoverflow.com/questions/26618243/how-do-i-read-an-istanbul-coverage-report)

# Chai
> Chai é uma biblioteca de asserções, semelhante à declaração interna do Node. Isso torna o teste muito mais fácil, oferecendo várias asserções que você pode executar em seu código. [<Chai\>](https://www.chaijs.com/)

O *asserts* do chai, podem ser feitos com:
* [should](https://www.chaijs.com/guide/styles/#should)
* [expect](https://www.chaijs.com/guide/styles/#expect)
* [assert](https://www.chaijs.com/guide/styles/#assert)

## Assertion Styles

### Should style
[Snipet](https://www.chaijs.com/guide/styles/#should):

```js
var should = require('chai').should() //actually call the function
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);

```

### Expect style
[Snipet](https://www.chaijs.com/guide/styles/#expect):

```js
var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);

```

### Assert style
[Snipet](https://www.chaijs.com/guide/styles/#expect):

```js
var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

```

# Criando testes
## Describe 

Utilizados para agrupamento (coleção de testes), podem ser aninhados dentro de outros **describe**. Comumente utilizado para separar classes ou métodos.
  ```js
  describe('Descrição', () => {
    // coleção de testes
  });
  ```
## Context
Utilizado para separar os casos de teste...o contexto.

```js
  describe('Descrição', () => {
    context('Contexto', () => {
      // coleção de testes
    });
  });
```

## It
Lembre desta frase:
*"It should happen ... when/to ..."*

Ex:

```js
  describe('Descrição', () => {
    context('Contexto', () => {
      // coleção de testes
      it('should happen ... when ...', () => {});
      it('should happen ... when ...', () => {});
      it('should happen ... when ...', () => {});
    });
  });
```

## Snipet de teste
Abaixo um exemplo de teste para um validador de cartão de crédito:

```js
const { assert } = require('chai');
const cardValidator = require('../index');

describe('Validador de cartão de credito', () => {
  describe('Deve retornar true para cartoes validos:', () => {
    it('Mastercard - Deve retornar true para 5374661040114189', () => {
      assert.equal(cardValidator('5374661040114189'), true);
    });
    it('Visa - Deve retornar true para 4556398657023626', () => {
      assert.equal(cardValidator('4556398657023626'), true);
    });
    it('Elo - Deve retornar true para 6363688326577129', () => {
      assert.equal(cardValidator('6363688326577129'), true);
    });
  });

  describe('Deve retornar false para cartoes invalidos:', () => {
    it('Vazio - Deve retornar false ', () => {
      assert.equal(cardValidator.cardValidator(''), false);
    });
    it('Qtd de digitos inválida - Deve retornar false para 123456', () => {
      assert.equal(cardValidator.cardValidator('123456'), false);
    });
    it('Numeros e letras - Deve retornar false para 1sd2d3456', () => {
      assert.equal(cardValidator.cardValidator('1sd2d3456'), false);
    });
  });
});
```

## Reporters
Há diversas formas de reportar os testes, visite a [documentação](https://mochajs.org/#reporters) para obter exemplos e lista completa.

Lista de reporters:

```bash
mocha -- --reporters
```

Para rodar um reporter:
```bash
mocha -- --reporter=<nome-do-reporter>
```

ex reporter de gatinho:
```bash
mocha -- --reporter=nyan
```

### Reporter com coverage e html
Um reporter muito útil é o html do nyc. Ele irá gerar um relatório detalhado em html que poderá ser acessado via browser:

* [Alternative Reporters](https://istanbul.js.org/docs/advanced/alternative-reporters/)
* [Nyc Mocha - documentação ](https://istanbul.js.org/docs/tutorials/mocha/)

Alternativa 1:
Automatize incluindo no **package.json** o alias direto no teste:

```json
{
  "scripts": {
    "test": "nyc --reporter=html --reporter=text mocha"
  }
}
```

Então, toda vez que você rodar o comando:
```bash
npm test
```

Ele cria/atualiza uma pasta chamada **coverage** com todos os arquivos do reporter, basta abrir o html no seu navegador:
![coverage html example](imgs/coverage.png)

Existem diversas outras alternativas, que geram o mesmo resultado, tudo depende de como você deseja organizar seu código e seus testes. 

Uma outra alternativa seria:

```json
"scripts": {
  "test": "./node_modules/.bin/mocha tests/**/*.spec.js",
  "test:coverage": "nyc npm test"
},
"nyc": {
  "reporter": [
    "html"
  ],
  "exclude": [
    "tests/**"
  ]
},
```

Neste caso, temos um comando só para verificar a cobertura de testes.

Rodamos: 
```bash
npm run test:coverage
```

e teremos os arquivos gerados/atualizados na pasta **coverage**.

## Testes: comandos skip, only, bail
TODO comandos

## Testes: Hooks
TODO hooks
