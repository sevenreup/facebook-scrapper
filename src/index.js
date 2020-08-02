// import * as puppet from 'puppeteer';
const puppet = require("puppeteer");

(async () => {
    let browser = puppet.launch({headless: false});
    let page = await (await browser).newPage();

    await page.goto("https://www.facebook.com/groups/959750777535536").catch((reason) => {
      console.log(reason);
    })
    await page.waitForSelector('[aria-label="News Feed"]').catch((reason) => {
      console.log(reason);
    });
    console.log("lodede");
})();
