// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const body = document.querySelector('body')

const ulList = document.createElement('ul')

for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    const list = document.createElement('li')
    list.append(`${element}`)
    ulList.append(list)
}

body.append(ulList)


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementRemoved = document.querySelector('.fn-remove-me')

elementRemoved.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHere = document.querySelector('[data-function="printHere"]')

const ulListCars = document.createElement('ul')

for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    const list = document.createElement('li')
    list.append(`${element}`)
    ulList.append(list)
}

printHere.append(ulListCars)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countriesImages = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const countriesSchema = countriesImages.map(country => `
            <div class="country">
                <h4>${country.title}</h4>
                <img src="${country.imgUrl}" alt="${country.title}">
            </div>
        `).join(''); // Convertir el array de strings en una sola cadena

        // Agregar el HTML al contenedor
        body.innerHTML += countriesSchema;
    

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

const removeButtonLastElement = document.createElement('button')
removeButtonLastElement.textContent = 'Eliminar último elemento'

function removeLastElement () {
    const allElementsToRemove = document.querySelectorAll("div");
    allElementsToRemove[allElementsToRemove.length - 1].remove();
}

removeButtonLastElement.addEventListener("click", removeLastElement);
document.body.appendChild(removeButtonLastElement);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.
const allElementsToRemove = document.querySelectorAll("div");
for (const div of allElementsToRemove) {
    const button = document.createElement("button");
    button.textContent = "Eliminar elemento"
    button.addEventListener("click", (e) => e.target.parentElement.remove())
    div.appendChild(button);
}
