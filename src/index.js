const puppet = require("puppeteer");

(async () => {
    let browser = await puppet.launch({headless: false});
    let page = await (await browser).newPage();

    await page.goto("https://www.facebook.com/groups/959750777535536", {waitUntil: 'domcontentloaded'}).finally(() => {
      console.log("finished");
    });
    await page.waitForSelector('[aria-label="News Feed"]');
    const elms = await page.evaluate(() => {
      const posts = Array.from(document.querySelectorAll('[id^="mall_post"]'));
      return posts.map((post) => {
        window.console.log(post)
        const arrays = post.innerText.split('\n');
        return { name: arrays[0], time: arrays[1], content: arrays.slice(3, (arrays.length - 4))}
      });
    });

    console.log(elms);
})();
