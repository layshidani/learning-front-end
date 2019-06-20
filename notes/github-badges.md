# GitHub Badges

## Travis (testes)
> O Travis CI é um serviço de integração contínua hospedado, usado para criar e testar projetos de software hospedados no GitHub. Projetos open source podem ser testados sem custo via travis-ci.org. Projetos privados podem ser testados em travis-ci.com com base em honorários.  --[Wikipedia](https://en.wikipedia.org/wiki/Travis_CI)

[Site](https://travis-ci.org/)

[Documentação](https://docs.travis-ci.com/)

No site:
* Crie uma conta no Travis usando seu GitHub.
* Clique em `+` **add new Repository** no site do Travis.
* Pesquise o nome do repositório desejado e clique para ligar.

Em seguida,

No seu projeto:
* Crie um arquivo `.travis.yml`.
* Adicione as configurações necessárias. Veja a documentação para verificar as configurações para cada linguagem:
  Para [JavaScript com Node](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/), por exemplo:
  ```
  language: node_js
  node_js:
    - "7"
  language: node_js
  node_js:
    - "7"
  cache:
    directories:
      "node_modules"

  before_script:
    - npm run test

  after_success:
    - npm run coveralls
  ```
* Atualize o repositório no GitHub (push)
* Confira no site Travis o building e testes, lá você também encontrará a badge com atualização dinâmica (com seu github) para colocar em seu README:

Código:
```md
[![Build Status](https://travis-ci.org/layshidani/lab-cpf-validator.svg?branch=master)](https://travis-ci.org/layshidani/lab-cpf-validator)
```

Resultado: [![Build Status](https://travis-ci.org/layshidani/lab-cpf-validator.svg?branch=master)](https://travis-ci.org/layshidani/lab-cpf-validator)

## Coveralls
> Coveralls is a web service to help you track your code coverage over time, and ensure that all your new code is fully covered.
> [Documentação](https://docs.coveralls.io/)

Em seu projeto:
* Instale o node Coveralls (para trabalhar com node/js , ou acesse o site para verificar qual a melhor opção para o seu caso):
  ```$
  npm i -D coveralls
  ```
* Adicione um comando coveralls ao seus scripts no arquivo **package.json**:
  ```json
  "scripts": {
      "lint": "./node_modules/.bin/eslint lib/index.js",
      "test": "mocha",
      "test:coverage": "nyc npm test",
      "coveralls": "npm run test:coverage && nyc report --reporter=text-lcov | coveralls" // add este comando
    },
  ```
* Atualize o repositório no GitHub (push)

No site do Coveralls:
* Crie uma conta no Coveralls usando seu GitHub.
* Clique em `+` **add Repository** no site do Coveralls.
* Pesquise o nome do repositório desejado e clique para ligar (turn on).
* Ao ligar, irá aparecer o botão ***Details***, clique nele (ou navegue até seu repositório na aba Repos).
* Copie a **repo_token**

Em seguida,
* Vá até o site do Travis, procure o repositório correspondente
* Vá até **Settings**
* Vá até a seção **Environment Variables**
* Em **name** adicione: repo_token
* Em **value** adicione: a chave que você copiou no site do Coveralls
* Clique em **add**


* Confira no site Coveralls, lá você também encontrará a badge com atualização dinâmica (com seu github) dos testes de cobertura para colocar em seu README:

Código:
```md
[![Coverage Status](https://coveralls.io/repos/github/layshidani/lab-cpf-validator/badge.svg?branch=master)](https://coveralls.io/github/layshidani/lab-cpf-validator?branch=master)
```

Resultado: [![Coverage Status](https://coveralls.io/repos/github/layshidani/lab-cpf-validator/badge.svg?branch=master)](https://coveralls.io/github/layshidani/lab-cpf-validator?branch=master)

## Badge de versão
Você pode criar uma badge que acompanha as versões de publicação que estão em seu ***package.json***.

Vá até o site [Shields](https://shields.io/category/version), navegue até a opção *GitHub package.json version*, preencha as informações sobre seu nome de usuário e nome do repositório
* Selecione em *Copy badge URL* logo abaixo a url em Markdown:

```md
![GitHub package.json version](https://img.shields.io/github/package-json/v/layshidani/lab-cpf-validator.svg)
```

![GitHub package.json version](https://img.shields.io/github/package-json/v/layshidani/lab-cpf-validator.svg)

## Mais Badges
No site [Shields](https://shields.io/category/version), você encontra diversas outras opções de badges estáticas e dinâmicas personalizáveis.
