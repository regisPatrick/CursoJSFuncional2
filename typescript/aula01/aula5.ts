const loading1 = setInterval(function (): void {
    console.log('Loading...');
}, 500);

setTimeout( function (): void {
    clearInterval(loading1);
    console.log('Loaded')
}, 3000);