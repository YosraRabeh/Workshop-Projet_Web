let T = [17, 38, 10, 25, 72];

T.sort((a, b) => a - b);
console.log("Tableau trié :", T);

T.push(12);
console.log("Tableau avec l'élément 12 ajouté :", T);

T.reverse();
console.log("Tableau renversé :", T);

const indice17 = T.indexOf(17);
console.log("Indice de l'élément 17 :", indice17);

T.splice(T.indexOf(38), 1);
console.log("Tableau après suppression de l'élément 38 :", T);

const sousTableau23 = T.slice(1, 3);
console.log("Sous-tableau du 2e au 3e élément :", sousTableau23);

const sousTableauDebut2 = T.slice(0, 2);
console.log("Sous-tableau du début au 2e élément :", sousTableauDebut2);

const sousTableau3Fin = T.slice(2);
console.log("Sous-tableau du 3e élément à la fin de la liste :", sousTableau3Fin);
