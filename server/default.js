import { products } from "./constatnts/data.js"
import Product from "./model/product-schema.js";



const DefaultData = ()=>{

    try {

        Product.insertMany(products);
        console.log('Data imported successfully');
        
    } catch (error) {
        
        console.log('Error while inserting default data',error.message);


    }

}


export default DefaultData;