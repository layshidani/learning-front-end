# SASS 
**Pré processador CSS**

## Sumário
* [Links](#Links)
* [Instalação](#Instalação)
* [Aninhamento](#Aninhamento)
* [Referência à ascendente (&)](#Referência-à-ascendente-(&))
* [Aninhamento](#Aninhamento)
  * [Fazer aninhamento, porém com compilação na raíz (@at-root)](#Fazer-aninhamento,-porém-com-compilação-na-raíz-(@at-root))
* [Variáveis ($nome: valor)](#Variáveis-($nome:-valor))
* [Mixins (@mixin e @include)](#Mixins-(@mixin-e-@include))
* [Extender estilo de outra classe (@extend)](#Extender-estilo-de-outra-classe-(@extend))
* [Condições e Loops (if, else if, else, for, while, each)](#Condições-e-Loops-(if,-else-if,-else,-for,-while,-each))
  * [if, else if, else](#if,-else-if,-else)
  * [for (@for)](#for-(@for))
  * [each (@each)](#each-(@each))
  * [while (@while)](#while-(@while))

---

## Links

[Guia Completo do SASS - oficial](https://sass-guidelin.es/pt/)
[Sass Meister - The sassiest way to play with Sass, Compass, & LibSass](https://www.sassmeister.com/)

## Instalação
Podemos realizar a instalação através da linha de comando:

* Macs e PCs: `sudo gem install sass`

* Linux (deverá ter Ruby já instalado e depois): `sudo su -c "gem install sass"`


Para verificar a versão instalada, ou se já tem instalada: 

`sass -v`

## Aninhamento

```  
// Aninhamento:
.navbar {
  ul {
    list-style: none;
  }
  
  li {
    display: inline-block;
  }
``` 

É o mesmo que:
```
.navbar ul {
  list-style: none;
}
.navbar li {
  display: inline-block;
}
```

## Referência à ascendente (&)

**Exemplo 1:**

```
a {
  text-decoration: none;
    
// & referência à ascendente
  &:hover {
    color: purple;
  }
}
```

Resultado da compilação:
```
a {
  text-decoration: none;
}
a:hover {
  color: purple;
}
```

**Exemplo 2:**

```
.seletor {
  color: blue;
  
  .alguma-classe & {
    color: red;
  }
}
```

Resultado da compilação:
```
.seletor {
  color: blue;
}
.alguma-classe .seletor {
  color: red;
}
```

**Funciona com BEM:**
```
.seletor {
  color: blue;
  
  &--modificador {
    color: red;
  }
}
```

Resultado da compilação:

```
.seletor {
  color: blue;
}
.seletor--modificador {
  color: red;
}
```

### Fazer aninhamento, porém com compilação na raíz (@at-root)

```
div {
  background-color: blue;
  
  @at-root {
    h1 {
      color: pink;
    }
  }
}
```

Resultado da compilação:
```
div {
  background-color: blue;
}
h1 {
  color: pink;
}
```

## Variáveis ($nome: valor)
A mudança no valor altera automaticamente o valor onde foram atribuídas as variáveis:

Exemplo
```
$circle: 50%;
$default-color: blue;


div {
  border-radius: $circle;
  color: $default-color;
}

```

Resultado da compilação:

```
div {
  border-radius: 50%;
  color: blue;
}
```

## Mixins (@mixin e @include)
Ex 1:

```
@mixin bar {
  color: #000000;
}

.foo {
  @include bar;
}
```

Resultado da compilação:
```
.foo {
  color: #000000;
}
```

Ex 2:

```
@mixin bar($color) {
  color: $color;
}

.foo {
  @include bar(#FFFFFF);
}
```

Resultado da compilação:
```
.foo {
  color: #FFFFFF;
}
```

O exemplo acima, poderia ter mais de um parâmetro e valores padrões, como em funções JS.

## Extender estilo de outra classe (@extend)
Podemos reaproveitar o estilo de outra classe utilizando o `@extend`.

Ex: Suponhamos que queremos que queremos aplicar o estilo da classe `example` à classe `example-important` e acrescentar a cor vermelha à fonte:

Basta acrescentar `@extend` + os estilos que deseja aplicar à classe:

```
.example {
  font-family: Helvetica;
  border: 1px solid black;
}

.example-important {
  @extend .example;
  color: red;
}
```

## Condições e Loops (if, else if, else, for, while, each)
Assim como no JavaScript, também podemos trabalhar com condições e loops no CSS através do SASS.

* `$var` : declara-se o nome da variável utilizado cifrão;
* `$var: valor` : para atribuir valor à variável;
* `#{$var}` : atribui-se a variável dinâmicamente.

### if, else if, else

Exemplo do [FreeCodeCamp](freecodecamp.org) utilizando **mixins**:

```
<style type='text/sass'>
  
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    } @else if $val == medium {
      border: 3px solid black;
    } @else if $val == heavy {
      border: 6px solid black;
    } @else {
      border: none;
    }
  }
  
  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }  
</style>

<div id="box"></div>

```

### for (@for)
Temos duas formas de trabalhar com `@for`:
* **Início ao final (start to end)**: neste caso o número final é desconsiderado (para de iterar quando chega no número final)
`@for $var from <start> to <end>`
* **Início até o final (start through end)**: o número final é considerado (itera até o número final)
`@for $var from <start> through <end>`

Exemplo:

Vamos atribuir font-size às classes abaixo, começando em 2px e dobrando o valor até a última classe.

HTML:
```
<p class="text-1">Olá</p>
<p class="text-2">Olá</p>
<p class="text-3">Olá</p>
<p class="text-4">Olá</p>
<p class="text-5">Olá</p>
```

CSS:
```
@for $i from 1 through 5 {
  .text-#{$i} {
    font-size: $i * 2px;
  }
}
```

Resultado:
```
.text-1 {
  font-size: 2px;
}

.text-2 {
  font-size: 4px;
}

.text-3 {
  font-size: 6px;
}

.text-4 {
  font-size: 8px;
}

.text-5 {
  font-size: 10px;
}
```

### each (@each)

`@each $var in <list>`

Exemplo:

Queremos atribuir a cor da fonte correspondente a cada classe:

HTML
```
<p class="green-text"></p>
<p class="yellow-text"></p>
<p class="blue-text"></p>
```

CSS
```
@each $color in green, yellow, blue {
  .#{$color}-text {
    color: $color;
  }
}
```

Primeiro declaramos uma variável color com **$**(`$color`) e listamos as cores.

Para atribuir cada um dos elementos da lista à classe de forma dinâmica, usamos `#{$nome da var}`.

Resultado:
```
.green-text {
  color: green;
}

.yellow-text {
  color: yellow;
}

.blue-text {
  color: blue;
}
```


### while (@while)

Exemplo, aplicar tamanho de fonte às classes, font-size da classe `text-1` deve começar em 2px e ir dobrando:

HTML:
```
<p class="text-1">Olá</p>
<p class="text-2">Olá</p>
<p class="text-3">Olá</p>
<p class="text-4">Olá</p>
<p class="text-5">Olá</p>
```


CSS:

Primeiro declaramos uma variável através do simbolo de cifrão **$**, e atribuímos um valor à ela:

```
$num: 1;
@while $num <= 5 {
  .text-#{$num} {
    font-size: $num * 2px;
  }
  $num: $num + 1;
}
```

Sempre que formos nos referir à essa variável, chamamos pelo `$` + nome da variável.

Para acrescentar o valor corrente da variável utilizamos `#{$nome-da-variável}`.

O código é o equivalente à:

```
.text-1 {
  font-size: 2px;
}

.text-2 {
  font-size: 4px;
}

.text-3 {
  font-size: 6px;
}

.text-4 {
  font-size: 8px;
}

.text-5 {
  font-size: 10px;
}
```

## Importar arquivos SASS (.scss) @Import
``` 
@import 'nome-do-arquivo'
```

Para importar arquivos SASS para outros arquivos SASS:

Exemplo:

nome do arquivo: mixins.scss

Estou no arquivo **mains.scss**, para importar o arquivo parcial acima basta incluir no topo do arquivo **mains.scss**:

```
@import 'mixins'
```