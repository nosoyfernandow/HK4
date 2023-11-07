<<<<<<< HEAD
# Guia Hkton4

# Pasos para que funcione

## Paso 1: clona el repositorio

## Paso 2:
- Para que funciona app-name , asegurese de que se use el puerto de la API
- en este caso se uso el puerto 8080
- Por lo que debemos revisar si el archivo "dataService.js" ubicado en:
- .\app-name\src\api\dataService.js
- cumple lo siguiente:
```
const BASE_URL = 'http://localhost:8080';
```
Para el Backend , postgres se usara el puerto 5432
-nos dirigimos al archivo "application.properties" para verificar lo siguiente:
- .\demo\src\main\resources\application.properties
- revisar su usuario y contraseña
```
server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=su-contraseña
```
Para el Frontend , en este caso , el puerto 3000.
## Paso 3: Ejecutamos el DevExtreme!

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
=======
# hck4-guía

## Paso 1: Clonar el Repositorio

1. Abre tu terminal o línea de comandos.

2. Navega al directorio donde deseas clonar el repositorio usando el comando `cd`.

3. Ejecuta el siguiente comando para clonar el repositorio:

   ```
   git clone [URL_DEL_REPOSITORIO]
   ```

   Sustituye `[URL_DEL_REPOSITORIO]` con la URL del repositorio que deseas clonar.

4. Una vez que el repositorio se haya clonado correctamente, navega al directorio del proyecto con el comando `cd [NOMBRE_DEL_PROYECTO]`, donde `[NOMBRE_DEL_PROYECTO]` es el nombre del directorio del proyecto recién clonado.

## Paso 2: Abrir el Proyecto en IntelliJ IDEA

1. Abre IntelliJ IDEA en tu computadora.

2. En el menú principal, selecciona "File" (Archivo) y luego "Open..." (Abrir...).

3. Navega hasta el directorio del proyecto que clonaste en el Paso 1 y selecciona el directorio DEMO. Luego, haz clic en "Open" (Abrir).

4. IntelliJ IDEA abrirá el proyecto y lo cargará en el entorno de desarrollo.

## Paso 3: Asegurarse de las Configuraciones de la Base de Datos

1. En el proyecto, busca el archivo de configuración de la base de datos. En el ejemplo anterior, esto se hizo en el archivo `application.properties` o `application.yml`.

2. Asegúrate de que las configuraciones de la base de datos sean correctas, incluyendo la URL, el nombre de usuario y la contraseña. Deben coincidir con la configuración de tu base de datos.

3. Si es necesario, realiza las modificaciones en el archivo de configuración y guárdalas.

## Paso 4: Configurar una Nueva Spring Boot Configuration

1. En la parte superior de la ventana de IntelliJ IDEA, verás un botón verde de "Run" (Ejecutar) con un triángulo. Junto a este botón, encontrarás un menú desplegable. Haz clic en el menú desplegable.

2. Selecciona "Edit Configurations..." (Editar Configuraciones...).

3. En la ventana "Run/Debug Configurations" (Configuraciones de Ejecución/Depuración), haz clic en el icono "+" en la esquina superior izquierda y selecciona "Spring Boot" en el menú desplegable.

4. En la configuración de Spring Boot, puedes proporcionar un nombre para la configuración si lo deseas.

5. En la sección "Main Class" (Clase Principal), utiliza el botón de búsqueda o escribe el nombre de la clase principal de tu aplicación Spring Boot. En tu caso, sería la clase "DemoApplication".

6. Asegúrate de que la opción "Single instance only" (Solo una instancia) esté seleccionada.

