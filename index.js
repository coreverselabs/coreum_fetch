import axios from 'axios';
import * as cheerio from "cheerio";

const add = 'core1x9hd9r7duv2gagztvvqlw94v5gy4zd9x5f7kl9';//'core1zn2ns3ls68jlsv5dgkuz0rxsxt5fhk7n9cfl23';

//const add = '0xb5b011030eacc4f6994d35d84ff6cf936a7d4fdc17cfe9f0a554246bced32852';

async function fetch_bal(add){
    const url = 'https://full-node.mainnet-1.coreum.dev:1317/coreum/asset/ft/v1/accounts/'.concat(add).concat('/balances/summary/ucore');
     try {
        const response = await axios.get(url);
     
         console.log(response.data.balance);

    }
    catch (e){
        console.log(e);
    }
    
    }


await fetch_bal(add);

