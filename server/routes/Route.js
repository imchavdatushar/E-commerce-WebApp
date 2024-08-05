import express from 'express';
import { userSignup, userLogin } from '../controller/User-controller.js';
import { getProductById, getProducts } from '../controller/Product-controller.js';
import {addPaymentGateway,paymentResponse} from '../controller/Payment-controller.js'


const Router = express.Router();

Router.post('/signup', userSignup);
Router.post('/login', userLogin);

Router.get('/products', getProducts);
Router.get('/product/:id', getProductById)

Router.post('/payment', addPaymentGateway)
Router.post('/callback', paymentResponse);

export default Router;