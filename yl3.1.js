const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Sisesta, mitu korda äratus heliseb: ', (count) => {
    count = parseInt(count, 10); 

    if (isNaN(count) || count <= 0) {
        console.log("Palun sisesta positiivne täisarv.");
    } else {
        for (let i = 0; i < count; i++) {
            console.log('Tõuse ja sära!');
        }
    }

    rl.close();
});
