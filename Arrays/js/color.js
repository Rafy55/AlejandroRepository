$(document).ready(function() {
    // run function on initial page load
	colorGuess();
});

function colorGuess() {
	var colorArray = ["Mario","DonkeyKong","Link","Samus","DarkSamus","Yoshi","Kirby","Fox","Pikachu","Luigi","Ness","CaptainFalcon","Jigglypuff","Peach","Daisy","Bowser","IceClimbers","Shiek","Zelda","DrMario","Pichu","Falco","Marth","Lucina","YoungLink","Ganondorf","Mewtwo","Roy","Chrom","MrGame&Watch","MetaKnight","Pit","DarkPit","ZeroSuitSamus","Wario","Snake","Ike","PokemonTrainer","DiddyKong","Lucas","Sonic","KingDedede","Olimar","Lucario","ROB","ToonLink","Wolf","Villager","MegaMan","WiiFitTrainer","Rosalina","LittleMac","Greninja","MiiFighter","Palutena","PacMan","Robin","Shulk","BowserJr","DuckHunt","Ryu","Ken","Cloud","Corrin","Bayonetta","Inkling","Ridley","Simon","Richter","KingKRool","Isabelle","Incineroar","PiranhaPlant","Joker","Hero","Banjo&Kazooie","Terry"];
	var randomNumber = Math.floor(Math.random() * colorArray.length);
	var stripped = colorArray[randomNumber].toLowerCase();
	console.log(colorArray[randomNumber]);
	console.log(stripped);
	// $('body').css('background-color', colorArray[randomNumber]);
	$('body').css(colorArray[randomNumber]);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == colorArray[randomNumber]) {
			$('h1').text(guess + ' is right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is wrong');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	});
	$(document).keypress(function(e){
			if(e.which == 13){ //Enter key pressed
					$('#submit').click();//Trigger button click event
			}
	});
}
