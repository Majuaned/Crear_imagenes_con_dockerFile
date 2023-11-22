const express = require("express");

const mysql = require('mysql');

// const iconv = require('iconv-lite')

const app = express();

app.use(express.json());

//************************  CONEXIÓN   ************ */
const connection = mysql.createConnection({
  host: '172.17.0.3',
  user: 'root', 
  password: 'root1', 
  database: 'prueba', 
});

connection.connect(function(err) {
  if (err) {
    console.error('Error de conexion: ' + err.stack);
    return;
  }
  console.log('Conectado con el identificador ' + connection.threadId);
});

//******************     CONSULTA SIMPLE    ********************* */
app.get('/', (req, res) => {
  connection.query('SELECT id, apellidos, nombres, dni FROM alumnos', function (error, results, fields) {
    if (error) throw error;

    //*******************   CONSTRUCCIÓN TABLA HTML  *****************/
    // DECLARACIÓN DE LA VARIABLE Q CONTENDRA A TODA LA TABLA
    //* ENCABEZADO TABLA */
    let tableHtml = '<table>';
    tableHtml += '<tr><th>Id</th> <th>Apellidos</th> <th>Nombres</th> <th>DNI</th> </tr>';

    //* CUERPO TABLA
    results.forEach(registro => {
      tableHtml += `<tr><td>${registro.id}</td> 
                        <td>${registro.apellidos}</td>
                        <td>${registro.nombres}</td>
                        <td>${registro.dni}</td></tr>`;
    });
    //* PIE DE TABLA
    tableHtml += '</table>';

    //****** RENDERIZADO DEL HTML CON LA TABLA  ******/
    // res.setHeader('Content-Type', 'text/html; charset=UTF-8')
    const htmlResponse = `
    <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Trabajo Práctico Tabla de Alumnos con Node en contenedor Apache</title>
        </head>

        <body>
          <h1>Tabla de Alumnos</h1>
          ${tableHtml}
        </body>
      </html>
    `;
    res.send(htmlResponse);
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000 (si sale esto es pq andaaaa!!!)")
});
