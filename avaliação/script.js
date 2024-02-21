// document.addEventListener("DOMContentLoaded", function () {
// 	const numbers = document.querySelectorAll('.number');
// 	let selectedNumber = null;

// 	numbers.forEach((number) => {
// 	  number.addEventListener('click', function () {
// 		// Remove a classe 'selected' da div anteriormente selecionada (se houver)
// 		if (selectedNumber) {
// 		  selectedNumber.classList.remove('selected');
// 		}

// 		// Adiciona a classe 'selected' à div clicada
// 		this.classList.add('selected');

// 		// Armazena o valor do número atualmente selecionado
// 		selectedNumber = parseInt(this.textContent);

// 		// Exemplo: Faça algo com o número selecionado
// 		console.log("Número selecionado:", selectedNumber);

// 		// Adicione a lógica para lidar com o envio do formulário ou qualquer outra ação necessária
// 	  });
// 	});
//   });

// document.addEventListener("DOMContentLoaded", function () {
// 	const numbers = document.querySelectorAll('.number');
// 	let selectedNumber = null;

// 	numbers.forEach((number) => {
// 		number.addEventListener('click', function () {


// 			if (selectedNumber) {
// 				selectedNumber.classList.remove('selected');

// 			}


//               this.classList.add('selected');

// 			// Verifica se já há um número selecionado
// 			// if (selectedNumber === null) {
// 			// 	// Adiciona a classe 'selected' à div clicada


// 			// 	// Armazena o valor do número atualmente selecionado
// 			// 	selectedNumber = parseInt(this.textContent);

// 			// 	// Exemplo: Faça algo com o número selecionado
// 			// 	console.log("Número selecionado:", selectedNumber);

// 			// 	// Adicione a lógica para lidar com o envio do formulário ou qualquer outra ação necessária
// 			// }

// 		});
// 	});
// });









// document.addEventListener("DOMContentLoaded", function () {
// 	const numbers = document.querySelectorAll('.number');
// 	let selectedNumber = null;

// 	numbers.forEach((number) => {
// 		number.addEventListener('click', function () {
// 			// Remove a classe 'selected' da div anteriormente selecionada (se houver)
// 			if (selectedNumber) {
// 				selectedNumber.classList.remove('selected');
// 			}
// 			let nota = document.getElementById('result')
// 			// Adiciona a classe 'selected' à div clicada
// 			this.classList.add('selected');
// 			selectedNumber = parseInt(this.textContent);
// 			console.log("Número selecionado:", selectedNumber);
// 			// Armazena a div atualmente selecionada
// 			selectedNumber = this;

// 		});
// 	});

// 	// Adicione a lógica para lidar com o envio do formulário ou qualquer outra ação necessária
// });
// function avaliar(){
	
// 	if(selectedNumber = null){
// 		alert('[ERRO] selecione um numero para avaliar!')
// 	}
// }

























// document.addEventListener("DOMContentLoaded", function () {
// 	// Armazena a div da página 1 e da página 2
// 	const pagina1 = document.getElementById("pagina1");
// 	const pagina2 = document.getElementById("pagina2");
  
// 	// Armazena o elemento de resultado
// 	const resultElement = document.getElementById("result");
  
// 	// Função para avaliar quando o botão é clicado
// 	function avaliar() {
// 	  // Obtém a lista de elementos com a classe "number"
// 	  const numbers = document.querySelectorAll('.number');
  
// 	  // Verifica qual número foi selecionado
// 	  let selectedNumber = null;
// 	  numbers.forEach((number) => {
// 		if (number.classList.contains('selected')) {
// 		  selectedNumber = parseInt(number.getAttribute('value'));
// 		}
// 	  });
  
// 	  // Atualiza o resultado
// 	  resultElement.textContent = selectedNumber;
  
// 	  // Esconde a página 1 e mostra a página 2
// 	  pagina1.style.display = "none";
// 	  pagina2.style.display = "block";
// 	}
  
// 	// Adiciona o evento de clique a cada elemento com a classe "number"
// 	const numbers = document.querySelectorAll('.number');
// 	numbers.forEach((number) => {
// 	  number.addEventListener('click', function () {
// 		// Remove a classe 'selected' da div anteriormente selecionada (se houver)
// 		numbers.forEach((n) => n.classList.remove('selected'));
  
// 		// Adiciona a classe 'selected' à div clicada
// 		this.classList.add('selected');
// 	  });
// 	});
//   });
  
















// document.addEventListener("DOMContentLoaded", function () {
// 	const numbers = document.querySelectorAll('.number');
// 	const pagina1 = document.getElementById('pagina1');
// 	const pagina2 = document.getElementById('pagina2');
// 	let selectedNumber = null;
  
// 	function avaliar() {
// 	  if (selectedNumber !== null) {
// 		pagina1.style.display = 'none';
// 		pagina2.style.display = 'flex';
// 		document.getElementById('result').textContent = selectedNumber;
// 	  } else {
// 		alert('Please select a rating before submitting.');
// 	  }
// 	}
  
// 	numbers.forEach((number) => {
// 	  number.addEventListener('click', function () {
// 		if (selectedNumber === null) {
// 		  this.classList.add('selected');
// 		  selectedNumber = parseInt(this.getAttribute('value'));
// 		}
// 	  });
// 	});
  
// 	document.getElementById('button').addEventListener('click', avaliar);
//   });
document.addEventListener("DOMContentLoaded", function () {
	const numbers = document.querySelectorAll('.number');
	const pagina1 = document.getElementById('pagina1');
	const pagina2 = document.getElementById('pagina2');
	let selectedNumber = null;
  
	function avaliar() {
	  if (selectedNumber !== null) {
		pagina1.style.display = 'none';
		pagina2.style.display = 'flex';
		document.getElementById('result').textContent = selectedNumber;
	  } else {
		alert('Please select a rating before submitting!');
	  }
	}
  
	numbers.forEach((number) => {
	  number.addEventListener('click', function () {
		if (selectedNumber !== null) {
		  // Remove a seleção da classe 'selected' da div anteriormente selecionada
		  document.querySelector('.number.selected').classList.remove('selected');
		}
  
		// Adiciona a classe 'selected' à div clicada
		this.classList.add('selected');
		selectedNumber = parseInt(this.getAttribute('value'));
	  });
	});
  
	document.getElementById('button').addEventListener('click', avaliar);
  });
  