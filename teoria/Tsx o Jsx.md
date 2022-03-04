# Presentando JSX

JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. 
Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo.
Ambos tienen el mismo poder y la misma capacidad.

React.createElement recibe 3 argumentos:

El tipo de elemento que estamos creando
sus atributos o props
y el children que es el contenido.

```javascript
Ejemplo:
React.createElement(‘a’, { href: ‘https://uao.edu.co’ }, ‘Ir a UAO’);
```

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.


### Ventajas
https://lemoncode.net/lemoncode-blog/2016/3/31/jsx-tsx-que-tiene-de-bueno

### Documentacion oficial
https://es.reactjs.org/docs/introducing-jsx.html