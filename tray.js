var elements = document.evaluate("//p[starts-with(., '[[[rastreio.net-') and contains(., ']]]')]", document, null, XPathResult.ANY_TYPE, null);
var element = elements.iterateNext();
var content = element.textContent;
var regex = /\[\[\[rastreio\.net-[A-Za-z0-9]+\]\]\]$/;

if (regex.test(content)) {
    content = content.replaceAll('[', '');
    content = content.replaceAll(']', '');
    
    var occurences = content.split('-');
    var clientId = occurences[1].slice(2);

    element.innerHTML = `<div id="rastreioDiv" data-user="${clientId}"></div><script id="rastreioScript" data-user="${clientId}"></script>`;
}