7. Haz clic en "Apply" (Aplicar) y luego en "OK" para guardar la configuración.

   ![La configuración se tiene que ver de esta manera](https://cdn.discordapp.com/attachments/834907040886554694/1169000186324992090/image.png?ex=6553cf43&is=65415a43&hm=cf6ea06a710958a335b90ec66a83cf3e175d1887c230baeca4b7414cfa2a6bf1&)


## Paso 5: Ejecutar la Aplicación

1. Ahora, en la parte superior de IntelliJ IDEA, selecciona la configuración de Spring Boot que acabas de crear en el menú desplegable junto al botón de "Run" (Ejecutar).

2. Haz clic en el botón de "Run" (Ejecutar) para iniciar la aplicación Spring Boot.

## Paso 6: Interacción con la BD

1. Hacemos click en el ícono de bd a la izquierda superior de intellij.
   
![La configuración se tiene que ver de esta manera](https://cdn.discordapp.com/attachments/834907040886554694/1169001187232723054/image.png?ex=6553d032&is=65415b32&hm=07c27b5a1c5c3f49cf1ce92dbcbc1e22669d7a784f67dfccd434755bce285f54&)

2. Hacemos click en el ícono '+' y agregamos una conección a PostgreSQL

![La configuración se tiene que ver de esta manera](https://cdn.discordapp.com/attachments/834907040886554694/1169001800846811247/image.png?ex=6553d0c4&is=65415bc4&hm=08ed45180a1d17e3f8952f5863ded2acd78064926459ff12f6bbb033ccf3efae&)

3. Asegúrence que los ajustes sean los correctos. (usuario, contraseña)

![La configuración se tiene que ver de esta manera](https://cdn.discordapp.com/attachments/834907040886554694/1169002252388798604/image.png?ex=6553d12f&is=65415c2f&hm=b8efc7365799a0eb71d82b27c9b5bdfebc42a6514e90b9caf63270f478455b35&)

4. Ahora van a poder interactuar de forma más directa con la base de datos creando y eliminando elementos de las tablas con más facilidad!

![La configuración se tiene que ver de esta manera](https://media.discordapp.net/attachments/834907040886554694/1169002780229369866/image.png?ex=6553d1ad&is=65415cad&hm=95891bed36d7b734a55ce9b1735c44a9bde7739c1a114fde62eda2e08397ac86&=&width=958&height=537)


## Paso 7: Empezando con DevExtreme!

1. Nos vamos al directorio padre de nuestro proyecto.
```
cd '/ejemplo/de/ruta/hck4-gu-a' 
```

2. Iniciamos un nuevo proyecto dev-extreme
```
npx devextreme-cli new react-app app-name
```

Seleccionamos:
* Specify desired template type: › JavaScript
* Specify desired application layout: Side navigation (outer toolbar)


## Paso 8: Probamos el proyecto! 

1. Luego de haber creado este ambiente, entramos a app-name e iniciamos el programa!
```
cd app-name
npm start
```

## Paso 9:

1. Vamos a crear los siguientes 2 archivos:

![La configuración se tiene que ver de esta manera](https://cdn.discordapp.com/attachments/834907040886554694/1169004877138120734/image.png?ex=6553d3a1&is=65415ea1&hm=94c2b89e99ade43bc7c13e0ee21223aafe7cfae30dc4b727fff4f0fd3434fcc1&)

2. Realizamos los siguientes cambios en `index.js`:

```js
export { default as HomePage } from './home/home';
export { default as ProfilePage } from './profile/profile';
export { default as TasksPage } from './tasks/tasks';
export { default as GroupsPage } from './groups/groups';
```

3. Realizamos los siguientes cambios en `app-navigation.js`:

```js
export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        path: '/profile'
      },
      {
        text: 'Tasks',
        path: '/tasks'
      },
      {
        text: 'Groups',
        path: '/groups'
      }
    ]
  }
  ];
```

4. Escribimos el siguiente código en `dataService.js`:

```js
import axios from 'axios';

// Definición de la URL base para las solicitudes al servidor.
const BASE_URL = 'http://localhost:8080';

// Función asincrónica para recuperar grupos desde el servidor.
export const fetchGroups = async () => {
    // Utiliza Axios para hacer una solicitud GET a la URL de grupos.
    return axios.get(`${BASE_URL}/groups`)
}

```

Nota*: Asegurence de instalar axios 
```
npm install axios
```
 
5. Escribimos el siguiente código en `groups.js`:

```js 
import { useEffect, useState } from "react"
import { fetchGroups } from "../../api/dataService"
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';

export default function Group() {
  // Se declara un estado llamado 'groupsWithPersonCount' utilizando useState.
  const [groupsWithPersonCount, setGroupsWithPersonCount] = useState();

  // Utiliza useEffect para realizar la solicitud a la API cuando el componente se monta.
  useEffect(() => {
    fetchGroups()
      .then((response) => {
        // Extrae los datos de respuesta de la solicitud.
        const groupsData = response.data;

        // Registra los datos de grupos en la consola.
        console.log(groupsData);

        // Modifica el estado 'groupsWithPersonCount' transformando los datos de grupos.
        setGroupsWithPersonCount(groupsData.map(group => ({
          id: group.id,
          name: group.name,
          personCount: group.persons ? group.persons.length : 0    
        })))
      })
      .catch((error) => {
        console.log(error);
      })
  }, []); // El [] como segundo argumento asegura que useEffect se ejecute solo una vez al montar el componente.

  return (
      <DataGrid
        // Establece la fuente de datos para el DataGrid como 'groupsWithPersonCount'.
        dataSource={groupsWithPersonCount}
        
        // Muestra bordes alrededor de las celdas de la tabla.
        showBorders={true}
      >
        {/* Define la primera columna con el campo 'id' y un ancho de 50 píxeles. */}
        <Column dataField="id" width={50} />
        
        {/* Define la segunda columna con el campo 'name'. */}
        <Column dataField="name" />
        
        {/* Define la tercera columna con el campo 'personCount' y un título personalizado 'Number of Persons'. */}
        <Column dataField="personCount" caption="Number of Persons" />
      </DataGrid>

  )
}
```


>>>>>>> 3dd82068166dd5e36f5bb8ea864ec804241044ea
