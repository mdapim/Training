import { default as fetch } from 'node-fetch';

//const {default as fetch} = require('node-fetch');

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function callAPI(requestNum) {
  let today = new Date();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  console.log('time', time);
  console.log('request number', requestNum);

  const response = await fetch(
    'https://www.saashub.com/api/alternatives/React?api_key=ncpzmk6rcbvuaqhak35syeqoiv67pbgh',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );

  let result = await response;
  console.log(result.status);
}

async function main() {
  for (let i = 0; i < 25; i++) {
    doSetTimeout(i);
    await delay(10000);
  }
}

function doSetTimeout(i) {
  callAPI(i);
}

main();
