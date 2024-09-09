const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Mitu korda äratus heliseb? ', (input) => {
  let alarmCount = Number(input);
  
  if (alarmCount > 0) {
    for (let i = 0; i < alarmCount; i++) {
      console.log('Tõuse ja sära!');
    }
  } else {
    console.log('Palun sisesta positiivne arv.');
  }
  
  rl.close();
});
