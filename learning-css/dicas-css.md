# Dicas 

## Evitar Seletores superqualificados

> Encontre o meio termo. Não faça seletores muito específicos ou seletores muito genéricos. O CSS trabalha com especificidade: quanto mais específico, mais certeiro você é ao capturar um elemento, mas seu CSS fica mais engessado e consequentemente você usa mais código. Quanto mais genérico, mais elementos do mesmo tipo você formata, mas o risco de conflito de estilos aumenta. O ideal é encontrar o meio termo, onde você é tão específico e nem tão genérico.
> [(Tabless)](https://tableless.com.br/oocss-ou-css-do-jeito-certo/)


Por exemplo:

```css
.container #box p
```

Poderia ser substituído por:

```css
#box p
```

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