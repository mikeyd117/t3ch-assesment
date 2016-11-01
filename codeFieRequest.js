var webUrl = new XMLHttpRequest();
webUrl.open("GET","http://challenge.code2040.org/api/register", false);
webUrl.send();

console.log(webUrl.status);
console.log(webUrl.statusText);
