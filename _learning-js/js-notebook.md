# -> O JS pode ser adicionado de 3 formas:
- EXTERNO: linkado à um arquivo **.js** onde está todo o código. (é o modo mais recomendado, tendo em vista a maior facilidade de manutenção e tempo de carregamento da página).
  - exemplo linkado à um arquivo (as tags podem ser inseridas dentro das tags **head** ou **body**, sendo o mais recomendado como última linha dentro da tag **body**, pois melhora a velocidade de carregamento da página). Dentro de *src* inserir o nome do arquivo:
  ```
  <script src="script.js"></script>
  ```

  ou se o arquivo estiver dentro de uma pasta além da pasta onde está o HTML, procedemos como no caso de imagens, acrescentando nome da pasta e \:

  ```
  <script src="nomeDaPasta/script.js"></script>
  ```
- INTERNO: no próprio HTML, com o código dentro das tags '**script**' que podem ser adicionadas tanto dentro da tag '**head**' quanto da tag '**body**' (em uma ou ambas dependendo da necessidade.)
  ```
  <script>
    document.getElementById("sayHello").innerHTML = "Hello!";
  </script>
  ```
- REFERÊNCIA EXTERNA: pode-se utilizar uma referência externa. Exemplo:
  ```
  <script src="https://www.endereco.com/js/script.js"></script>
  ```


# JS: Valores primitivos e objetos

Os valores primitivos 

# => valor primitivo não tem parâmetros e métodos (mas tem propriedade)

- String
- Number
- Boolean
- Null
- undefined
- Symbol (novo no ECMAScript 6)

---

# Output

- console.log()
- window.alert()
- document.write()
- inner.HTML

## console.log()
Irá aparecer no console do browser. Mais usado para testar o código.

## window.alert()
Irá abrir uma pequena caixa de alerta no browser.

## document.write()
Modifica o conteúdo HTML para exibição.

## inner.HTML
Modifica o conteúdo HTML para exibição.
No exemplo abaixo, *document* referencia-se ao arquivo HTML, *getElementById* diz para 'pegar'/ buscar um elemento no HTML e 'escrever'/modificar o conteúdo que está sobre esse *id* para o conteúdo que desejamos, no caso, a string "Olá!".

Exemplo:

```
<script>
document.getElementById("exemplo").innerHTML = "Olá!";
</script>
```

HTML -> procura a tag que tem um *id* especificado -> insere conteúdo na página.

