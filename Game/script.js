let player = [
  { team: "chelsea", attack: 80, defence: 80, midfield: 90 },
  { team: "manu", attack: 80, defence: 80, midfield: 90 },
  { team: "arsenal", attack: 80, defence: 80, midfield: 90 },
  { team: "liverpool", attack: 80, defence: 80, midfield: 90 },
  { team: "mancity", attack: 80, defence: 80, midfield: 90 },
  { team: "tottenham", attack: 80, defence: 80, midfield: 90 },
  { team: "wolves", attack: 80, defence: 80, midfield: 90 },
  { team: "leicester", attack: 80, defence: 80, midfield: 90 },
  { team: "sheffield", attack: 80, defence: 80, midfield: 90 },
  { team: "burnley", attack: 80, defence: 80, midfield: 90 },
];
let opponent = [
  { team: "real", attack: 80, defence: 80, midfield: 90 },
  { team: "barca", attack: 80, defence: 80, midfield: 90 },
  { team: "sevilla", attack: 80, defence: 80, midfield: 90 },
  { team: "atletico", attack: 80, defence: 80, midfield: 90 },
  { team: "sociedad", attack: 80, defence: 80, midfield: 90 },
  { team: "valencia", attack: 80, defence: 80, midfield: 90 },
  { team: "getafe", attack: 80, defence: 80, midfield: 90 },
  { team: "villareal", attack: 80, defence: 80, midfield: 90 },
  { team: "athletic", attack: 80, defence: 80, midfield: 90 },
  { team: "granada", attack: 80, defence: 80, midfield: 90 },
];

function PlayGame(team, attack, defense, midfield) {
  this.attack = attack;
  this.defense = defense;
  this.midfield = midfield;
  this.team = team;
}

let playrs = (player) => {
  let newp = [];
  x = document.querySelector("#players");
  player.map((p) => newp.push(`<li>${p.team}</li>`));
  x.innerHTML = newp;
};
let opponnts = (opponent) => {
  // let opponent = ["ronaldo", "rivaldo", "ozil"];
  return opponent;
};
playrs(player);
opponnts(opponent);
player = new PlayGame("crystal", 76, 75, 72);
opponent = new PlayGame("betis", 77, 76, 66);
PlayGame.prototype.goalkeep = 80;
console.log(player.goalkeep);