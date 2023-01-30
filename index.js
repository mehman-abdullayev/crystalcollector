function startGame() {
	document.getElementById('heading').innerText = 'Guess Game';
	var button = document.getElementById('button');
	button.innerText = 'End Game'; button.setAttribute('onclick', 'endGame()');
	document.getElementById('p1').innerText = 'Guess the word below by pressing letters on keyboard. You can type maximum 13 letters';
	
	const words = [ 
		'experiment', 
		'photograph',
		'decorative',
		'substitute',
		'instrument',
		'restaurant',
		'functional',
		'substitute',
		'withdrawal',
		'thoughtful' 
	], 
	word = words[Math.floor(Math.random() * words.length)];
	
	console.log('Hint: ' + word);
	let array = [ ], chances = 13;
	for (let i = 0; i < word.length; i++) array.push(' - ');
	
	let p = document.createElement('p');
	p.innerText = array.join('');
	p.setAttribute('id', 'p2');
	p.style.fontSize = '20px';
	document.body.append(p);
	
	document.body.addEventListener('keydown', function () {
		if (chances > 0) {
			const key = event.key;
			console.log(key);
			if (word.includes(key)) {
				let index = word.indexOf(key);
				if (array.includes(key)) {
					index = word.indexOf(key, array.lastIndexOf(key) + 1);
				}
				array[index] = key;
				p.innerText = array.join('');
			}
			chances--;
			if (!array.includes(' - ')) {
				let p1 = document.createElement('p');
				p1.style.fontSize = '22px';
				p1.innerText = "Congratulations! You Guessed The Word!";
				document.body.append(p1);
			}
		} else {
			p.innerText = "Game Over!";
		}
	});
}

function endGame() { location.reload(); }