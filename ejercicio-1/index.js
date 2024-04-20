// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showMe = document.querySelector('.showme')
console.log('showMe', showMe)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado = document.querySelector('#pillado')
console.log('pillado', pillado)

// 1.3 Usa querySelector para mostrar por consola todos los p

const allP = document.querySelectorAll('p')
console.log('allP', allP)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon

const allPokemons = document.querySelectorAll('.pokemon')
console.log('allPokemons', allPokemons)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".

const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log('allTestMe',allTestMe)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log('testMe',testMe[2])