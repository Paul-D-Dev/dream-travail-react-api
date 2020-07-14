import express from 'express';
import Product from '../models/productModel';

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
})

router.get('/:id', async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({msg: 'Product Not Found.'})
    }
})

router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        rating: req.body.rating,
        nbReviews: req.body.nbReviews,
        stock: req.body.stock,
    });

    const newProduct = await product.save();
    if(newProduct) {
        return res.status(201).send({msg: 'New product created.', data: newProduct});
    } else {
        return res.status(500).send({msg: 'Error in creating product.'});
    }
})

router.put('/:id', async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    
    if (product) {
        product.name = req.body.name;
        product.category = req.body.category;
        product.image = req.body.image;
        product.price = req.body.price;
        product.rating = req.body.rating;
        product.nbReviews = req.body.nbReviews;
        product.stock = req.body.stock;
    }

    const updateProduct = await product.save();

    if(updateProduct) {
        return res.status(201).send({msg: 'Product updated.', data: updateProduct});
    } else {
        return res.status(500).send({msg: 'Error in updating product.'});
    }
})

router.delete('/:id', async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findByIdAndDelete(productId);

    if(product) {
        return res.status(200).send({msg: 'Product deleted.'});
    } else {
        return res.status(500).send({msg: 'Error in deleting product.'});
    }
})

export default router;