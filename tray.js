var headings = document.evaluate("//p[contains(., '[[[rastreio]]]')]", document, null, XPathResult.ANY_TYPE, null);
var thisHeading = headings.iterateNext();

console.log(thisHeading);
console.log(thisHeading.textContent);

thisHeading.innerHTML = '<div id="rastreioDiv"></div><script type="text/javascript" id="rastreioScript" data-user="J24WPnA" src="https://empreender.nyc3.cdn.digitaloceanspaces.com/static/RASTREIOPUB/rastreio.js"></script>';