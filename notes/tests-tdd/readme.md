# Testes com mocha, chai e nyc
Confira neste [link](https://github.com/hlays/learning-front-end/tree/master/notes/testes-tdd/testes-instalacoes.md/) como instalar as bibliotecas necessárias e preparar os arquivos.

# Mocha
> O Mocha é uma estrutura de teste JavaScript rica em recursos em execução no Node.js e no navegador, tornando os testes assíncronos simples e divertidos. --[Mocha](https://mochajs.org/)

[Getting Started](https://mochajs.org/#getting-started)

# Chai
> Chai é uma biblioteca de asserções, semelhante à declaração interna do Node. Isso torna o teste muito mais fácil, oferecendo várias asserções que você pode executar em seu código. --[Chai](https://www.chaijs.com/)

O *asserts* do chai, podem ser feitos com:
* [should](https://www.chaijs.com/guide/styles/#should)
* [expect](https://www.chaijs.com/guide/styles/#expect)
* [assert](https://www.chaijs.com/guide/styles/#assert)

## chai - should 
[Snipet](https://www.chaijs.com/guide/styles/#should):

```
var should = require('chai').should() //actually call the function
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);

```

## chai - expect 
[Snipet](https://www.chaijs.com/guide/styles/#expect):

```
var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);

```

## chai - assert
[Snipet](https://www.chaijs.com/guide/styles/#expect):

```
var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

```

## Nyc: Resultado dos testes de cobertura 
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