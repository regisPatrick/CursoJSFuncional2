setTimeout(function(){
    console.log('oi 1');
}, 5000);

const minhaFuncao = function() {
    console.log('oi 3');
};

setTimeout(minhaFuncao, 5000);

console.log('oi 2');