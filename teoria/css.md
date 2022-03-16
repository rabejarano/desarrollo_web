# Cascading Style Sheets

CSS significa hojas de estilo de cascada y es un lenguaje de hojas de estilo. CSS nos permiten definir la apariencia de cada elemento dentro de los documentos en HTML.
📌Dato: Igual que en el caso de HTML, CSS no es considerado como un lenguaje de programación.

¿Cómo funciona CSS?
Está basado en reglas, es decir, te permite aplicar estilos de manera selectiva a elementos en HTML.


```html
<p>Hola mi nombre es Jhanpiere Montes</p>
```

```css
p {
    color : red;
}
```

## FlexBox

Flexbox CSS es un sistema de maquetación unidimensional, pensado principalmente para el acomodo interno de los elementos, componentes y/o widgets de una interfaz de usuario.

## Unidades de Medida 

### px (pixel)
Pixel (px) es una unidad CSS de uso común en los sitios web. px no es escalable, es una unidad absoluta.

### em (element) or rem (root element)
El element (em) y el root element (rem) son unidades de respuesta interpretadas en pxunit equivalentes por el navegador. Son unidades relativas. El cambio en el valor del elemento padre o raíz afecta el valor de las unidades relativas. Se escalan con el dispositivo. Entonces, ¿qué hace que los dos sean diferentes? La diferencia radica en cómo el navegador deriva los valores. Para ver los valores calculados, abra las Herramientas para desarrolladores de Chrome y vaya a la pestaña Calculado.

El valor de píxel calculado de una unidad em es relativo al tamaño de fuente del elemento al que se aplica estilo.

El valor de píxel calculado de una unidad rem es relativo al tamaño de fuente del elemento raíz (html). Sin embargo, esto se ve afectado por la configuración del tamaño de fuente en el navegador.



## Bibliografia

https://jonmircha.com/flexbox

