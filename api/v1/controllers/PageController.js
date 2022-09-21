const browserObject = require('../../../config/browser');
const pageScraper = require('../../../pageScraper');


exports.scrap = async (req, res) => {
	console.log('we are here');
	let browserInstance = browserObject.startBrowser();
	let browser;
  const {
		url,
		waitForSelector,
		scrapSelector
	} = req.body
	try{
		browser = await browserInstance;
		let page = await browser.newPage();
		const content = await pageScraper({
			page,
      url,
			waitForSelector,
			scrapSelector
    });	
		
		res.send(content);
		browser.close();
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}
