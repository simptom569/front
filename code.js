var WebApp = window.Telegram.WebApp;
const searchParams = new URLSearchParams(window.location.search);
var x = new XMLHttpRequest();
let train = searchParams.get('train');
let van = searchParams.get('van');
x.open("GET", `https://82fe-87-117-49-169.ngrok-free.app/?train=$(train)&van=$(van)`, true);
x.onload = function (){
    WebApp.showAlert(x.responseText);
}
x.send(null);