Exemplos de [W3Schools](https://www.w3schools.com/js/js_output.asp)



# Array

Array exemplo:
```
var myArray = [1, 2, 3];
```

- add no final do array -> push()
```
myArray.push(4); => [1, 2, 3, 4]
```

- add no começo do array -> unshift()
```
myArray.unshift(0); => [0, 1, 2, 3, 4]
```

- remover no final do array -> pop()
```
myArray.pop(4); => [0, 1, 2, 3]
```

- remover no começo do array -> shift()
```
myArray.shift(0); => [1, 2, 3]
```


# ternário (versão reduzida de uma condição)

- if normal:
```
if ( x < 10 ) {
  console.log( x );
} else {
  console.log( 10 );
}
```
- ternário
```
x < 10 ? console.log( x ) : console.log( y );
```

---
# Arrow function
```
Sintaxe:

parametros => retorno

Exemplos:

const exemplo = (x, y) => x + y;

const exemplo2 = () => 'Hello';

console.log(exemplo2) //Hello

const exemplo3 = text => text
```




---
# Regular Expressions (RegEx)

> Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são objetos. Elas podem ser utilizadas com os métodos *exec* e *test* do objeto RegExp, e com os métodos *match*, *replace*, *search*, e *split* do objeto String. _(MDN)

- .test() -> true/false
- exec() -> array
- .match() -> array/null
- search() -> índice/-1
- replace() -> procura e substitui
- split -> usa a regex ou uma string fixa para 'quebrar' uma string dentro de um array de substrings

> Quando você quer saber se um padrão é encontrado em uma string, use o método test ou search; para mais informações (mas execução mais lenta) use o método exec ou match. _(MDN)

## Modificadores
- i -> /code/i : ignora se é maiúscula ou minúscula
- g -> /code/g : encontra todas as compatibilidades
- m -> /code/m : verificação multilinha

## Alcance []
- `/[abc]/` : busca por qualquer um dos caracteres entre [] (ou seja, procura por 'a', 'b', 'c')
- `/[x-y]/` : busca por caracteres entre a primeira letra e a segunda -> exemplo: de 'a' a 'z' -> a-z
- `/[0-9]/` : busca por qualquer caracteres entre os números estipulados
- `/[x|y]/` : busca por x ou y..
- `/[^code]/` : busca por caracteres diferentes dos informados -> exemplo: `/[^aeiou]/` -> procura por caracteres que não sejam vogais
- `/[code+]/` : busca por uma ou mais ocorrências -> exemplo: 

    ```
      /[o+]/ 

      * ['ovo'] // => ['o', 'o']

      * ['voo'] // => ['oo']

      * ['voa'] // => ['o']
    ```
- `/[code*]/` : busca por  ou mais ocorrências
- `/[code]?/` : busca pela menor ocorrência (trecho)
  
  exemplo
  `'economia'.match(/o[a-z]*?o/) => 'ono'`


## Quantificadores
- n+ : busca por pelo menos uma ocorrência
- n* : busca por qualquer string que contenha 0 ou mais ocorrências de n
- n? : busca por 0 ou 1 ocorrência de n
- n{X} : busca a ocorrência de uma sequência de 'X' vezes -> ex: '1000, 10, 100, 1000'.match(/\d{4}/g)

...cont


## Caracteres especiais

- \ : uma barra invertida que preceda um caractere não especial significa que o caractere seguinte é especial e não deve ser interpretado de forma literal. _(MDN)
- ^: procura por todos os caracteres que não sejam os informadaos.

...cont


## literal

```
/code/ 

```

ex:

```
console.log(/comp/.test('computador')); // true
```

## Ou -> |

```
/code1 | code2 | code3/
```

ex:


```

console.log(/ball | dog | cat/.test('I see a dog.'));  // false, pois considera o espaço em branco
console.log(/ball|dog|cat/.test('I see a dog'));  // true
```

## Trecho

```
/.code/ 

e

/code./
```

ex:

```
'brasileiro'.match(/br./) 
```

## Procurar caracteres diferentes dos informados
```
/[^code]/
```

## Procurar por ocorrência no início (^)
`/^code/`

ex: 

```
let greeting = "Hello World!";
let greetRegex = /^Hello/; 
let result = greetRegex.test(greeting); => true

```

## Procurar por ocorrência no final ($)
`/code$/`

ex: 

```
let greeting = "Hello World!";
let greetRegex = /World$/; 
let result = greetRegex.test(greeting); => true

```

## Procurar por mais de uma ocorrência seguida 
`/code+/`

Ex: `'voo'.match(/o+/g)` // => 'oo'

## Atalho: procurar todas as letras (maiúsculas e minúsculas), números e _ (\w)

[A-Za-z0-9_] = `/\w/g`

## Atalho: procurar todos os símbolos menos as letras (maiúsculas e minúsculas), números e _ (\W)

 [^A-Za-z0-9_] = `/\W/g`

## Atalho: procurar todas ocorrências de números (\d)

 [0-9_] = `/\d/g`

 ex

 ```
let numString = "Ganhamos um aumento de 10%";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length; 

// => 24
 ```

## Atalho: procurar por espaços em branco (\s)
`/\s/g`

## Atalho: procurar por caracteres que não são espaços em branco (\S)
`/\S/g`

## Especificador de quantidade ({n,n})
(Procura ocorrência entre quantidade de um nº ao outro de vezes)

`/code{n,n}code/`

`/code{n,}code/`

ex:

`/ola{3,}a/.test('olaaaaa') // => true` 

## Especificador exato de quantidade ({n})
`/code{n}code/`

## Procurar 0 ou 1 ocorrência de caractére (?)
`/code?/`

ex:

```
/ama?/.test('ama') // => true
/ama?/.test('amar') // => true
/ama?/.test('amora') // => false
```

## Positive lookahead (?=...)
`/(?=code)/`

ex: checar se a senha tem entre 3 e 6 caracteres e pelo menos um número.

```
let senha = "ola321";
let checarSenha = /(?=\w{3,6})(?=\D*\d)/;
checarSenha.test(senha); // => true
```

## Negative lookahead (?=!...)
`/(?=!code)/`


## Repetição de grupo (()\número de vezes)
(funciona com .test e .match)

`/(code)\número de vezes/`

ex:

```
/(\w+)\s\1/;
```

## Capturar ocorrência e substituir (.replace)

ex:

`'Hello mundo!'.replace(/Hello/, 'Olá') // => "Olá mundo!"`

`'bem tudo'.replace(/(\w+)\s(\w+)/, '$2 $1'); // => "tudo bem"`
---
######################################
# JS WEB
- Mudar o conteúdo do HTML
- Mudar os valores de atributo do HTML
- Mudar o estilo CSS
- Mostrar e Esconder elementos no HTML


# DOM

* Adicionar ação ao clicar:

```
<p onclick = "função ()">Clique aqui</p>
```

```
document.getElementById("p")[0] ----> p índice 0  ----> [p, p, p]
```