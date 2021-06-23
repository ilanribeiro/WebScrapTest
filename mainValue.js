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

  const nodeList = [...dom.window.document.querySelectorAll('.mainValue')];

  nodeList.forEach(link => {
    console.log(link.innerHTML);
  });
})();