# SASS 
**Pré processador CSS**

[Guia Completo do SASS - oficial](https://sass-guidelin.es/pt/)

## Sumário
* [Aninhamento](#Aninhamento)
* [Referência à ascendente (&)](#Referência-à-ascendente-(&))
* [Aninhamento](#Aninhamento)
  * [Fazer aninhamento, porém com compilação na raíz (@at-root)](#Fazer-aninhamento,-porém-com-compilação-na-raíz-(@at-root))
* [Variáveis ($nome: valor)](#Variáveis-($nome:-valor))
* [Mixins (@mixin e @include)](#Mixins-(@mixin-e-@include))

---

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
