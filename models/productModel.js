import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true },
    image: {type: String, required: true},
    price: {type: Number, required: true, default: 0},
    rating: {type: Number, required: false, default: 0},
    nbReviews: {type: Number, required: false, default: 0},
    stock: {type: Number, required: true, default: 0}
});

const productModel = mongoose.model('Product', productSchema);

export default productModel; 