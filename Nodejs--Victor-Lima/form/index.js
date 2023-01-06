const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    // Routers
        app.get('/', (req, res)=>{
            res.send('Main')
        });


const port = process.env.port || 8080;
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
});