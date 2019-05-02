# Testes com nyc e mocha
Depois de configurar e instalar corretamente conforme explicado nas etapas abaixo, para rodar os testes digite na linha de comando:

`nyc mocha`

ou 

`npm run test`

o resultado será exibido no terminal.

## criar pasta **test** com os arquivos de teste 

O arquivo deverá ter a extensão `.spec.js`:

ex: 
`index.spec.js`

## instalar mocha
[mocha](https://www.npmjs.com/package/mocha)

instalar global:

`npm i -g mocha`

instalar local:

`npm i --save-dev mocha`

## instalar chai
`npm i -g chai`

> Chai is an assertion library, similar to Node's built-in assert. It makes testing much easier by giving you lots of assertions you can run against your code. [Chai](https://www.chaijs.com/)


## Teste de cobertura - nyc
O nyc vai mostrar a percentagem do seu código que está sendo coberta pelos testes que você desenvolveu.

[nyc](https://www.npmjs.com/package/nyc)

### Instalar nyc

instalar local: `npm i --save-dev nyc`


## configurar seu arquivo package.json para os testes com nyc mocha
* é possível automatizar sua chamada de testes criando um alias:

```
"scripts": {
    "test": "nyc mocha",
    "format": "prettier"
},
```
Adicionar o nyc no *package.json* com as regras que desejar:

Por exemplo:

```
  "nyc": {
    "functions": 90, // exige 90% de cobertura das funções
    "lines": 90, // exige 90% de cobertura de linhas
    "check-coverage": true, 
    "reporter": ["text", "html"],
    "exclude": ["test/**"]
  },
```

Onde, 
* `reporter`: gera um diretório **coverage** onde é salvo um relatório html detalhado sobre o teste de cobertura;
* `exclude`: exclui determinado arquivo ou diretório das verificações.


Você poderá fazer os testes com **assert** ou com **expect**:

### testes com assert

- No arquivo `index.spec.js` incluir o código:

```
const { assert } = require('chai');
const nome_da_função_que_deseja_testar = require('../nome_do_arquivo');
```
*no último `require()` é o endereço do arquivo de testes até seu arquivo js principal.*

Ex:

```
const { assert } = require('chai');
const cpfValidator = require('../index');
```

### criar testes
Crie os testes em seu arquivo index.spec.js:

```
describe('descrição do teste', () => {
  it('descrição/o que você está testando..', () => {
    assert.equal(nome-da-função('valor-teste'), resultado-esperado);
  });
});

```

Ex:

```
// no arquivo index.spec.js

describe('Validador de CPF', () => {
  describe('Deve retornar true para CPFs válidos:', () => {
    it('12345678909', () => {
      assert.equal(cpfValidator('12345678909'), true);
    });
  });

  describe('Deve retornar false para CPFs inválidos:', () => {
    it('9 dígitos iguais como 00000000000', () => {
      assert.equal(cpfValidator('000000000'), false);
    });
  });
});

```

* Para rodar os testes, rode o comando `npm run test` ou `nyc mocha`. O resultado dos testes aparecerá no terminal.


### testes com expect

- No arquivo `index.spec.js` incluir o código:

```
const chai = require("chai");
const expect = chai.expect;
const nome_da_função_que_deseja_testar = require("../nome_do_arquivo")
```
*no `require()` é o endereço do arquivo de testes até seu arquivo js principal.*

Ex:

```
let chai = require("chai");
let expect = chai.expect;
let Chess = require("../lib/chess-lib")
```

Agora adicione os testes com expect:
```
expect().to.equal();
```

ex:
```
describe('Chess lib', () => {
    it('Rainha ganha de peão', () => {
        expect(Chess.chessBattle("rainha", "peao").to.equal("rainha"))
    });
})

```

* Para rodar os testes, rode o comando `npm run test` ou `nyc mocha`. O resultado dos testes aparecerá no terminal.

### Resultado dos testes de cobertura
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
> --[stackoverflow](https://stackoverflow.com/questions/26618243/how-do-i-read-an-istanbul-coverage-report)