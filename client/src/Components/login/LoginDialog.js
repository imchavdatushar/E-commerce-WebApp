import {Dialog, Box, TextField, Typography,Button, styled} from '@mui/material';
import { useState , useContext } from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/Api';
import  {  DataContext } from '../../context/Data-Provider';

const Component = styled(Box)`
    height : 70vh;
    width : 90vh;
`
const Image = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height : 83%;
    width : 28%;
    padding : 45px 35px;
    & > p, &>h5{
        color: #FFFFFF;
        font-weight : 600px;
    }
`

const Wrapper = styled(Box)`
    display : flex;
    flex-direction : column;
    padding : 25px 35px;
    flex : 1;
    & > div, & > button, &> p {
        margin-top : 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform : none;
    background : #FB641B;
    color : #fff;
    height : 48px;
    border-radius 2px;
`

const RequestOtp = styled(Button)`
    text-transform : none;
    background : #fff;
    color : #2874f0;
    height : 48px;
    border-radius 2px;
    box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%)
`

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`

const CreateAccount = styled(Typography)`
    font-size : 14px;
    text-align : center;
    color: #2874f0;
    font-weight : 600; 
    cursor : pointer;

`

const Error = styled(Typography)`
    font-size : 10px;
    color : #ff6161;
    line-height : 0;
    margine-top : 10px;
    font-weight : 600;
`

const accountInitialvalues = {
    login : {
        view : 'login',
        heading :'Login',  
        subHeading : "Get access to your orders, Wishlists and recomendations"
    },
    signup : {
        view : 'signup',
        heading : "Looks like you're new here",
        subHeading : "Sign up with your mobile number to get started"
    }
    
}

const signupInitialvalues = {
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : '',
    mobile : ''
}

const loginInitialValues = {
    username : '',
    password : ''
}




const LoginDialog = ({open, setOpen})=>{


    const[account, toggleAccount] = useState(accountInitialvalues.login);
    const[signup, setSignup] = useState(signupInitialvalues);
    const{setAccount} = useContext(DataContext);
    const [login , setLogin] = useState(loginInitialValues);
    const [error , setError] = useState(false);

    const handleClose =()=>{
        setOpen(false);
        toggleAccount(accountInitialvalues.login);
        setError(false);
    }

    const toggleSignup = ()=>{
        toggleAccount(accountInitialvalues.signup)
    }

    const onInputchange =(e)=>{
        setSignup({...signup, [e.target.name]: e.target.value});
        console.log(signup);
    }

    const signpUser =async ()=>{
      let response =await authenticateSignup(signup);
      if(!response) return;
      handleClose();
      setAccount(signup.firstname);
    }


    const onValuechange = (e)=> {
        setLogin({ ...login, [e.target.name]: e.target.value});
    }

    const loginUser = async () => {
      let response =  await authenticateLogin(login);
      console.log(response);
      if(response.status === 200){
        handleClose();
        setAccount(response.data.data.firstname);
      }
      else{
        setError(true);
      }
    }


    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx :{ maxWidth: 'unset'} }}> 
            
            <Component>
                <Box style={{display : 'flex', height : '100%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                    </Image>
            {
                account.view === 'login'?
                <Wrapper>
                    <TextField variant="standard" onChange={(e)=>{onValuechange(e)}} name='username' label="Enter Username"/>
                  {error &&  <Error>Please enter valid username or password</Error> }
                    <TextField variant="standard" onChange={(e)=>{onValuechange(e)}} name='password' label="Enter Password"/>
                    <Text>By continuing, you agree to Flipkart's Term of Use and Privacy Policy.</Text>
                    <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOtp>Request OTP</RequestOtp>
                    <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
                </Wrapper>
                :
                <Wrapper>
                    <TextField variant="standard" onChange={(e)=>{onInputchange(e)}} name='firstname' label="Enter Firstname"/>
                    <TextField variant="standard" onChange={(e)=>{onInputchange(e)}} name='lastname' label="Enter Lastname"/>
                    <TextField variant="standard" onChange={(e)=>{onInputchange(e)}} name='username' label="Enter Username"/>
                    <TextField variant="standard" onChange={(e)=>{onInputchange(e)}} name='email' label="Enter Email"/>
                    <TextField variant="standard" onChange={(e)=>{onInputchange(e)}} name='password' label="Enter Password"/>
                    <TextField variant="standard" onChange={(e)=>{onInputchange(e)}} name='mobile' label="Enter Mobile Number"/>
                    <LoginButton onClick={()=>signpUser()}>Continue</LoginButton>
                </Wrapper>

            }    
                </Box>
            </Component>

        </Dialog>
    )
}


export default LoginDialog;