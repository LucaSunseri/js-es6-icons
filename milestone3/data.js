const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const sectionMain = document.querySelector('.ls-section-main');

const form = document.querySelector('.form-select');


const animal = icons.filter((icon) => icon.type === 'animal' );
const vegetable = icons.filter((icon) => icon.type === 'vegetable' );
const user = icons.filter((icon) => icon.type === 'user' );


// Utilizzo delle funzioni create per stampare il tutto
stampTemplate(icons);
form.addEventListener("change",stampEveryTemplate);


// Funzione che crea il Template 
function createTemplate(target, arreyObject) {

	const {name, color, type} = arreyObject;

	const category = document.createElement('div');
	category.className = `col ls-padding ${type}`;

	category.innerHTML = `
		<div class="font-icoins-container">
			<i class="fas fa-${name} ${color}"></i>
			<span>${name}</span>
	  </div>
	`;
	target.append(category);
};

// Funzione che stampa il Template 
function stampTemplate(arreyObject) {
	for (let key in arreyObject) {
		createTemplate(sectionMain, arreyObject[key])
	}
}

// Funzione che stampa il Template in base al value
function stampEveryTemplate() {

	sectionMain.innerHTML = '';

	if (form.value === 'animal') {
		stampTemplate(animal);
	} else if (form.value === 'vegetable'){
		stampTemplate(vegetable);
	} else if (form.value === 'user'){
		stampTemplate(user);
	} else {
		stampTemplate(icons);
	}
	
}


