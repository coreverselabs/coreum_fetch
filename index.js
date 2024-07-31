import axios from 'axios';
import * as cheerio from "cheerio";

const add = 'core1x9hd9r7duv2gagztvvqlw94v5gy4zd9x5f7kl9';//'core1zn2ns3ls68jlsv5dgkuz0rxsxt5fhk7n9cfl23';

const add2 = 'core1zgdprlr3hz5hhke9ght8mq723a8wlnzqwd60hm';

const nft = 'mc-core1zgdprlr3hz5hhke9ght8mq723a8wlnzqwd60hm';

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


async function fetch_nft(add, nft){
    const url = 'https://full-node.mainnet-1.coreum.dev:1317/coreum/nft/v1beta1/balance/'.concat(add).concat('/').concat(nft);
     try {
        const response = await axios.get(url);

         console.log(response.data.amount);

    }
    catch (e){
        console.log(e);
    }

}


await fetch_bal(add);
await fetch_nft(add2, nft);
