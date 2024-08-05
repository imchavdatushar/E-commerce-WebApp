import mongoose from "mongoose";



const ProductSchema = new mongoose.Schema({

    id : String,
    url : String,
    detailUrl : String,
    title : Object,
    price : Object,
    quantity : Number,
    description :String ,
    discount : String,
    tagline : String


}); 

const Product = mongoose.model('product', ProductSchema);


export default Product;