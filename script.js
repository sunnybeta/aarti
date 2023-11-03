let playing = false;
let currentAudio = null;

function search() {
	const searchText = document.querySelector(".search .bar input").value.toLowerCase();
	let cards = document.querySelectorAll(".card");
	for (let i = 0; i < cards.length; i++) {
		if (cards[i].innerText.toLowerCase().includes(searchText)) {
			cards[i].style.display = "block";
		}
		else {
			cards[i].style.display = "none";
		}
	}
}

const idSongMap = {
	"jai-ambe-gauri" : "Anuradha Paudwal - Jai Ambe Gauri.mp3",
	"jai-ganesh-deva" : "Anuradha Paudwal - Jai Ganesh Deva.mp3",
	"om-jai-shiv-omkara" : "Anuradha Paudwal - Om Jai Shiv Omkara.mp3",
	"aarti-hanuman-lala-ki" : "Hariharan - Aarti Keejei Hanuman Lala Ki.mp3",
	"hanuman-chalisa-ashtak" : "Hariharan - Hanuman Chalisa Ashtak.mp3",
	"om-namah-shivay" : "Kavitha Krishnamurthy - Om Namah Shivay.mp3",
};

function play(e) {
	if (playing) {
		currentAudio.pause();
		playing = false;
	}
	const songId = e.target.parentElement.id;
	var audio = new Audio("songs/" + idSongMap[songId]);
	currentAudio = audio;
	playing = true;
	audio.play();
}

function stop() {
	currentAudio.pause();
	playing = false;
}

function resume() {
	if (currentAudio) {
		playing = true;
		currentAudio.play();
	}
}
