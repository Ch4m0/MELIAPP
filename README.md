# Proyecto Challenge MELI

Este es un proyecto que consta de un cliente (frontend) y un servidor (API) como parte de un challenge. El cliente (`client`) se ejecuta en el puerto 3001 y el servidor (`server`) en el puerto 3000. Se utilizó Yarn como administrador de paquetes para ambos proyectos.

## Estructura del proyecto

El proyecto se divide en dos directorios principales:

- `client/`: Contiene el código fuente del cliente (frontend).
- `server/`: Contiene el código fuente del servidor (API).

## Funcionalidades

El cliente ofrece las siguientes funcionalidades:

- **Buscador**: En la página principal del cliente, se muestra un buscador donde los usuarios pueden buscar productos. Al ingresar una palabra clave y presionar Enter, se mostrarán los resultados de la búsqueda en la lista de productos.

- **Lista de productos**: Después de realizar una búsqueda, se muestra una lista de productos que coinciden con la palabra clave ingresada. Cada producto en la lista muestra su nombre, imagen y precio.

- **Detalle del producto**: Al hacer clic en un producto de la lista, se accede a la página de detalle del producto, donde se muestra información más detallada sobre el producto, como descripción, características y disponibilidad.

## Configuración

### Cliente (Frontend)

1. Asegúrate de tener Yarn instalado en tu máquina.
2. Navega al directorio `client/`.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```shell
   yarn install


