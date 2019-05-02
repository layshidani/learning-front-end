# Biblioteca JS configuração: npm init, eslint, testes com mocha, nyc, chai, publicação no npm
Requisitos: **Node** e **npm** instalados.
Navegue com o terminal até a pasta principal do projeto para executar as instalações locais e/ou rodar os pacotes.

---
Em todas as instalações a seguir, você poderá optar por instalar globalmente e local, ou somente local:

* global: `npm i -g nome-do-pacote`
* local: `npm i nome-do-pacote --save-dev  // ou --save` 

  Onde:
  * `--save-dev`: é usado para salvar o pacote para fins de desenvolvimento. Exemplo: testes unitários,minificação
  * `--save`: é usado para salvar o pacote necessário para o aplicativo ser executado.

***No caso de incluir `--save-dev` ou `--save`, as regras dos pacotes já serão automaticamente adicionadas no arquivo package.json em devDependencies (--save-dev) e Dependencies (--save).***

*salvar global (pc)/local(no próprio projeto)*

<!-- ?emconstrução add npm i | --production -->

## Verificar se pacote está instalado ou versão instalada

`npm -v nome-do-pacote`



## criar arquivo .gitignore
Há 2 opções:

1.**Manualmente:**
criar arquivo .gitignore,

depois inclua **node_modules** no arquivo ***.gitignore***

ou

2.**NPM gitignore**
instalar pacote:
`npm install gitignore -g` (pode ser necessário acrescentar `sudo` no início do código)

listar tipos:
`gitignore -types`

Por exemplo, escolhemos o Node (para trabalhar com JS):

para criar o arquivo gitignore, digite no terminal:
`gitignore Node`



## iniciar npm
`npm init`

responder todas as perguntas do terminal para que o npm crie o arquivo package.json com todas essas informações sobre o projeto.

*caso queira pular essas perguntas e criar um arquivo package.json e configurar depois, inclua `-y` ao rodar o comando acima:* `npm init -y`

*é possível editar ou inserir dados no próprio arquivo package.json manualmente depois a qualquer momento.*

## instalar eslint (local)
[eslint](https://www.npmjs.com/package/eslint)

instalar local:

`npm install eslint --save-dev`

### configurar eslint
Você pode rodar o comando local:

`./node_modules/eslint/bin/eslint.js --init `

Em seguida,

Responder todas as perguntas na linha de comando a respeito do seu projeto, ele irá criar automaticamente o arquivo **.eslintrc.js** para o seu projeto.

*se faltar alguma **rule**, é possível adicionar/editar no próprio arquivo .eslintrc.js manualmente a qualquer momento.*

### Rodar Eslint
Sempre que quiser rodar o eslint para verificar se o projeto está de acordo com os padrões de estilo:

Global:

`eslint seu-arquivo.js`

ou 

Local: 

`./node_modules/.bin/eslint seu-arquivo.js`

#### Alias para rodar Eslint local
Ao invés de ter que digitar o comando `./node_modules/.bin/eslint seu-arquivo.js` toda vez que quiser rodar o eslint, é possível gravar um *alias*. Basta incluir o comando em **scripts** em seu arquivo package.json: `"alias": instrução` 

```
"scripts": {
    "alias": "./node_modules/.bin/eslint nome-do-seu-arquivo.js" // inclua aqui
  },
```

Exemplo:

```
"scripts": {
    "test": "nyc mocha",
    "format": "prettier",
    "eslint": "./node_modules/.bin/eslint index.js" // inclua aqui
  },
```

Depois, sempre que quiser rodar o eslint, basta chamar pelo alias:

ex:

`npm run eslint`


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

## Preparar/exportar arquivo
necessário para rodar no node e fazer os testes.

### exportar as funções (de teste) no arquivo index.js

```
module.exports.nome-da-função = nome-da-função;
```

Ex:

```
module.exports.cpfValidator = cpfValidator;
```


# Testes com nyc e mocha
Depois de configurar e instalar corretamente conforme explicado nas etapas abaixo, para rodar os testes digite na linha de comando:

`nyc mocha`

ou 

`npm run test`

o resultado será exibido no terminal.

## instalar mocha
[mocha](https://www.npmjs.com/package/mocha)


instalar local:

`npm i --save-dev mocha`

## instalar chai
> Chai is an assertion library, similar to Node's built-in assert. It makes testing much easier by giving you lots of assertions you can run against your code. [Chai](https://www.chaijs.com/)

Para instalar:

`npm i --save-dev chai`


## instalar nyc (teste de cobertura)
O nyc vai mostrar a percentagem do seu código que está sendo coberta pelos testes que você desenvolveu.

[nyc](https://www.npmjs.com/package/nyc)

instalar local:

`npm i --save-dev nyc`

## Criar alias no arquivo package.json para os testes com nyc mocha
Da mesma forma como fizemos com o eslint, também pode ser criado um alias para o teste:

exemplo:

Inclua este trecho *("test": "nyc mocha")* no seu package.json:
```
"scripts": {
    "test": "nyc mocha",
    "format": "prettier"
},
```

### criar pasta **tests** com o arquivo de teste 

O arquivo deverá ter a extensão: `.spec.js`.

exemplo:

`index.spec.js`

Você poderá fazer os testes com **should**, **assert** ou com **expect**:

### testes com assert
Temos que importar as funções que desejamos testar. 

No arquivo de testes (ex `index.spec.js`) incluir o código:

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


<!-- *********
## Hooks com Husky (opicional)

...
********* -->

# Publicar a lib

Quando todo o código estiver completo e funcionando adequadamente, podemos publicar a lib no npm. Certifique-se de ter se cadastrado corretamente no [site](https://www.npmjs.com/).

## Git e Github

* o Projeto estando revisado e todo completo, faça o commit de tudo
* (recomendado) adicione uma tag de versão com: `git tag versão` (ex: `git tag v1.0.0`)
* faça push

## Configurar usuário do npm no projeto:

`npm adduser`

## Publicar

`npm publish`

* A biblioteca precisa ter um nome único (sem camelcase, pode usar hífen)

Agora sua biblioteca está pronta e publicada no npm.

## Novas versões
Sempre que houverem alterações no código (até mesmo no readme), você terá que:

* modificar a versão no arquivo **package.json**
* fazer todos os passos de commitar, inserir tag, fazer push 
* publicar novamente.

## Sobre versões

* Patch (v1.0.x): correção pequena, bug resolvido, etc
* Minor (v1.x.0): implementação de feature menor/secundária
* Major (vx.0.0): implementação de feature importante



<!-- Outra alternativa de testes:

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

o resultado será exibido no terminal. -->
