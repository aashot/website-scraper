const browserObject = require('../../../../config/browser');
const pageScraper = require('../../../../services/pageScraper.example');

module.exports = async function (req, res) {
  const browserInstance = browserObject.startBrowser();
  let browser;
  const {
    url,
    waitForSelector,
    scrapSelector
  } = req.body

  try{
    browser = await browserInstance;
    const page = await browser.newPage();
    await page.goto(url);
    const content = await pageScraper({
      page,
      url,
      waitForSelector,
      scrapSelector
    });

    browser.close();
    res.send(content);
  }
  catch(err){
    res.status(422).send({
      message: 'Invalid Selector'
    });
    console.log("Could not resolve the browser instance => ", err);
  }
}