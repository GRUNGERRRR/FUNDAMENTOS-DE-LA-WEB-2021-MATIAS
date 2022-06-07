# FUNDAMENTOS-DE-LA-WEB-2021- 31-05-2022
¿como funciona la internet?
R... La internet funciona a base de solicitudes y respuestas a un servidor
----------------------------------------------------------------------------------
¿Que es una Solicitud y una Respuesta?
R... Una solicitud es la peticion que hace el usuario y/o cliente y la respuesta lo que el servidor le responde a aquella persona con la peticion que el cliente a pedido (resultados de la busqueda) En todos estos casos, este contenido se proporciona al cliente como una combinación de HTML, CSS y JavaScript.
# FUNDAMENTOS-DE-LA-WEB-2021- 02-06-2022
// 
<!--Encabezados.html-->
Para mi un encabezado es lo primero que se ve en una pagina web, es el titulo, la parte de arriba de un sitio web.
----------------------------------------------------------------------------------
<!--Parrafos.html-->
Para mi un parrafo es una caja con texto con la misma referencia de tematica.
----------------------------------------------------------------------------------
<!--Vinculos.html-->
Lo que permite tener una cualidad y tener una condicion, algo que los identifica(diferencia del resto).
----------------------------------------------------------------------------------
<!--emphasis-strong.html-->
emphasis (enfasis) es hacer el texto en cursiva (deductiva).
strong es hacer el texto en negrita
----------------------------------------------------------------------------------
<!--sintaxis-->
Para mi cada pagina tiene esta armada por distintos ELEMENTOS que especifican diferentes contenidos, La sintaxis para indicar el tipo de elemento es con etiquetas.
----------------------------------------------------------------------------------
<!--listasytabla.html-->
Aquí hay algunos elementos más. A la izquierda está cómo los escribiríamos en código, y a la derecha está cómo se mostraría ese código en el navegador.
----------------------------------------------------------------------------------
<!--lista-desordenadas.html-->
ul y li
Ul para mi vendria siendo el padre de Li, ya que Ul va primero.
Ul(Lista)
lI(Items)
<!--listas-ordenadas.html-->
ol y li
es un item que se ordena por numeros y asi tenemos todo en orden (lista ordenada).
----------------------------------------------------------------------------------
<!--tablas-->
tr = fila de la tabla
th = encabezado de mi tabla
td = detalle de la tabla
Ejemplo
Película	Año	    Calificación
Up	        2009	   PG
Matrix	    1999	   R
----------------------------------------------------------------------------------
<!--imagenes-->
src = fuente (la ruta del archivo de imagen)
alt = alternativa
----------------------------------------------------------------------------------
<!--videos-->
src = fuente (la ruta del archivo de imagen)
controls = es para mostrar los controles de video (como boton de repro/pausa,etc)
autoplay = reproducir enseguida cuando el video este listo (automaticamente)
loop = para hacer un buqle, que el video comienze denuevo cada vez que se termine 
muted = especifica que la salida de audio del video debe silenciarse
----------------------------------------------------------------------------------
<!--quiz-elemental.html-->
<!DOCTYPE html>  
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Ninja</title>
    </head>
    <body>
        <h1>Ninja</h1>
        <p>
            Ninja son los practicantes del arte japonés de 
            <a href="<a href="https://en.wikipedia.org/wiki/Ninjutsu">https://en.wikipedia.org/wiki/Ninjutsu</a>">ninjutsu.</a>
        </p>
        <p>Algunas técnicas comunes son:</p>
        <ul>
            <li>Sigilo</li>
            <li>Ocultarse</li>
            <li>Kenjutsu</li>
        </ul>
    </body>
</html>
----------------------------------------------------------------------------------
<!--PCS-->
Es un termino para describir la relacion entre etiquetas/elementos dentro de un documento HTML.
ej:
Del HTML anterior puedes inferir:
<html> es el elemento raízBlue and black robot with white background
<html> no tiene padres
<html> es el padre de <head> y <body>
<head> es el primer hijo de <html>
<body> es el último hijo de <html>
y:
<head> tiene un hijo: <title>
<title> tiene un contenido (texto):  "¡Hola, mundo!"
<body> tiene dos hijos: <h1> y <p>
<h1> tiene un contenido (texto): "Aquí hay una etiqueta de encabezado"
<p> tiene un contenido (texto): "Ahora, una etiqueta de párrafo"
<h1> y <p> son hermanos
<head> y <body> son hermanos
estos son un par de ejemplos.
----------------------------------------------------------------------------------
<!--formularios-->
ENTRADA DE TEXTO
type: texto
name: "first_name"
input: le indico que tipo de texto le mando
ej: <input type="text" name="first_name">
---------------------------------------------------------------------------------------
ENTRADA NUMERICA
type: "number" 
name: "age"
ej: <input type="number" name="age">
---------------------------------------------------------------------------------------
CONTRASEÑAS
type: "password"
name: "password
ej: <input type="password" name="password">
---------------------------------------------------------------------------------------
FECHA
type: "date"
name: "dob
ej: <input type="date" name="dob">
---------------------------------------------------------------------------------------
COLOR
type: "color"
name: "text_color"
<input type="color" name="text_color">
---------------------------------------------------------------------------------------
RADIO
La inclusión de los atributos "id" y "for" permite hacer clic en el texto de la etiqueta para cambiar las entradas.
<input type="radio" name="font" value="bold" id="bold">
<label for="bold"><strong>Negrita</strong></label>
<input type="radio" name="font" value="normal" id="normal">
<label for="normal">Normal</label>
---------------------------------------------------------------------------------------
CASILLA DE VERIFICACION
<input type="checkbox" name="accept" id="accept">
<label for="accept">Estoy de acuerdo</label>
AREA DE TEXTO 
<textarea name="comment" cols="20" rows="3"></textarea>
---------------------------------------------------------------------------------------
SELECCIONAR
<select name="snack">
    <option>Almonds</option>
    <option>Cheese and Crackers</option>
    <option>Pita and Hummus</option>
    <option>Pears</option>
</select>
---------------------------------------------------------------------------------------
UN FORMULARIO TIPICO
Los formularios suelen tener más etiquetas que solo las entradas. Por lo general, se usan con <label>, <divy> un botón 
(<input type="submit" value="Button Text" >) para enviar el formulario. No tenemos que preocuparnos demasiado por <action> o <method> todavía.  Se volverán importantes una vez que comencemos a trabajar con un servidor back-end.
---------------------------------------------------------------------------------------
<!--divs-->
El elemento div sirve para que creemos una division en nuestro codigo donde podemos agrupar etiquetas que tienen un proposito comun 

<form action="/process" method="post">
    <div>
        <label>Nombre: </label>
        <input type="text" name="name" 
        placeholder="Your name..." >
    </div>
    <div>
        <label>Email: </label>
        <input type="text" name="email" 
        placeholder="Your email..." >
    </div>
    <div>
        <input type="checkbox" name="offers" 
        id="offers" checked >
        <label for="offers">Me gustaría 
        recibir correos con ofertas.</label>
    </div>
    <input type="submit" value="Sign up" >
</form>
¡








