onmessage = function(e) {
    console.log('Message received from main script');
    var reversed = e.data.split("").reverse().join("");
    console.log('Posting message back to main script');
    postMessage(`That's ${reversed} backwards!`);
}