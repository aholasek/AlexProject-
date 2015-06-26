
// python -m SimpleHTTPServer 8000


function callback(a){
    return function(){
    	prompt("What do you think of this " + a);
    }
}
var a = "website?";
setTimeout(callback(a), 5000);
a = "Stac Overflow";