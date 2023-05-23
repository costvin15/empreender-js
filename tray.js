var headings = document.evaluate("//p[contains(., '[[[rastreio]]]')]", document, null, XPathResult.ANY_TYPE, null);
var thisHeading = headings.iterateNext();

console.log(thisHeading);
console.log(thisHeading.textContent);

thisHeading.innerHTML += "<br />Modified contents";