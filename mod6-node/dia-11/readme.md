# Diario de viajes

-   Se trata de una web donde los usuarios publican entradas sobre viajes.

-   Cada entrada tiene título, descripción, lugar y hasta 3 fotos asociadas.

-   Cada entrada puede ser votada con una puntuación entre 1 y 5.

## ENDPOINTS del diario

-   GET - [/entries] - Retorna el listado de entradas(viajes). ✅
-   GET - [/entries/:idEntry] - Retorna una entrada en concreto. ✅
-   POST - [/entries] - Crea una entrada. ✅ **TOKEN**
-   POST - [/entries/:idEntry/photos] - Añade una imagen a una entrada. ✅ **TOKEN**
-   POST - [/entries/:idEntry/votes] - Vota una entrada. ✅ **TOKEN**
-   PUT - [/entries/:idEntry] - Edita descripción o lugar de una entrada. ✅ **TOKEN**
-   DELETE - [/entries/:idEntry] - Borra una entrada. ✅ **TOKEN**
-   DELETE - [entries/:idEntry/photos/:idPhoto] - Elimina una foto de un entrada. ✅ **TOKEN**

## ENDPOINTS del usuario.

-   GET - [/users/:idUser] - Retorna información de un usuario concreto.✅
-   GET - [/users/validate/:registrationCode] - Valida un usuario recién registrado.✅
-   POST - [/users] - Crea un usuario pendiente de activar.✅
-   POST - [/users/login] - Loguea un usuario retornando un token.✅
-   PUT - [/users/:idUser] - Edita el nombre, email o avatar de un usuario.✅
-   PUT - [/users/:idUser/password] - Edita la contraseña de un usuario.✅
-   PUT - [/users/recover/password] - Envía un correo con el código de reseteo de cotraseña.✅
-   PUT - [/users/reset-password] - Cambia la contraseña de un usuario.
-   DELETE - [/users/:idUser] - Borra un usuario.
