// const express = require("express");

// const mysql = require('mysql');

// const app = express();  

// app.use(express.json());

// const connection = mysql.createConnection({
//   host: '172.17.0.2',
//   user: 'root', 
//   password: 'root1', 
//   database: 'prueba', 
// });
// //*********************   CONEXIÓN    ********************************* */
// connection.connect(function(err) {
//   if (err) {
//       console.error('Error de conexion: ' + err.stack);
//       return;
//   }
//   console.log('Conectado con el identificador ' + connection.threadId);
// });

//*******************    CONSULTA SIMPLE    *************************** */
app.get('/', (req, res) => {
  connection.query('SELECT id, apellidos, nombres, dni FROM alumnos', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

// //************************   SERVIDOR **************************** */
// app.listen(3000,()=>{
//     console.log("Servidor corriendo en el puerto 3000(si sale esto es pq andaaaa!!!)")
// });

//  TODA ESTE CODIGO HASTA ACA FUNCIONA 


// app.get('/', (req, res) => {
//     connection.query('SELECT id, apellidos, nombres, dni FROM alumnos', function (error, results, fields) {
//       if (error) throw error;
  
//       res.json(results);
  
//       let partesHtml = '<table>';
//       partesHtml += '<tr><th>Id</th> <th>Apellidos</th> <th>Nombres</th> <th>DNI</th> </tr>'
  
//       results.forEach(registro => {
//         partesHtml += `<tr><td>${registro.id}</td> 
//                           <td>${registro.apellidos}</td>
//                           <td>${registro.nombres}</td>
//                           <td>${registro.dni}</td></tr>`
//       });
//         partesHtml += '<table/>'
  
//         const htmlFinal = `<html>
//                               <head>
//                                 <title>Tabla de alumnos</title>
//                               </head>
//                               <body>
//                                 <h1>
//                                   Tabla de los alumnos
//                                 </h1>
//                                   ${partesHtml}
//                               </body>`;
//         res.send(htmlFinal);
//       });
//     });