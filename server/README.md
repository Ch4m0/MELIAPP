## Uso

Para realizar pruebas en desarrollo, se recomienda inicar primero el servidor de forma local y luego iniciar la aplicacion de frontend para realizar el consumo de esta API.
De igual forma, se pueden modificar las variables de ambiente en caso de configurar otro puerto.

## Instalación

```
yarn add
```

## Desarrollo:

Para correr el proyecto en modo dev:

`yarn run dev`

Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

Para conocer los errores detectados por ESLint:

`yarn run lint`

Para corregir automáticamente los errores detectados por ESLint

`yarn run lint:fix`

## Endpoints:

`/api/items?q=​:query`

Debe consultar el siguiente endpoint:
https://api.mercadolibre.com/sites/MLA/search?q=​:query

Y devolver los resultados en el formato indicado:

```
{
    "author": {
        "name": String
        "lastname": String
    },
    categories: [String, String, String, ...],
    items: [
        {
            "id": String,
            "title": String,
            "price": {
                "currency": String,
                "amount": Number,
                "decimals": Number
            },
            "picture": String,
            "condition": String,
            "free_shipping": Boolean
        },
        {...},
        {...},
        {...}
    ]
}
```

`/api/items/​:id`

Debe consultar los siguientes endpoints:

1. https://api.mercadolibre.com/items/​:id
2. https://api.mercadolibre.com/items/​:id​/description

Y devolver los resultados en el formato indicado:

```
{
    "author": {
        "name": String,
        "lastname": String
    },
    "item": {
        "id": String,
        "title": String,
        "price": {
            "currency": String,
            "amount": Number,
            "decimals": Number
        },
        "picture": String,
        "condition": String,
        "free_shipping": Boolean,
        "sold_quantity": Number,
        "description": String
    }
}
```
