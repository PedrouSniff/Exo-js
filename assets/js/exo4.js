// Exo4 //
let points = 0
for (i = 0; i <= 100; i++) {
    if (i%3 == 0 || i%5 == 0) {
        points++;
        console.log(`${i} est un multiple de 3 ou de 5. Points: ${points}`);  
    }
}