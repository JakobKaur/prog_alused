const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Sisesta õhutemperatuur: ', (input) => {
    let temperature = parseFloat(input);

    if (temperature > 4.0) {
        console.log("Ei ole jäätumise ohtu");
    } else {
        console.log("On jäätumise oht");
    }

    rl.close();
});
