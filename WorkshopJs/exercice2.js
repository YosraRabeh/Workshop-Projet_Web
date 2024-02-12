function sommeDiviseurs(n) {
    let somme = 1; 
    for (let i = 2; i * i <= x; i++) {
        if (n % i === 0) {
            somme += i;
            var  d = n / i;
            if (d !== i) {
                somme += d;
            }
        }
    }
    return somme;
}

function nombresParfaits(n) {
    for (let i = 2; i < n; i++) {
        if (sommeDiviseurs(i) === i) {
            console.log(i);
        }
    }
}

const n = 30;
nombresParfaits(n);
