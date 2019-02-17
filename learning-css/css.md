# CSS

## Links úteis

- [Specificity Calculator](http://specificity.keegan.st/)


---

# Dicas 

## Evitar Seletores superqualificados

> Encontre o meio termo. Não faça seletores muito específicos ou seletores muito genéricos. O CSS trabalha com especificidade: quanto mais específico, mais certeiro você é ao capturar um elemento, mas seu CSS fica mais engessado e consequentemente você usa mais código. Quanto mais genérico, mais elementos do mesmo tipo você formata, mas o risco de conflito de estilos aumenta. O ideal é encontrar o meio termo, onde você é tão específico e nem tão genérico.
> [(Tabless)](https://tableless.com.br/oocss-ou-css-do-jeito-certo/)


Por exemplo:

`.container #box p`

Poderia ser substituído por:

`#box p`

Pois a class `.container` é desnecessária neste caso.

## Evite usar ID para estilo css
- IDs são como âncoras. 
- Utiliza-se mais como âncora para o JS e como indentificador de conteúdo.
- Dê preferência para o uso de classes que torna o código mais reutilizável, por exemplo.

---

## Especificidade

I. Estilos inline
II. IDs
III. Classes, pseudoclasses e atributos
IV. Elementos e pseudoelementos

- Em caso de empate, ganha estilo cascata
- `!important` sempre tem maior prioridade 
- conflito de `!importante`, ganha o `!importante` estilo cascata

---
## Hierarquia eficiência de seletores

1. ID                - ex: #id
2. Classe            - ex: .classe
3. Tipo              - ex: h1
4. Irmão adjacente   - ex: h1 + p
5. Filho             - ex: li > ul
6. Descendente       - ex: h1 p
7. Universal         - ex: *
8. Atributo          - ex: [type="text"]
9. Pseudo classe/pseudo elemento - ex: a:hover


---

## CSSOO (CSS orientado a objetos)
- Facilita manutenção de código.
- Evita repetição de código.

> Nessa técnica você categoriza os elementos na página como CSS Object. É um padrão visual que se repete e que pode ser abstraído em um contexto próprio
> Qualquer padrão visual que pode ser encaixado a outros elementos na página são objetos.
> A ideia é separar a estrutura de marcação de obrigações visuais. Separar o conteúdo do contexto. [(tableless)](https://tableless.com.br/arquitetura-css-anotacoes-da-palestra-rafael-rinaldi/)

> Um objeto CSS é formado por elementos:
> - HTML, que pode ser ou mais nós do DOM.
> - Declarações CSS, que estilizam estes nós, começando com o nome da classe referente ao wrapper.
> - Componentes como imagens de background e sprites, por exemplo.
> - Comportamentos JavaScript, listeners ou métodos associados.
> [(Matheus Castiglioni)](https://medium.com/trainingcenter/organizando-seu-c%C3%B3digo-css-parte-1-c0af96e4cc9f)

### 1 princípio - Separação de estrutura e de visual (skin)

> A ideia é que nós separemos as características visuais das características estruturais, tornando-os modulares de forma que possamos reutilizá-los em diferentes elementos tendo resultados iguais. [(tableless)](https://tableless.com.br/oocss-ou-css-do-jeito-certo/)


Neste exemplo abaixo, há muito código repetido desnecessáriamente, observa-se que somente o `background-color` muda de um exemplo para o outro. 

Ex:

HTML:
```
<div class="green-circle"></div>
<div class="yellow-circle"></div>
<div class="blue-circle"></div>
```

CSS:

```
.green-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: green
}

.yellow-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: yellow
}

.blue-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: purple
}
```

Assim, podemos criar uma nova classe para centralizar esse estilo estrutural em comum, mantendo o estilo visual, no caso o `background-color` idependente para cada um deles:

HTML:
```
<div class="circle green-circle"></div>
<div class="circle yellow-circle"></div>
<div class="circle blue-circle"></div>
```

CSS:

```
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.green-circle {
  background-color: green
}

.yellow-circle {
  background-color: yellow
}

.blue-circle {
  background-color: purple
}
```

### 2 princípio - Independência de containers e de conteúdos

> Essencialmente quer dizer: Raramente use estilos que dependam de localização. Idealmente, um objeto deve parecer-se igual, independentemente de onde estiver na página, ou mesmo se trocar de página.
> [(Matheus Castiglioni)](https://medium.com/trainingcenter/organizando-seu-c%C3%B3digo-css-parte-1-c0af96e4cc9f)

**Independência de conteúdo**
Onde qualquer objeto poderá ser colocado em outro container sem ter sua aparência modificada. 
* a menos que se deseje modificar a aparência *

---

## SMACSS

[Reset CSS](https://meyerweb.com/eric/tools/css/reset/)