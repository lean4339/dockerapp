import express from 'express';
import mongoose from 'mongoose';



const app = express();
await mongoose.connect('mongodb://lean:123456@monguito:27017/miapps?authSource=admin')
    const Animal = mongoose.model('Animal', new mongoose.Schema({
        tipo: String,
        estado: String,
    }));


app.get('/', async (req, res) => {
    
    console.log('listando...');
    const animales = await Animal.find();
    return res.send(animales);
});

app.get('/crear', async (req, res) => {
    console.log('creando...');
    await Animal.create({ tipo: 'chanchito', estado: 'feliz' });
    return res.send('ok');

});
app.listen(3000, () => console.log('listening...'));