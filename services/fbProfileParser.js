const selectors = require('../constants/selectors/fb');

const scraperObject = async ({
  page,
  url,
  waitForSelector,
  scrapSelector
}) => {
  console.log(`Navigating to ${url}...`);
  // Wait for the required DOM to be rendered
  async function scrapeCurrentPage(){
    await page.waitForSelector(waitForSelector);

    const result = await page.$eval(scrapSelector, (content) => content.outerHTML)
    
    return result;
  }

  return scrapeCurrentPage();
}

module.exports = scraperObject;