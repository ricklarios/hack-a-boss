# ENDPOINTS

## Application

```
{
    id,
    title,
    description,
    idUser
}
```

-   **GET** - [/stories] - Lista de relatos. ✅
-   **GET** - [/stories/:idStory] - Obtener info de un relato concreto. ✅
-   **POST** - [/stories] - Insertar un nuevo relato. ✅
-   **PUT** - [/stories/:idStory] - Nos perminte editar un relato. ✅
-   **DELETE** - [/stories/:idStory] - Eliminar un relato. ✅

## Users

```
{
    id,
    email,
    password,
    deleted
}
```

-   **GET** - [/users/:idUser] - Obtener info de un usuario. ✅
-   **POST** - [/users] - Crear un usuario. ✅
-   **POST** - [/users/login] - Login de usuario. ✅
-   **PUT** - [/users] - Editar datos de usuario. ✅
-   **PUT** - [/users/password] - Editar contraseña. ✅
-   **DELETE** - [/users] - Desactivar usuario. ✅
