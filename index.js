const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const vgmUrl= 'https://www.buscape.com.br/search?q=celular+samsung';

(async () => {
  const response = await got(vgmUrl);
  const dom = new JSDOM(response.body, {
		url: "https://www.buscape.com.br",
		referrer: "https://www.buscape.com.br",
		contentType: "text/html",
		includeNodeLocations: true,
		storageQuota: 10000000
	});

		const product = [];

  const imageList = 		[...dom.window.document.querySelectorAll('.image')];

	imageList.forEach((link, index) => {
		const obj = {
			title: link.alt,
			thumbnail: link.src
		}
    product.push(obj);
  });

	const priceList = [...dom.window.document.querySelectorAll('.mainValue')];

  priceList.forEach((link, index) => {
    product[index].price = link.innerHTML;
  });

	console.log('PRODUCT', product)

})();