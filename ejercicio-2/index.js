// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const body = document.querySelector('body')

const divEmpty = document.createElement('div')

body.append(divEmpty)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divWithP = document.createElement('div')
const pForDiv = document.createElement('p')

divWithP.append(pForDiv)
body.append(divWithP)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

const divWithSixP = document.createElement('div')

for (let i = 0; i < 6; i++) {
const sixPForDiv = document.createElement('p')
    divWithSixP.append(sixPForDiv)
}
body.append(divWithSixP)

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

const pWithText = document.createElement('p')

pWithText.append('Soy dinámico!')
body.append(pWithText)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const hWithText = document.querySelector('h2.fn-insert-here')

hWithText.append('Wubba Lubba dub dub')

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ulList = document.createElement('ul')

for (let i = 0; i < apps.length; i++) {
    const element = apps[i];
    const list = document.createElement('li')
    list.append(`${element}`)
    ulList.append(list)
}

body.append(ulList)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementsWithClassNameRemove = document.querySelectorAll('.fn-remove-me')

elementsWithClassNameRemove.forEach(element => element.remove())

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

var parrafoHTML = '<p>Voy en medio!</p>';

var div1 = document.querySelector('div');

div1.insertAdjacentHTML('afterend', parrafoHTML);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

const divWithClass = document.querySelectorAll('div.fn-insert-here')

divWithClass.forEach(element => {
    const pElement = document.createElement('p')
    pElement.append('Voy dentro!')
    element.append(pElement)
})
