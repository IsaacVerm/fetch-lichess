import 'dotenv/config'
import fetch from 'node-fetch';

const params = new URLSearchParams({
    max: 5
});

const headers = {
  Authorization: 'Bearer ' + process.env.lichessToken
};

const response = await fetch('https://lichess.org/api/games/user/Isaacinator?' + params.toString(), { headers })
const body = await response.text()
console.log(body)