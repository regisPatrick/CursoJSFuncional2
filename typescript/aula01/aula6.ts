const teste1 = (): void => console.log('1')

setTimeout(teste1, 1000)

console.log('2')

//----------------------------------------------

const loading2 = setInterval((): void => console.log('Loading...'), 500)

setTimeout(() => {
    clearInterval(loading2)
    console.log('Loaded')
}, 3000)

//-----------------------------------------------

const message1 = (nome: string): string => 'Hello ' + nome

console.log(message1('Regis'))

//-----------------------------------------------

const soma1 = (x: number, y: number): number => x + y

console.log(soma1(1, 2))
console.log(soma1(6, 34))

//------------------------------------------------   Para executar npm run dev