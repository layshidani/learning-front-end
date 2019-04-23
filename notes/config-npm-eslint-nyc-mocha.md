# Configuração npm init, eslint, testes com mocha, nyc, chai
Requisitos: **Node** e **npm** instalados.

---
Em todas as instalações a seguir, você poderá optar por instalar globalmente ou local:

* global: `npm i -g nome-do-pacote`
* local: `npm i nome-do-pacote --save-dev` 

***No caso de incluir `--save`, as regras dos pacotes já serão automaticamente adicionadas no arquivo package.json.***

---

## criar arquivo .gitignore
Há 2 opções:

**Manualmente:**
inclua **node_modules** no arquivo ***.gitignore***

**NPM gitignore**
instalar pacote:
`npm install gitignore -g` (pode ser necessário acrescentar `sudo` no início do código)

listar tipos:
`gitignore -types`

Por exemplo, escolhemos o Node (para trabalhar com JS):

para criar o arquivo gitignore, digite no terminal:
`gitignore Node`

---

## iniciar npm
`npm init`

responder todas as perguntas do terminal para criar o arquivo package.json

*é possível editar ou inserir dados no próprio arquivo package.json manualmente a qualquer momento.*

## instalar eslint (local)
[eslint](https://www.npmjs.com/package/eslint)

instalar local:

`npm install eslint --save-dev`

### configurar eslint
Você pode rodar o comando local:

`./node_modules/eslint/bin/eslint.js --init `

ou 

global: 

`eslint --init`

Em seguida,

Responder todas as perguntas na linha de comando a respeito do seu projeto, ele irá criar automaticamente o arquivo **.eslintrc.js** para o seu projeto.

*se faltar alguma **rule**, é possível adicionar/editar no próprio arquivo .eslintrc.js manualmente a qualquer momento.*

### Rodar Eslint
Sempre que quiser rodar o eslint para verificar se o projeto está de acordo com os padrões de estilo:

Local: 

`./node_modules/.bin/eslint seu-arquivo.js`

ou 

Global:

`eslint seu-arquivo.js`

## corrigir com --fix
Alguns tipos de erro podem ser corrigidos automaticamente pelo terminal, ao rodar o eslint:
`eslint seu-arquivo.js --fix` ou 
`./node_modules/.bin/eslint seu-arquivo.js --fix`

* nas regras (rules): 1 = warning, 2 = error
<!-- ## instalar prettier (opcional)
O prettier corrige seu código para os padrões do eslint configurado.
`npm install prettier --save-dev`

### criar arquivo prettier

***.prettierrc***

add configurações no arquivo:

```
{
  "singleQuote": true
}
``` -->
---
## Preparar/exportar arquivo principal para testes

### exportar a função principal (de teste) no arquivo index.js

```
module.exports = nome-da-função;
```

Ex:

```
module.exports = cpfValidator;
```

---
# Testes com nyc e mocha
Depois de configurar e instalar corretamente conforme explicado nas etapas abaixo, para rodar os testes digite na linha de comando:

`nyc mocha`

ou 

`npm run test`

o resultado será exibido no terminal.

## instalar mocha
[mocha](https://www.npmjs.com/package/mocha)

instalar global:

`npm i -g mocha`

instalar local:

`npm i --save-dev mocha`

## instalar chai
`npm i -g chai`

> Chai is an assertion library, similar to Node's built-in assert. It makes testing much easier by giving you lots of assertions you can run against your code. [Chai](https://www.chaijs.com/)


## instalar nyc
O nyc vai mostrar a percentagem do seu código que está sendo coberta pelos testes que você desenvolveu.

[nyc](https://www.npmjs.com/package/nyc)

instalar local:

`npm i --save-dev nyc`

## configurar seu arquivo package.json para os testes com nyc mocha
* caso não tenha instalado com --save
Inclua este trecho *("test": "nyc mocha")* no seu package.json:
```
"scripts": {
    "test": "nyc mocha",
    "format": "prettier"
},
```

### criar pasta **test** com o arquivo de teste 

O arquivo deverá ter o mesmo nome do arquivo principal (index) adicionado `.spec.js`:

`index.spec.js`

- No arquivo `index.spec.js` incluir o código:

```
const { assert } = require('chai');
const nome_da_função_que_deseja_testar = require('../nome_do_arquivo');
```

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


*********
## Hooks com Husky (opicional)

*********
---
Outra alternativa de testes:

# Testes com Jest
Depois de configurar e instalar corretamente conforme explicado nas etapas abaixo, para rodar os testes digite na linha de comando:

`npm run test`

## instalar jest

[jest.js](https://jestjs.io/docs/en/getting-started)

`npm install --save-dev jest`

## configurar seu arquivo package.json para os testes com jest

Inclua este trecho *("test": "jest")* no seu package.json:
```
"scripts": {
    "test": "jest",
    "format": "prettier"
},
```

### criar arquivo de teste com mesmo nome do arquivo principal (index)

`index.test.js`

- No arquivo `index.test.js` incluir o código:

```
const nome_da_função_que_deseja_testar = require('./nome_do_arquivo');

test('Breve descrição', () => {
  expect(nome_da_função_que_deseja_testar(valor-para-testar)).toBe(resultado-esperado);
});
```

Ex:

```
const cpfValidator = require('./index');

test('CPF 12345678909', () => {
  expect(cpfValidator('12345678909')).toBe(true);
});

test('CPF 00000000', () => {
  expect(cpfValidator('00000000')).toBe(false);
});
```

### execultar o teste

Para execultar o teste, digite na linha de comando:

`npm run test`

o resultado será exibido no terminal.
