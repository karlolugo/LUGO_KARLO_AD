var x, y, height = Math.floor(Math.random() * (10)) + 1,
    pattern = "";

for (x = 1; x <= height; x++) {
    for (y = x; y != 0; y--) {
        pattern += "*";
    }
    pattern += "\n";
}

n(1);
console.log("Randomized Height: " + height);
console.log("\n" + pattern);

function n(y) {
    for (var x = 0; x < y; x++)
        console.log("\n");
}