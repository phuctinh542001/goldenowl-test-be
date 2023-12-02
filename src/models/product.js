import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Product = new Schema({
  id: Number,
  image: String,
  name: String,
  description: String,
  price: Number,
  color: String 
});

export default mongoose.model('product', Product);