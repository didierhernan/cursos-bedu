const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors')

/*HELMET: Es un conjunto de middlewares (son 15) que aplican diferentes políticas a 
los request de nuestro sitio.  Estos middlewares revisan temas de ataques cross-site 
scripting, prefetching de DNS y otros mas*/
app.use(helmet());

/*CORS: Es un conjunto de reglas que identifican los origenes desde donde se permitiran 
 acceso a nuestras páginas. Con esto, puedo bloquear el acceso a mis paginas y/o 
 recursos a un dominio especifico.  Cada request llega con un header desde donde se 
 identifica el origen de la peticion y es con este, que el CORS actua para permitir o
  bloquear*/
app.use(cors());

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', require('./routes'))

app.listen(3001, () => {
    console.log('Express on port 3001')
})


// Usuario tipo cliente y Admins
// Registro y login = Seguridad
// Productos
// Reseñas
// Ordenes de compras

// Rutas Models