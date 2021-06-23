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

  // Create an Array out of the HTML Elements for filtering using spread syntax.
  const nodeList = [...dom.window.document.querySelectorAll('.image')];

  nodeList.forEach(link => {
    console.log('ALT', link.src);
  });
})();