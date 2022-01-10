// Блоки
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const div7 = document.getElementById('div7');

//Кнопки
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');

//result span
const result = document.getElementById('result');
const preResult = document.getElementById('preResult');
const resultSportCharacters = document.getElementById('resultSportCharacters');

//Стоковые характеристики
amountPeople = '';
duration = '';
intensity = '';
changeWeight = '';

//Получаем выбранное пользователем значение из Select
const amountPeopleSelect = document.getElementById('amountPeopleSelect');
const durationSelect = document.getElementById('durationSelect');
const intensitySelect = document.getElementById('intensitySelect');
const changeWeightSelect = document.getElementById('changeWeightSelect');

//Промежуточные переменные
let tempArray = [];
let tempArray2 = [];
let tempArray3 = [];
let tempArray4 = [];
let weight = 0;
let preResultArray = [];

//Скрипты
button1.addEventListener('click',() => {
	div1.classList.add('d-none');
	div2.classList.remove('d-none');
});

button2.addEventListener('click',() => {
	amountPeople = amountPeopleSelect.value;

	for (let i = 0; i < data.length; i++) {
		if (amountPeople === data[i].amountPeople) {
			tempArray.push(data[i]);
		}
	}

	div7.classList.remove('d-none');

	for (let i = 0; i < 1; i++) {
		preResultArray[i] = tempArray[i];
		preResult.innerHTML += preResultArray[i].sport + "<br>";
	}


	div2.classList.add('d-none');
	div3.classList.remove('d-none');
});

button3.addEventListener('click',() => {
	duration = durationSelect.value;

	for (let i = 0; i < tempArray.length; i++) {
		if (duration === tempArray[i].duration) {
			tempArray2.push(tempArray[i]);
		}
	}

	preResultArray = [];
	preResult.innerHTML = "";


	if (tempArray2.length != 0) {
		for (let i = 0; i < 1; i++) {
			preResultArray[i] = tempArray2[i];
			preResult.innerHTML += preResultArray[i].sport + "<br>";
		}
	}
	else {
		for (let i = 0; i < 1; i++) {
			preResultArray[i] = tempArray[i];
			preResult.innerHTML += preResultArray[i].sport + "<br>";
		}
	}
	

	div3.classList.add('d-none');
	div4.classList.remove('d-none');
});

button4.addEventListener('click',() => {
	intensity = intensitySelect.value;

	for (let i = 0; i < tempArray2.length; i++) {
		if (intensity === tempArray2[i].intensity) {
			tempArray3.push(tempArray2[i]);
		}
	}

	preResultArray = [];
	preResult.innerHTML = "";

	if (tempArray3.length != 0) {
		for (let i = 0; i < 1; i++) {
			preResultArray[i] = tempArray3[i];
			preResult.innerHTML += preResultArray[i].sport + "<br>";
		}
	}
	else if (tempArray2.length != 0) {
		for (let i = 0; i < 1; i++) {
			preResultArray[i] = tempArray2[i];
			preResult.innerHTML += preResultArray[i].sport + "<br>";
		}
	}
	else {
		for (let i = 0; i < 1; i++) {
			preResultArray[i] = tempArray[i];
			preResult.innerHTML += preResultArray[i].sport + "<br>";
		}
	}

	div4.classList.add('d-none');
	div5.classList.remove('d-none');
});

button5.addEventListener('click',() => {
	changeWeight = changeWeightSelect.value;

	for (let i = 0; i < tempArray3.length; i++) {
		if (changeWeight === tempArray3[i].changeWeight) {
			tempArray4.push(tempArray3[i]);
		}
	}

	preResultArray = [];
	preResult.innerHTML = "";
	div7.classList.add('d-none');

	if (tempArray4.length === 0) {
		if (tempArray3.length === 0) {
			if (tempArray2.length === 0) {
				for (let i = 0; i < tempArray.length; i++) {
					result.innerHTML += tempArray[i].sport + "</br>";
				}
			}
			else {
				for (let i = 0; i < tempArray2.length; i++) {
					result.innerHTML += tempArray2[i].sport + "</br>";
				}
			}
		}
		else {
			for (let i = 0; i < tempArray3.length; i++) {
				result.innerHTML += tempArray3[i].sport + "</br>";
			}
		}
	}
	else {
		for (let i = 0; i < tempArray4.length; i++) {
			result.innerHTML += tempArray4[i].sport + "</br>";
		}
	}

	resultSportCharacters.innerHTML = amountPeople + ', ' + duration + ', ' + intensity + ', ' + changeWeight;



	div5.classList.add('d-none');
	div6.classList.remove('d-none');
});