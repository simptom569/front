var WebApp = window.Telegram.WebApp;
const searchParams = new URLSearchParams(window.location.search);
WebApp.showAlert(searchParams.has('train'));
