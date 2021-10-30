var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('busqueda', { title: 'Librería Cervantes', isBusqueda: true });
});

router.post('/', async(req, res, next)=> {
  console.log(req.body);

  var titulo = req.body.titulo;
  var autor = req.body.autor;
  var fecha = req.body.fecha;
  var isbn = req.body.isbn;
  var puntuacion = req.body.puntuacion;

  var obj = {
    to: "nicochiesa01@gmail.com",
    subject: "Nueva búsqueda",
    html: `Título: ${titulo}<br>Autor: ${autor}<br>Año: ${fecha}<br>ISBN: ${isbn}<br>Puntuación: ${puntuacion} estrellas`
  };

  var transport = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: process.env.SMTP_PORT,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     }
  });

  var info = transport.sendMail(obj);

  

  //Aquí se renderizaría la lista de libros
  res.render('busqueda', {  
    message: '',
  });
});

module.exports = router;