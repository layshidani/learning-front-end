# Módulos
> Bons autores dividem seus livros em capítulos e seções; bons programadores dividem seus programas em módulos.
> Como um capítulo de livro, os módulos são apenas conjuntos de palavras (ou código, conforme o caso).
> Bons módulos, no entanto, são altamente auto-contidos com funcionalidades distintas, permitindo que sejam embaralhadas, removidas ou adicionadas conforme necessário, sem interromper o sistema como um todo. --[artigo](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.b592lxm37)

# Webpack
[Documentação](https://webpack.js.org/api)

> O Webpack é um bundler de módulo JavaScript de código aberto. Seu principal objetivo é agrupar arquivos JavaScript para uso em um navegador, mas também é capaz de transformar, empacotar ou empacotar qualquer recurso ou ativo. --[Wikipedia](https://en.wikipedia.org/wiki/Webpack)

## Instalar webpack e o babel

`npm install --save-dev webpack babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 webpack-dev-server html-webpack-plugin`

onde:

> * webpack: adiciona o task runner ao projeto;
> * babel-core, babel-loader,babel-preset-es2015 e babel-preset-stage-0: adiciona os parses do ES6/ES7, para que o browser entenda o que fazer;
> * webpack-dev-server: um servidor http para utilizarmos o hot reloading.
> * O hot reloading mantém a sua aplicação rodando e injeta a uma nova versão do aquivo editado em tempo de execução. Desta forma você não perde o estado da sua aplicação.
> * html-webpack-plugin: injeta o bandle gerado pelo webpack em nosso index.html [criciumadev](https://medium.com/criciumadev/configurando-webpack-es6-7-e5368e4e33c)

## Criar o arquivo *webpack.config.js*
[Documentação completa](https://webpack.js.org/configuration/)

Criar o arquivo *webpack.config.js* na pasta de trabalho. E inserir as configurações necessárias.

Ex:
```
// requirir o webpack para utilizá-lo
const webpack = require('webpack');

// inicia a configuração
module.exports = {
  // arquivo de entrada 
  entry: {
    filename: './app.js'
  },
  // arquivo de saída
  output: {
    filename: './build.js'
  },
  module: {
    loaders: [
      {
        // arquivos que deseja inspecionar
        test: /\.js$/,
        // arquivos para excluir da inspeção
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          // com o que você está trabalhando (ex react, angular, es2015)
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }
    ]
  }
}
```

## Importar e exportar 
[Import and export es6]()

## Rodar Webpack
Quando rodar o webpack, todo o código que está no arquivo (entry) especificado no ***webpack.config.js*** será 
compilado (termo correto?) para o arquivo de saída (output).

Navegue com o terminal até o diretório do projeto:

### Rodar Webpack - Se instalado globalmente
`webpack`

### Rodar Webpack - Se instalado local
`.node_modules/.bin/webpack`

#### Criar alias para rodar webpack local
Para poupar trabalho na hora de rodar o comando, é possível criar um alias no arquivo **package.json** na parte de scripts.

```
"scripts": {
    "alias": "comando",
  },
```

Depois para rodar o webpack, basta digitar na linha de comando:

`npm run alias`

ex:

```
"scripts": {
    "build": "./node_modules/.bin/webpack",
    "watch": "npm run build -- --watch",
  }
```

Para rodar: `npm run build`

Também é possível adicionar comandos como `--watch`,`--colors` e `progress`:

?emconstrução

* `--watch`: este comando habilita o webpack para ficar 'assistindo' (watching) as mudanças que você faz nos seus arquivos e faz a recompilação automaticamente.


```
"scripts": {
    "build": "./node_modules/.bin/webpack --colors --progress",
    "watch": "npm run build -- --watch",
  }
```

## Uglify com UglifyJS
Para reduzir o tamanho do arquivo, minimizando e retirando trechos desnecessários como comentários, por exemplo, podemos utilizar o UglifyJS.

Adicionar `plugins` ao arquivo ***webpack.config.js*** e as configurações necessárias:

ex:
```
plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // retirar warnings
      compress: { warnings: false },
      // retirar comentários
      output: { comments: false },
    })
  ]
```

## Adicionar SourceMap 
Depois que minificamos nosso código, fica bem difícil encontrar onde exatamente estão os erros quando eles surgirem, para facilitar esse processo na hora de debugar nosso código, podemos adicionar os *sourcemaps* ao nosso **package.json**.

```
module.exports = {
  devtool: 'source-map', // add devtool: 'source-map'
  //...
  // ...

  plugins: [
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    output: { comments: false },
    sourceMap: true // add sourceMap: true
    })
  ]
}
```

## Criar um server com webpack
Instale o dev server:

`npm i --save-dev webpack-dev-server`

Como vimos antes, para facilitar a vida, adicione um alias na parte de scripts do seu *package.json*:

```
"scripts": {
    "server": "./node_modules/.bin/webpack-dev-server --inline --open" // add um alias
  }
```

depois basta digitar o comando no terminal:

`npm run server`