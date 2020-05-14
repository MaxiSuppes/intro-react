## Intro a React

### Bootstrapping del proyecto:
#### Pre-requisitos
Es necesario tener instaladas las ultimas versiones LTS de **Node**, **npm** y **yarn**

#### Clone
```git clone https://github.com/MaxiSuppes/intro-react.git```

#### Instalar dependencias
Ejecutar el comando ```yarn install``` en el root del proyecto

#### Variables de entorno
Crear un archivo ```.env``` en el directorio root y copiarle el contenido del archivo ```.env.example```.

*REACT_APP_API_URL*: Estamos usando la API gratuita https://reqres.in/api
*REACT_APP_USING_FAKE_API*: True si se quieren usar los mocks o vacío si se quiere usar la API antes mencionada.  

#### Run
```yarn start```


### Contenido:
Cada una de las ramas contiene un ejemplo introductorio de algunas de las nociones principales de React.

```basic-version``` Contenido básico de una app creada con create-react-app

```navigation``` Ejemplo de navegación básica

```api-request``` Request a una [API pública]( https://reqres.in) usando [fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)
 
```login``` Login de un usuario, guardado del token en el [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Local_storage)

```environment-variables``` Configuración de variables de entorno

```private-routes``` Concepto de rutas privadas a las que solo se puede acceder si hay un usuario logueado

```api-client``` Se usa un módulo para encapsular la comunicacion entre el cliente y la api

```master``` Tiene el contenido total de todas las ramas anteriores, más un ejemplo de componente reutilizable y la configuración para absolute imports 

### Que falta?
No se agregó ningún test!

### Otros links de utilidad

[React documentation](https://reactjs.org/)

[Tests con Jest](https://jestjs.io/)

[Airbnb React conventions](https://github.com/airbnb/javascript/tree/master/react)

