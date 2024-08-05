import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slides";
import MidSlide from "./MidSlide";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../Redux/actions/ProductActions";
import { useDispatch , useSelector } from "react-redux";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {

    const {products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch]);

    return(
        <>
        <NavBar/>
        <Component>
            <Banner/>
            <MidSlide products={products} />
            <MidSection /> 
            <Slide products={products} title='Deals of the day' timer={true}/>
            <Slide products={products} title='Discounts for you' timer={false}/>
            <Slide products={products} title='Suggesting items'  timer={false}/>
            <Slide products={products} title='Top selection'  timer={false}/>
            <Slide products={products} title='Recommended Items'  timer={false}/>
            <Slide products={products} title='Trending offers'  timer={false}/>
            <Slide products={products} title="Season's top pic"  timer={false}/>
            <Slide products={products} title="Tpo deals on accesories"  timer={false}/>
        </Component>
        </>
    )



};

export default Home;
