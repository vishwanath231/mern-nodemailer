import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import Router from './router.js';
import path from 'path';


dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.use('/api/contact', Router);


// Heroku deployment
const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
}else{

    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.underline);
})