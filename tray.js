var headings = document.evaluate("//p[contains(., '[[[rastreio.net-RAJ24WP3E]]]')]", document, null, XPathResult.ANY_TYPE, null);
var thisHeading = headings.iterateNext();

console.log(thisHeading);
console.log(thisHeading.textContent);

thisHeading.innerHTML = '<div id="rastreioDiv" data-user="J24WP3E"></div><script id="rastreioScript" data-user="J24WP3E"></script>';