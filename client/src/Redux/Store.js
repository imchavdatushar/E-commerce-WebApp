import {createStore, combineReducers , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getProductDetailsReducer, getProductsReducer } from './reducers/ProductReducer';
import { getProductDetails } from './actions/ProductActions';
import { cartReducer } from './reducers/cartReducer';


const reducer = combineReducers({
    getProducts : getProductsReducer,
    getProductDetails : getProductDetailsReducer,
    cart : cartReducer
});  

const middleware = [thunk];

const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;