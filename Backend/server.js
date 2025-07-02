import express from 'express';

const app = express();
//EXPRESS KA MIDDLEWARE for SERVING STATIC FILES
//app.use(express.static('dist'))

app.get('/', (req,res) =>{
    res.send('Server is ready');
})

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id:1,
            title:'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title:'A sdf joke',
            content: 'ssThis is a joke'
        },
        {
            id:3,
            title:'A jsdfoke',
            content: 'This is a jsdoke'
        },
        {
            id:4,
            title:'A jdfoke',
            content: 'This is a jasoke'
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost: ${port}`)
});