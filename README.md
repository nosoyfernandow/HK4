# Guia Hkton4

# Pasos para que funcione

## Paso 1: clona el repositorio

## Paso 2:
- Para que funciona app-name , asegurese de que se use el puerto de la API
  .\app-name\src\api\dataService.js
```
const BASE_URL = 'http://localhost:8080';
```
Para el Backend , postgres se usara el puerto 5432
- .\demo\src\main\resources\application.properties
- revisar su usuario y contraseña
```
server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=su-contraseña
```
Para el Frontend , en este caso , el puerto 3000
## Paso 3: Ejectuamos el DevExtreme!

1. Nos vamos al directorio padre de nuestro proyecto.
```
cd '/ejemplo/de/ruta/Hkton4' 
```
No se está compartiendo los archivos de "library root , node_modules" debido al exceso de peso, por lo tanto:
2. Nos vamos al directorio de nuestro frontend.
```
cd '/ejemplo/de/ruta/Hkton4/app-name' 
```
Ejecute el siguiente comando en la terminal para descargar las librerias.
```
npm install react-scripts
```
Nota*: Asegurence de instalar axios
```
npm install axios
```
Luego iniciamos el programa
```
npm start
```
