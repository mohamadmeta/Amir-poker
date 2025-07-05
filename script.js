const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];
let flopCards = [], turnCard, riverCard;

function createDeck() {
  deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }
  shuffle(deck);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startGame() {
  createDeck();

  document.getElementById("btn-flop").disabled = false;
  document.getElementById("btn-turn").disabled = true;
  document.getElementById("btn-river").disabled = true;

  for (let id of ['flop1', 'flop2', 'flop3', 'turn', 'river']) {
    let el = document.getElementById(id);
    el.classList.add("hidden");
    el.textContent = '';
  }

  let p1 = deck.pop();
  let p2 = deck.pop();
  document.getElementById("player1").textContent = p1.value + p1.suit;
  document.getElementById("player2").textContent = p2.value + p2.suit;

  flopCards = [deck.pop(), deck.pop(), deck.pop()];
  turnCard = deck.pop();
  riverCard = deck.pop();
}

function showFlop() {
  document.getElementById("flop1").textContent = flopCards[0].value + flopCards[0].suit;
  document.getElementById("flop2").textContent = flopCards[1].value + flopCards[1].suit;
  document.getElementById("flop3").textContent = flopCards[2].value + flopCards[2].suit;
  for (let id of ['flop1', 'flop2', 'flop3']) {
    document.getElementById(id).classList.remove("hidden");
  }
  document.getElementById("btn-flop").disabled = true;
  document.getElementById("btn-turn").disabled = false;
}

function showTurn() {
  let el = document.getElementById("turn");
  el.textContent = turnCard.value + turnCard.suit;
  el.classList.remove("hidden");
  document.getElementById("btn-turn").disabled = true;
  document.getElementById("btn-river").disabled = false;
}

function showRiver() {
  let el = document.getElementById("river");
  el.textContent = riverCard.value + riverCard.suit;
  el.classList.remove("hidden");
  document.getElementById("btn-river").disabled = true;
}
