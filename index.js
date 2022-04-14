import 'dotenv/config'
import fetch from 'node-fetch';

const headers = {
  Authorization: 'Bearer ' + process.env.lichessToken,
};

fetch('https://lichess.org/api/account', { headers })
  .then(res => res.json())
  .then(console.log);