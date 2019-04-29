# Import e Export es6

## Importar 
**importar de biblioteca**
`import method from 'lib'`

ex: 
`import R from 'ramda'`

**importar de arquivo do projeto**
`import method from 'endereço/arquivo'`

ex: 
`import hello from '../lib/index'`

onde `index` é o nome do arquivo.

### Importar tudo 
`import * from 'lib'`

ex:
`import * from 'ramda'`

### Importar com alias
`import method as alias from 'lib'`

ex:
`import union as juntar from 'ramda'`

### Importar mais de um método
`import {method as alias, method as alias, method as alias} from 'lib'`

## Exportar 

### Exportar método principal com default
Quando há um método principal para exportar, só é permitido 1 por arquivo.

`export default nome-da-função`

ex: `export default hello`

para importar: `import hello`

### Exportar vários métodos de um mesmo arquivo com *named export*
Há duas formas:
* direta
* indireta

Observações:
* pode exportar várias funções
* é obrigatório importar utilizando o mesmo nome do método exportado e utilizando {}, pois trata-se de um objeto.

*direta*

Você pode inserir a palavra chave `export` antes de qualquer função e ela será exportada.
```
export function hello(name) {
  console.log('Hello' + name)
}
```

*indireta* 

No final do arquivo adiciona o export:
`export {nome-do-metodo, nome-do-metodo, nome-do-metodo}`

para importar:
`import {hello}`