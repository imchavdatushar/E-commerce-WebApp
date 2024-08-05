
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import DetailView from './Components/details/DetailView';
import {Box} from '@mui/material';
import DataProvider from './context/Data-Provider';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Cart from './Components/cart/Cart';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
          <Header/>
          <Box style={{marginTop:54}}>
            <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/product/:id' element={<DetailView/> } />
             <Route path='/cart' element={<Cart/>} />
            </Routes>
          </Box>
      </BrowserRouter>
   </DataProvider>
  );
}

export default App;
