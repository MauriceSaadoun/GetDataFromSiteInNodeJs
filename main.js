const puppeteer = require('puppeteer'); 

const _url = // The Url Required;

async function run() 
{

const browser = await puppeteer.launch( {
    headless: true  //change to false in test!
}); 

const page = await browser.newPage(); 

await page.goto(_url);

var content = await page.content(); 

innerText = await page.evaluate(() =>  {
    return JSON.parse(document.querySelector("body").innerText); 
}); 

console.log("innerText now contains the JSON");


var data = innerText.raceTracks.allTracks[0];

console.log(data);
await browser.close(); 
}

run();