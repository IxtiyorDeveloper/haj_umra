import mongoose from 'mongoose';
const { Schema } = mongoose;

export const emailSchema = new Schema({email:  String});

const EmailModel = mongoose.model('Email', emailSchema);
export default EmailModel