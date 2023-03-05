# PROYECTO 4 FSD BACKEND CLÍNICA DENTAL

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#contribuciones">Contribuciones</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#webgrafia">Webgrafia</a></li>
    <li><a href="#desarrollo">Desarrollo</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Objetivo

En este proyecto hemos desarrollado una API funcional conectada a una base de datos pensada para una clínica dental. Debía ser funcional para realizar consultas de citas, pacientes, doctores y gestionar los registros, acceso, área de clientes, y más.

## Sobre el proyecto
En nuestra API, los usuarios pueden registrarse a través de un formulario en el que se les pedirán datos personales. Con el registro, se les asigna un número de usuario y de paciente, así como un rol de usuario. El administrador podrá asignar roles a los usuarios, para que, en el caso de contratación de nuevos doctores, pueda identificarlos. Con el reparto de roles realizado, la API dispone de barreras y bifurcacioens para que, de forma orgánica, los usuarios puedan acceder a su perfil, crear citas y revisar datos de interés en función de los roles.

## Deploy 🚀
<div align="center">
    <a href="https://www.google.com"><strong>Url a producción </strong></a>🚀🚀🚀
</div>

## Stack
Tecnologías utilizadas:
<div align="center">
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>


## Diagrama BD
!['imagen-db'](./images/diagram.png)

## Instalación en local
1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones ``` 
5. ``` $ Ejecutamos los seeders ``` 
6. ``` $ npm run dev ``` 
7. ...

## Endpoints
<details>
<summary>Endpoints</summary>

- USER
    - REGISTER

            POST http://localhost:3000/users
        body:
        ``` js
            {
                "name": "Felipe",
                "surname": "Báguena Peña",
                "email": "felipe@felipe.com",
                "password": "123456",
                "nif": "22333444P",
                "direction": "Calle Falsa 123",
                "birth_date": "1987-08-21",
                "phone": "666444555"
            }
        ```

    - LOGIN

            POST http://localhost:3000/users/login
        body:
        ``` js
            {
                "email": "felipe@felipe.com",
                "password": "123456"
            }
        ```

    - BORRAR USUARIO POR ID

            DELETE http://localhost:3000/users/:id

    - VER CITAS

            GET http://localhost:3000/users/appointments

    - PERFIL DE USUARIO

            GET http://localhost:3000/profile

    - ACTUALIZAR PERFIL DE USUARIO

            PUT http://localhost:3000/updateprofile
        body:
        ``` js
            {
                "name": "Alyna",
                "surname": "Nastas Romaniuc",
                "email": "alyna@alyna.com",
                "password": "123456",
                "nif": "22555444E",
                "direction": "Calle Falsa 456",
                "birth_date": "1992-04-30",
                "phone": "666333444"
            }
        ```

    - ACTUALIZAR MÉTODO DE PAGO COMO CLIENTE

            PUT http://localhost:3000/updateprofile/payment
        body:
        ``` js
            {
                "payment": "cash",
            }
        ```

    - CREAR NUEVOS ROLES

            POST http://localhost:3000/roles
        body:
        ``` js
            {
                "privilege": "Doctor",
            }
        ```

    - CREAR NUEVAS CITAS

            POST http://localhost:3000/appoint
        body:
        ``` js
            {
                "doctor_id": 3,
                "intervention_id": 1,
                "date": "2023-03-07 11:00",
            }
        ```

    - CREAR NUEVAS CITAS

            POST http://localhost:3000/appoint
        body:
        ``` js
            {
                "doctor_id": 3,
                "intervention_id": 1,
                "date": "2023-03-07 11:00",
            }
        ```

    - CANCELAR CITAS

            DELETE http://localhost:3000/appoint/:id

    - VER CITAS PENDIENTES

            GET http://localhost:3000/appoint/coming

    - VER TODOS LOS USUARIOS REGISTRADOS

            GET http://localhost:3000/admin/users

    - VER TOAS LAS CITAS DE LA CLÍNICA

            GET http://localhost:3000/admin/appoint
    
    - VER TOAS LAS CITAS DE LA CLÍNICA

            GET http://localhost:3000/admin/doctors

    - CREAR NUEVOS SERVICIOS

            POST http://localhost:3000/appoint
        body:
        ``` js
            {
                "name": "extracción",
                "description": "cirujía menor",
                "price": 130
            }
        ```
    - DARSE DE ALTA COMO DOCTOR

            POST http://localhost:3000/doctors
        body:
        ``` js
            {
                "speciality_id": 1,
                "doctor_numer": "3443"
            }
        ```

    - ASIGNAR ROLES A UN USUARIO

            POST http://localhost:3000/admin/roles
        body:
        ``` js
            {
                "user_id": 10,
                "rol_id": 2,
            }
        ```

    - VER ROLES DE UN USUARIO

            GET http://localhost:3000/users/role/:id

</details>

## Futuras funcionalidades
[ ] Añadir create book  
[ ] Añadir logs  con winston  
[ ] Validaciones de la solicitud con express-validator  
[ ] ...

## Contribuciones
Las sugerencias y aportaciones son siempre bienvenidas.  

Puedes hacerlo de dos maneras:

1. Abriendo una issue
2. Crea un fork del repositorio
    - Crea una nueva rama  
        ```
        $ git checkout -b feature/nombreUsuario-mejora
        ```
    - Haz un commit con tus cambios 
        ```
        $ git commit -m 'feat: mejora X cosa'
        ```
    - Haz push a la rama 
        ```
        $ git push origin feature/nombreUsuario-mejora
        ```
    - Abre una solicitud de Pull Request

## Licencia
Este proyecto se encuentra bajo licencia de "Mi Nombre"

## Webgrafia:
Para conseguir mi objetivo he recopilado información de:
- link a repositorios 
- link a documentacion de librerias externas
- ...

## Desarrollo:

``` js
 const developer = "datata";

 console.log("Desarrollado por: " + datata);
```  

## Agradecimientos:

Agradezco a mis compañeros el tiempo dedicado a este proyecto:

- *Jose*  
<a href="https://github.com/Dave86dev" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> 

- **David**  
<a href="https://www.github.com/userGithub/" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

- ***Mara***  
<a href="https://www.github.com/userGithub/" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank"></a> 

## Contacto
<a href = "mailto:micorreoelectronico@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/linkedinUser/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>
