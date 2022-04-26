# LocalStorage And SessionStorage

localStorage and sessionStorage, part of the web storage API, are two great tools to save key/value pairs locally. 

1. The data is saved locally only and can’t be read by the server
2. It allows for much more data to be saved (10Mb for most browsers)
3. It’s simpler to use and the syntax is very straightforward.


## LocalStorage And SessionStorage

localStorage and sessionStorage accomplish the exact same thing and have the same API, but with sessionStorage
the data is persisted only until the window or tab is closed, while with localStorage the data is persisted
until the user manually clears the browser cache or until your web app clears the data.


## Create Entries

```typescript
let key:string = 'Item1';
localStorage.setItem(key, 'Value');
sessionStorage.setItem(key, 'Value');
```

## Reading Entries

```typescript
let myItem:string = localStorage.getItem(key);
let myItem:string = sessionStorage.getItem(key);
```

## Update Entries

```typescript
localStorage.setItem(key, 'New Value');
sessionStorage.setItem(key, 'New Value');
```

## Deleting Entries

```typescript
localStorage.removeItem(key);
sessionStorage.removeItem(key);
```

## Clearing Entries

```typescript
localStorage.clear();
sessionStorage.clear();
```


## Storing Json Objects

```typescript
// Create item:
let myObj = { name: 'Skip', breed: 'Labrador' };
localStorage.setItem(key, JSON.stringify(myObj));
sessionStorage.setItem(key, JSON.stringify(myObj));

// Read item:
let item = JSON.parse(localStorage.getItem(key));
let item = JSON.parse(sessionStorage.getItem(key));
```