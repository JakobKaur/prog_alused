const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Palun sisesta vajalike täringute arv: ', (input) => {
  const numDice = parseInt(input, 10);

  if (numDice > 0) {
    for (let i = 0; i < numDice; i++) {
      console.log(Math.floor(Math.random() * 6) + 1);
    }
  } else {
    console.log('Palun sisesta kehtiv arv, mis on suurem kui 0.');
  }

  rl.close();
});
