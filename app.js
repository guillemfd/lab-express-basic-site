const express = require('express') //1. Importo express
const app = express()

app.use(express.static(__dirname + '/public')); //Esto es necesario para indicarle a nuestra app que tenemos una carpeta de archivos estáticos en public

//ROUTES
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/views/Home.html');
  })
  
app.get('/About', (request, response)=>{
  response.sendFile(__dirname + '/views/about.html')
})

app.get('/Works', (request, response)=>{
  response.sendFile(__dirname + '/views/works.html')
})

app.get('/PhotoGallery', (request, response)=>{
  response.sendFile(__dirname + '/views/photoGallery.html')
})

app.listen(3000, ()=>{ //3. Activar el app.listen() para que mi servidor esté activo en un puerto específico
  console.log('Servidor activo en el puerto 3000')
  console.log(__dirname)
})  
