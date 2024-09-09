const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Sisesta ringide arv: ", function(ringideArv) {
  ringideArv = parseInt(ringideArv);

  let porganditeSumma = 0;

  for (let i = 2; i <= ringideArv; i += 2) {
    porganditeSumma += i;
  }

  console.log("Saadavate porgandite koguarv: " + porganditeSumma);

  rl.close();
});
