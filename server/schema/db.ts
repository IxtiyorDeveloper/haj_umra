import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://jasurbek:ahi4YKbYQDFBa6bZ@cluster0.bwjgqvg.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));