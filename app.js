const express = require('express') //1. Importo express
const app = express()

app.use(express.static('public')); //Esto es necesario para indicarle a nuestra app que tenemos una carpeta de archivos estáticos en public

//ROUTES
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/Home.html');
  })
  
  app.get('/About', (request, response)=>{
    response.send('About')
  })
  
  app.get('/Works', (request, response)=>{
    response.send('Works')
  })

  app.get('/PhotoGallery', (request, response)=>{
    response.send('PhotoGallery')
  })

  app.listen(3000, ()=>{ //3. Activar el app.listen() para que mi servidor esté activo en un puerto específico
    console.log('Servidor activo en el puerto 3000')
  })