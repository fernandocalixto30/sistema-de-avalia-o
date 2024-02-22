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
  