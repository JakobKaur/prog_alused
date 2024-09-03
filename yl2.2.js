const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function kontrolliNime(nimi) {
    if (nimi.slice(-2) === "ne") {
        return "Abielus";
    } else if (nimi.slice(-2) === "te") {
        return "Vallaline";
    } else if (nimi.slice(-1) === "e") {
        return "Määramata";
    } else {
        return "Pole ilmselt leedulanna perekonnanimi";
    }
}

rl.question("Sisestage Leedu perekonnanimi: ", function(nimi) {
    const tulemus = kontrolliNime(nimi);
    console.log(tulemus);
    rl.close();
});
