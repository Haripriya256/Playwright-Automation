let p= 5;

for (let i = 1; i <= p; i++) {
    let pattern = "";

    for (let j = i; j <= p; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}


let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    // Print spaces
    for (let j = 1; j < i; j++) {
        row += " ";
    }

    // Print stars
    for (let k = 1; k <= 2 * (n - i) + 1; k++) {
        row += "*";
    }

    console.log(row);
}
