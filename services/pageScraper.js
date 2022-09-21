const scraperObject = async ({
  page,
  url,
  waitForSelector,
  scrapSelector
}) => {
  console.log(`Navigating to ${url}...`);
  await page.goto(url);
  // Wait for the required DOM to be rendered
  async function scrapeCurrentPage(){
    await page.waitForSelector(waitForSelector);

    const result = await page.$eval(scrapSelector, (content) => {
      return content.outerHTML;
    })

    console.dir('result', result);
    return result;
  }

  return scrapeCurrentPage();
}

module.exports = scraperObject;