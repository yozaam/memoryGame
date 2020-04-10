document.addEventListener('DOMContentLoaded',()=>{

	//cards 
	const cardArray = [
		
		{
			name:'dog',
			img:'images/dog.png'
		},
	
		{
			name:'virus',
			img:'images/virus.png'
		},
		{
			name:'programmer',
			img:'images/programmer.png'
		},
		{
			name:'musician',
			img:'images/musician.png'
		},
		{
			name:'soldier',
			img:'images/soldier.png'
		},
		{
			name:'king',
			img:'images/king.png'
		},
		{
			name:'dog',
			img:'images/dog.png'
		},
		{
			name:'virus',
			img:'images/virus.png'
		},
		{
			name:'programmer',
			img:'images/programmer.png'
		},
		{
			name:'musician',
			img:'images/musician.png'
		},
		{
			name:'soldier',
			img:'images/soldier.png'
		},
		{
			name:'king',
			img:'images/king.png'
		}
	]

	cardArray.sort(()=> 0.5-Math.random())


	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	const alertDisplay = document.querySelector('#alert')

	var cardsChosen = []
	var cardsChosenId = []
	var cardsWon = []

	window.analytics = {
		
		score:0,
		wrong:0		
		
	}



	//create the board
	function createBoard(){
		for(let i = 0 ; i < cardArray.length ; i++){
			var card = document.createElement('img')
			card.setAttribute('src','images/star.png')
			card.setAttribute('data-id',i)
			card.addEventListener('click',flipcard)
			grid.appendChild(card)
		}
		window.analytics.start = new Date();
	}

	//check for matches
	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if(cardsChosen[0] === cardsChosen[1]){
			alertDisplay.textContent = 'You found a match :D'
			cards[optionOneId].setAttribute('src','images/white.png')
			cards[optionTwoId].setAttribute('src','images/white.png')
			cardsWon.push(cardsChosen)
		}else{
			cards[optionOneId].setAttribute('src','images/star.png')
			cards[optionTwoId].setAttribute('src','images/star.png')
			alertDisplay.textContent = 'sorry try again :('
			window.analytics.wrong++
		}
		cardsChosen = []
		cardsChosenId =[]
		resultDisplay.textContent = cardsWon.length
		if(cardsWon.length === cardArray.length/2){
			resultDisplay.textContent = 'Congratulations! You found them all!'
			window.analytics.end = new Date()
			window.analytics.time = (window.analytics.end.getTime()-window.analytics.start.getTime())/1000
			window.analytics.score = window.analytics.time*window.analytics.wrong

			alertDisplay.textContent='YOU were better than '+(Math.floor(Math.random() * 41) + 50)+'% of users :D\r\ntime='+window.analytics.time+'\r\n lives='+window.analytics.wrong+'\r\nscore='+Math.floor(window.analytics.score)
			alertDisplay.setAttribute('id','finalResult')

		}
		if(window.analytics.score>0)
			newPostRef.set(window.analytics);
	}


	//flip your card
	function flipcard(){
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src',cardArray[cardId].img)
		if(cardsChosen.length === 2)
			setTimeout(checkForMatch,500)
	}
		window.analytics.age = prompt("Please enter you age :D")
		window.analytics.name = prompt("Please enter your name")
		person = window.analytics.name
	  if (person == null || person == "") {
	    	alert('no name, buddy? ;)')
	    	window.analytics.name="anon"
	    	createBoard()
	  } else {
	    	createBoard()
	  }


	// Your web app's Firebase configuration
	  
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
	  // Get a reference to the database service
	  var database = firebase.database();

	  

	  // Create a new post reference with an auto-generated id
	  	postListRef = database.ref('memoryGame/analytics/')
		var newPostRef = postListRef.push();
		


})