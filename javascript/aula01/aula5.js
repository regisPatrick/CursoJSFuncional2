const loading = setInterval(function () {
    console.log('Loading...');
}, 500);

setTimeout( function () {
    clearInterval(loading);
    console.log('Loaded')
}, 3000);