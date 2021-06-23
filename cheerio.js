// const cheerio = require('cheerio');
// const got = require('got');

// const vgmUrl= 'https://www.buscape.com.br/search?q=celular+samsung';

// 

const cheerio = require('cheerio');
const got = require('got');
const htmlparser2 = require('htmlparser2');


const vgmUrl= 'https://www.buscape.com.br/search?q=celular+samsung';

// const isMidi = (i, link) => {
//   // Return false if there is no href attribute.
//   if(typeof link.attribs.href === 'undefined') { return false }

//   return link.attribs.href.includes('.mid');
// };

// const noParens = (i, link) => {
//   // Regular expression to determine if the text has parentheses.
//   const parensRegex = /^((?!\().)*$/;
//   return parensRegex.test(link.children[0].data);
// };

(async () => {
  const response = await got(vgmUrl);
	const dom = htmlparser2.parseDocument(response.body);
  const $ = cheerio.load(dom);

  $('.name').each((i, link) => {
    // const href = link.attribs.href;
    console.log('ELEMENT', link.nodeValue);
  });

})();