const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Sisesta astme alus (täisarv): ', (alus) => {
    readline.question('Sisesta astendaja (täisarv): ', (astendaja) => {
      const result = alus ** astendaja;
      console.log(vastus);
      readline.close();
    });
  });
  