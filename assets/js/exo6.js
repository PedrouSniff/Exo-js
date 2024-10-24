// Exo6 //
for (i = 2; i < 100; i++) {
    let estPremier = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            estPremier = false

        }
    }

    if (estPremier) {
        console.log(i);
    }
   
}