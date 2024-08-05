import express from 'express';
import Connection from './database/Db.js';
import dotenv from 'dotenv';
import {v4 as uuid} from 'uuid';
//  import DefaultData from './default.js'
import Router from './routes/Route.js'
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

  dotenv.config();


app.use(cors());
app.use(bodyParser.json( {extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', Router)

const PORT = 5000;

Connection();

app.listen(PORT , () => console.log(`Connected succesfully to PORT ${PORT}`));

//  DefaultData();
  
export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:5000/callback'
paytmParams['EMAIL'] = 'kunaltyagi@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'
