const http = require('http');
const mongoose = require('mongoose');

const app = require('./backend/app');

const PORT = process.env.PORT || 5000;

app.set('PORT',PORT)
const server = http.createServer(app)

// mongoose connect 
// mongoose.connect('mongodb://localhost:27017/BookStore')
mongoose.connect('mongodb+srv://EBookalypse:rWCaMtf7016NIOPs@cluster0.jgx2q.mongodb.net/BookStore?retryWrites=true&w=majority')
.then(()=>{
    server.listen(PORT,()=>{
        console.log(`we are listening to 'http://localhost:${PORT}/'`)
    })
})
.catch((err)=>{console.log(err)})

