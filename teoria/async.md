# Promise

El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que 
puede estar disponible ahora, en el futuro, o nunca.


```typescript
new Promise( /* ejecutor */ function(resolver, rechazar) { ... } );
```

Una Promesa se encuentra en uno de los siguientes estados:

pendiente (pending): estado inicial, no cumplida o rechazada.
cumplida (fulfilled): significa que la operación se completó satisfactoriamente.
rechazada (rejected): significa que la operación falló.

Una promesa pendiente puede ser cumplida con un valor, o rechazada con una razón (error).


https://anexsoft.com/javascript-callbacks-vs-promise-vs-asyncawait