Catálogo Geek (Animes)
- Lexter y Carlos

DESCRIPCIÓN
-----------
Pequeña web que muestra un listado de nuestros animes favoritos. 
Combina HTML para la estructura y un archivo XML que actúa como base de datos.

CÓMO FUNCIONA
-------------
1. En el listado (index.html), cada botón envía un identificador en el enlace (por ejemplo: detalls.html?id=G001).

2. La página de detalle (detalls.html) recibe ese ID a través de la URL.

3. El script Javascript (carrega-xml.js) lee el archivo dades.xml, busca el anime que corresponde a ese ID y rellena la ficha automáticamente.