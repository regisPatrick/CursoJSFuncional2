const getNome3 = function() {
    console.log("Regis");
};

getNome3();

const getNome4 = () =>
    console.log("Regis");

getNome4();

const getNome5 = function(): void {
    console.log('Regis');
};

getNome5();

const getNome6: Function = function(): void {
    console.log('Regis');
}

getNome6();

const getNome7: () => void = function(): void {
    console.log('Regis');
};

getNome7();