# Componentes y propiedades

## Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.


Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y retornan elementos de React.


## React es muy flexible pero tiene una regla estricta: 
Todos los componentes deben actuar como functiones purtas con respecto a sus propiedades.

Si se necesita que una de sus variables cambien con respecto al tiempo debe usarse sus variables de estado.


Function Component | Class Component |
--- | --- |
A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. | A class component requires you to extend from React. Component and create a render function which returns a React element. | 
There is no render method used in functional components. | It must have the render() method returning HTML |
Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI. | Also known as Stateful components because they implement logic and state. |
React lifecycle methods (for example, componentDidMount) cannot be used in functional components. | React lifecycle methods can be used inside class components (for example, componentDidMount). |
Constructors are not used . | Constructor are used as it needs to store state. |

  


## Proposito del render();

1. React renders HTML haciendo uso de la funcion render.
2. Agrupar HTML en un solo elemento HTML.
3. Permite embeber el estado y las propiedades con el html para returnar un JSX
4. No podemos modificar el State debido a que podriamos causar un error de side effects.

https://es.reactjs.org/docs/components-and-props.html
https://reactjs.org/docs/state-and-lifecycle.html