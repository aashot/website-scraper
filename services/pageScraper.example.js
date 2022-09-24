const pageScraper = async ({
  page,
  url,
  waitForSelector,
  scrapSelector
}) => {
  try {
    console.log(`Navigating to ${url}...`);
    await page.goto(url);
    // Wait for the required DOM to be rendered
    async function scrapeCurrentPage(){
      await page.waitForSelector(waitForSelector);
  
      const result = await page.$eval(scrapSelector, (content) => content.outerHTML)
      
      return result;
    }
  
    return scrapeCurrentPage();
  } catch (error) {
    console.log('pageScraper service:', error) 
  }
}

module.exports = pageScraper;