// Create JSON Request to QuoteDesign
var xhttp = new XMLHttpRequest();
var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var quote = JSON.parse(xhttp.responseText)[0];
       console.log(quote);
       document.getElementById("quoteText").innerHTML = quote.content;
       document.getElementById("quoteSource").innerHTML = "- " + quote.title;
       //console.log(xhttp.responseText);
    }
};
xhttp.open("GET", url, true);
xhttp.send();
