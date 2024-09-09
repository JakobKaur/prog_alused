const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Kui palju pöialpoisse tahab õunu (0 kuni 7)? ', (answer) => {
  const numOfDwarfs = parseInt(answer, 10);
  
  let apples = 14;

  for (let i = 0; i < numOfDwarfs; i++) {
    const applesForDwarf = Math.random() < 0.5 ? 1 : 2;
    console.log(`Pöialpoiss ${i + 1} sai ${applesForDwarf} õuna.`);
    apples -= applesForDwarf;
  }

  console.log(`Lumivalgekesele jäi ${apples} õuna.`);

  rl.close();
});
s