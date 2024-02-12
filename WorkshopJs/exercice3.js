const chaine1 = "yosra";
const chaine2 = "rabeh";

const resultats = [];

for (let i = 0; i < chaine1.length; i++) {
    for (let j = 0; j < chaine2.length; j++) {
        resultats.push(chaine1[i] + chaine2[j]);
    }
}

console.log(resultats);
