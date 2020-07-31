var myWorker = new Worker('worker.js');

const messageInput = document.querySelector('#message');
const messageForm = document.querySelector('#form');
const responseDialog = document.querySelector('#response');

form.onsubmit = function() {
    myWorker.postMessage(messageInput.value);
    console.log('Message posted to worker');
    return false;
}

myWorker.onmessage = function(e) {
    responseDialog.textContent = e.data;
    console.log('Message received from worker');
}